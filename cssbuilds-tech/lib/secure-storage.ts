// Secure Storage Utilities
// Enhanced localStorage wrapper with security considerations

interface StorageOptions {
  encrypt?: boolean;
  expiry?: number; // milliseconds
  validate?: (value: any) => boolean;
}

class SecureStorage {
  private prefix = 'cssbuilds_';

  // Simple XOR encryption for basic obfuscation
  private encrypt(text: string): string {
    const key = 'cssbuilds-security-key';
    let result = '';
    for (let i = 0; i < text.length; i++) {
      result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return btoa(result);
  }

  private decrypt(encrypted: string): string {
    try {
      const text = atob(encrypted);
      const key = 'cssbuilds-security-key';
      let result = '';
      for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
      }
      return result;
    } catch {
      return '';
    }
  }

  setItem(key: string, value: any, options: StorageOptions = {}): boolean {
    try {
      const data = {
        value,
        timestamp: Date.now(),
        expiry: options.expiry ? Date.now() + options.expiry : null,
      };

      let serialized = JSON.stringify(data);
      
      if (options.encrypt) {
        serialized = this.encrypt(serialized);
      }

      localStorage.setItem(this.prefix + key, serialized);
      return true;
    } catch (error) {
      console.warn('Failed to store data:', error);
      return false;
    }
  }

  getItem(key: string, options: StorageOptions = {}): any {
    try {
      let stored = localStorage.getItem(this.prefix + key);
      if (!stored) return null;

      if (options.encrypt) {
        stored = this.decrypt(stored);
        if (!stored) return null;
      }

      const data = JSON.parse(stored);

      // Check expiry
      if (data.expiry && Date.now() > data.expiry) {
        this.removeItem(key);
        return null;
      }

      // Validate if validator provided
      if (options.validate && !options.validate(data.value)) {
        this.removeItem(key);
        return null;
      }

      return data.value;
    } catch (error) {
      console.warn('Failed to retrieve data:', error);
      this.removeItem(key); // Clean up corrupted data
      return null;
    }
  }

  removeItem(key: string): void {
    localStorage.removeItem(this.prefix + key);
  }

  clear(): void {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(this.prefix)) {
        localStorage.removeItem(key);
      }
    });
  }

  // Clean expired items
  cleanup(): void {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(this.prefix)) {
        try {
          const stored = localStorage.getItem(key);
          if (stored) {
            const data = JSON.parse(stored);
            if (data.expiry && Date.now() > data.expiry) {
              localStorage.removeItem(key);
            }
          }
        } catch {
          localStorage.removeItem(key); // Remove corrupted data
        }
      }
    });
  }
}

export const secureStorage = new SecureStorage();

// Validators
export const validators = {
  boolean: (value: any): boolean => typeof value === 'boolean',
  string: (value: any): boolean => typeof value === 'string' && value.length < 1000,
  number: (value: any): boolean => typeof value === 'number' && !isNaN(value),
};
