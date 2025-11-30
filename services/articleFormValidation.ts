import { z } from 'zod';

// DOMPurify for client-side sanitization
let DOMPurify: any;
if (typeof window !== 'undefined') {
  DOMPurify = require('isomorphic-dompurify');
}

// Sanitization helpers
const sanitizeString = (value: string): string => {
  if (!value) return '';
  
  let sanitized = value;
  
  // Remove HTML tags and XSS attempts using DOMPurify if available
  if (typeof window !== 'undefined' && DOMPurify) {
    sanitized = DOMPurify.sanitize(value, { ALLOWED_TAGS: [] });
  } else {
    // Fallback: basic HTML tag removal
    sanitized = value.replace(/<[^>]*>/g, '');
  }
  
  // Remove SQL injection patterns
  const sqlPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|SCRIPT)\b)/gi,
    /(['";\\])/g,
    /(--|\/\*|\*\/|;)/g,
  ];
  
  let cleaned = sanitized;
  sqlPatterns.forEach(pattern => {
    cleaned = cleaned.replace(pattern, '');
  });
  
  return cleaned.trim();
};

const sanitizeArray = (values: string[]): string[] => {
  return values.map(val => sanitizeString(String(val))).filter(Boolean);
};

// Validation schema
export const articleFormSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(200, 'Title must be less than 200 characters')
    .transform(sanitizeString)
    .refine((val) => val.length > 0, 'Title cannot be empty after sanitization'),
  
  shortDescription: z
    .string()
    .min(1, 'Short description is required')
    .max(500, 'Short description must be less than 500 characters')
    .transform(sanitizeString)
    .refine((val) => val.length > 0, 'Short description cannot be empty after sanitization'),
  
  author: z
    .string()
    .min(1, 'Author is required')
    .max(100, 'Author name must be less than 100 characters')
    .transform(sanitizeString)
    .refine((val) => val.length > 0, 'Author cannot be empty after sanitization'),
  
  publishingDate: z
    .string()
    .min(1, 'Publishing date is required')
    .refine((date) => {
      const dateObj = new Date(date);
      return !isNaN(dateObj.getTime()) && dateObj <= new Date();
    }, 'Publishing date must be a valid date and cannot be in the future'),
  
  category: z
    .string()
    .min(1, 'Category is required')
    .refine((val) => val !== '' && val !== '0', 'Please select a valid category'),
  
  tag: z
    .array(z.string())
    .min(1, 'At least one tag is required')
    .transform(sanitizeArray)
    .refine((val) => val.length > 0, 'At least one valid tag is required'),
  
  mainImage: z
    .string()
    .min(1, 'Main article image is required'),
  
  markdownContent: z
    .string()
    .min(1, 'Article content is required')
    .min(50, 'Article content must be at least 50 characters')
    .transform(sanitizeString)
    .refine((val) => val.length >= 50, 'Article content must be at least 50 characters after sanitization'),
});

export type ArticleFormData = z.infer<typeof articleFormSchema>;

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: ArticleFormData;
}

/**
 * Validates and sanitizes article form data
 * @param formData - Raw form data to validate
 * @returns Validation result with errors and sanitized data
 */
export const validateArticleForm = (formData: {
  title: string;
  shortDescription: string;
  author: string;
  publishingDate: string;
  category: string;
  tag: string[];
  mainImage: string;
  markdownContent: string;
}): ValidationResult => {
  try {
    // Validate and sanitize
    const sanitizedData = articleFormSchema.parse(formData);
    
    return {
      isValid: true,
      errors: {},
      sanitizedData,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      
      // Map Zod errors to field names
      error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as string;
        if (!errors[fieldName]) {
          errors[fieldName] = issue.message;
        }
      });
      
      return {
        isValid: false,
        errors,
      };
    }
    
    // Unexpected error
    return {
      isValid: false,
      errors: {
        _general: 'An unexpected error occurred during validation',
      },
    };
  }
};

