import { Redis } from "@upstash/redis";

export interface RateLimitConfig {
    interval: number; // Window size in milliseconds
    limit: number; // Max requests per interval
}

export class RateLimiter {
    private storage = new Map<string, number[]>();
    private config: RateLimitConfig;
    private redis: Redis | null = null;

    constructor(config: RateLimitConfig) {
        this.config = config;

        if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
            this.redis = new Redis({
                url: process.env.UPSTASH_REDIS_REST_URL,
                token: process.env.UPSTASH_REDIS_REST_TOKEN,
            });
        }
    }

    async check(key: string): Promise<boolean> {
        if (this.redis) {
            try {
                const redisKey = `rate_limit:${key}`;
                // Use a simple counter with expiration
                const requests = await this.redis.incr(redisKey);

                if (requests === 1) {
                    await this.redis.expire(redisKey, Math.ceil(this.config.interval / 1000));
                }

                return requests <= this.config.limit;
            } catch (error) {
                console.warn("Redis rate limit check failed, falling back to in-memory:", error);
                // Fallback to in-memory
            }
        }

        // In-memory fallback
        const now = Date.now();
        const timestamps = this.storage.get(key) || [];

        // Filter out old timestamps
        const validTimestamps = timestamps.filter(t => now - t < this.config.interval);

        if (validTimestamps.length >= this.config.limit) {
            return false;
        }

        validTimestamps.push(now);
        this.storage.set(key, validTimestamps);

        return true;
    }
}

// Default instance
export const contactFormRateLimiter = new RateLimiter({
    interval: 60 * 1000, // 1 minute
    limit: 5, // 5 requests per minute
});
