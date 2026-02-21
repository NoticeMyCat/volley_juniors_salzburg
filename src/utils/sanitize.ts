export const sanitizeInput = (input: string): string => {
    if (!input) return '';
    // Basic HTML entity encoding and tag removal to prevent XSS
    return input
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;")
        .replace(/\//g, "&#x2F;");
};
