// Security Monitoring Utilities
// Client-side security event tracking and anomaly detection

interface SecurityEvent {
  type: 'csp_violation' | 'suspicious_activity' | 'rate_limit_exceeded' | 'form_spam';
  details: Record<string, any>;
  timestamp: number;
  userAgent: string;
  url: string;
}

class SecurityMonitor {
  private events: SecurityEvent[] = [];
  private maxEvents = 100;

  constructor() {
    this.setupCSPViolationListener();
    this.setupSuspiciousActivityDetection();
  }

  // Listen for CSP violations
  private setupCSPViolationListener(): void {
    if (typeof window !== 'undefined') {
      document.addEventListener('securitypolicyviolation', (e) => {
        this.logEvent('csp_violation', {
          violatedDirective: e.violatedDirective,
          blockedURI: e.blockedURI,
          originalPolicy: e.originalPolicy,
          effectiveDirective: e.effectiveDirective,
        });
      });
    }
  }

  // Detect suspicious activity patterns
  private setupSuspiciousActivityDetection(): void {
    if (typeof window !== 'undefined') {
      // Monitor for rapid form submissions
      let formSubmissions = 0;
      const resetFormCount = () => { formSubmissions = 0; };
      
      document.addEventListener('submit', () => {
        formSubmissions++;
        if (formSubmissions > 5) {
          this.logEvent('suspicious_activity', {
            type: 'rapid_form_submissions',
            count: formSubmissions,
          });
        }
        setTimeout(resetFormCount, 60000); // Reset after 1 minute
      });

      // Monitor for suspicious console access
      let consoleAccessCount = 0;
      const originalConsole = window.console;
      const resetConsoleCount = () => { consoleAccessCount = 0; };
      
      // This is a basic detection - in production, use more sophisticated methods
      setInterval(() => {
        if (window.console !== originalConsole) {
          consoleAccessCount++;
          if (consoleAccessCount > 3) {
            this.logEvent('suspicious_activity', {
              type: 'console_manipulation',
              count: consoleAccessCount,
            });
          }
        }
        setTimeout(resetConsoleCount, 300000); // Reset after 5 minutes
      }, 10000);
    }
  }

  // Log security events
  logEvent(type: SecurityEvent['type'], details: Record<string, any>): void {
    const event: SecurityEvent = {
      type,
      details,
      timestamp: Date.now(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
    };

    this.events.push(event);

    // Keep only recent events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }

    // In production, send critical events to your security monitoring service
    if (this.isCriticalEvent(type)) {
      this.reportCriticalEvent(event);
    }

    // Store locally for debugging
    try {
      localStorage.setItem('security_events', JSON.stringify(this.events.slice(-10)));
    } catch {
      // Ignore storage errors
    }
  }

  private isCriticalEvent(type: SecurityEvent['type']): boolean {
    return ['csp_violation', 'suspicious_activity'].includes(type);
  }

  private reportCriticalEvent(event: SecurityEvent): void {
    // In production, implement actual reporting
    console.warn('Security Event:', event);
    
    // Example: Send to monitoring service
    // fetch('/api/security/report', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(event),
    // }).catch(() => {
    //   // Handle reporting errors silently
    // });
  }

  // Get recent security events (for debugging)
  getEvents(): SecurityEvent[] {
    return [...this.events];
  }

  // Clear events
  clearEvents(): void {
    this.events = [];
    try {
      localStorage.removeItem('security_events');
    } catch {
      // Ignore storage errors
    }
  }
}

// Initialize security monitor
export const securityMonitor = new SecurityMonitor();

// Utility functions
export function reportSpamAttempt(formData: Record<string, any>): void {
  securityMonitor.logEvent('form_spam', {
    formFields: Object.keys(formData),
    suspiciousContent: true,
  });
}

export function reportRateLimitExceeded(action: string): void {
  securityMonitor.logEvent('rate_limit_exceeded', {
    action,
    timestamp: Date.now(),
  });
}
