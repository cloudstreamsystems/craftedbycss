import { NextResponse } from "next/server";
import { validateContactForm } from "@/lib/form-security";
import { contactFormRateLimiter } from "@/lib/rate-limit";

export async function POST(request: Request) {
    try {
        // Basic rate limiting based on IP (using forwarded header or fallback)
        const ip = request.headers.get("x-forwarded-for") || "unknown";

        if (!contactFormRateLimiter.check(ip)) {
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
