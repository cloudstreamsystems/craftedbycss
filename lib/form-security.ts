// Form Security Utilities
// Use these when implementing real form submission

export interface FormValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData: Record<string, string>;
}

// Input sanitization
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: URLs
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .slice(0, 1000); // Limit length
}

// Email validation with security considerations
export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254; // RFC 5321 limit
}

// Rate limiting is now handled on the server side
// Client-side rate limiting is insecure and has been removed

// Form validation with security checks
export function validateContactForm(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): FormValidationResult {
  const errors: Record<string, string> = {};
  const sanitizedData: Record<string, string> = {};

  // Sanitize and validate name
  sanitizedData.name = sanitizeInput(formData.name);
  if (!sanitizedData.name || sanitizedData.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  if (sanitizedData.name.length > 100) {
    errors.name = 'Name must be less than 100 characters';
  }

  // Validate and sanitize email
  sanitizedData.email = sanitizeInput(formData.email.toLowerCase());
  if (!validateEmail(sanitizedData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Sanitize and validate subject
  sanitizedData.subject = sanitizeInput(formData.subject);
  if (!sanitizedData.subject || sanitizedData.subject.length < 5) {
    errors.subject = 'Subject must be at least 5 characters';
  }
  if (sanitizedData.subject.length > 200) {
    errors.subject = 'Subject must be less than 200 characters';
  }

  // Sanitize and validate message
  sanitizedData.message = sanitizeInput(formData.message);
  if (!sanitizedData.message || sanitizedData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  if (sanitizedData.message.length > 5000) {
    errors.message = 'Message must be less than 5000 characters';
  }

  // Check for spam patterns
  const spamPatterns = [
    /\b(viagra|cialis|casino|lottery|winner)\b/i,
    /\b\d{10,}\b/, // Long numbers (phone/credit card patterns)
    /(http|https):\/\/[^\s]+/g, // Multiple URLs
  ];

  const allText = `${sanitizedData.name} ${sanitizedData.subject} ${sanitizedData.message}`;
  for (const pattern of spamPatterns) {
    if (pattern.test(allText)) {
      errors.spam = 'Message contains suspicious content';
      break;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData,
  };
}
