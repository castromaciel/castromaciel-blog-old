/**
 * 
 * @param date - type `DATE` or `stirng`
 * @returns string date formatted at Locale en-US 
 * 
 * @example
 * formatDate('24/04/2000')
 */

export const formatDate = (
  date: Date | string
): string => new Date(date).toLocaleDateString('en-US', { timeZone: 'UTC' })