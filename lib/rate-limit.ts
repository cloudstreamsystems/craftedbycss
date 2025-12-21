export interface RateLimitConfig {
    interval: number; // Window size in milliseconds
    limit: number; // Max requests per interval
}

export class RateLimiter {
    private storage = new Map<string, number[]>();
    private config: RateLimitConfig;

    constructor(config: RateLimitConfig) {
        this.config = config;
    }

    check(key: string): boolean {
        const now = Date.now();
        const timestamps = this.storage.get(key) || [];

        // Filter out old timestamps
        const validTimestamps = timestamps.filter(t => now - t < this.config.interval);

        if (validTimestamps.length >= this.config.limit) {
            return false;
        }

        validTimestamps.push(now);
        this.storage.set(key, validTimestamps);

        // Optional: Cleanup old keys periodically or on access to prevent memory leaks
        // For this simple implementation, we'll rely on the filter above to keep arrays small
        // but the map itself could grow. In a real app, use Redis with TTL.

        return true;
    }
}

// Default instance
export const contactFormRateLimiter = new RateLimiter({
    interval: 60 * 1000, // 1 minute
    limit: 5, // 5 requests per minute
});
