/**
 * Get all digits from string.
 * @param str string to be filtered.
 * @returns string with digits only.
 */
export const getDigits = (str: string): string => {
    return str.replace(/\D/g, "");
}

/**
 * Remove all special characters from string.
 * @param str string to be filtered.
 * @returns string without special characters.
 */
export const removeSpecialChars = (str: string): string => {
    return str.replace(/[^a-zA-Z0-9]/g, "");
}

/**
 * Capitalize only first letter of string.
 * @param str string to be capitalized.
 * @returns capitalized string.
 */
export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}