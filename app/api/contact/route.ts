import { NextResponse } from "next/server";
import { validateContactForm } from "@/lib/form-security";

// Simple in-memory rate limiting (for demonstration purposes)
// In production, use Redis or a similar service
const rateLimitMap = new Map<string, number[]>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) || [];

    // Filter out old timestamps
    const validTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);

    if (validTimestamps.length >= MAX_REQUESTS) {
        return true;
    }

    validTimestamps.push(now);
    rateLimitMap.set(ip, validTimestamps);
    return false;
}

export async function POST(request: Request) {
    try {
        // Basic rate limiting based on IP (using forwarded header or fallback)
        const ip = request.headers.get("x-forwarded-for") || "unknown";

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        const body = await request.json();
        const validationResult = validateContactForm(body);

        if (!validationResult.isValid) {
            return NextResponse.json(
                { error: "Validation failed", details: validationResult.errors },
                { status: 400 }
            );
        }

        // Here you would typically send the email or store the data
        // For now, we'll just log the sanitized data
        console.log("Secure Form Submission:", validationResult.sanitizedData);

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Form submission error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
