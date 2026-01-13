/**
 * Extracts the PAYMENT-REQUIRED header value regardless of casing.
 */
export function getPaymentRequiredHeader(
  headers: Record<string, string | string[] | undefined>
): string | undefined {
  for (const key of Object.keys(headers)) {
    if (key.toLowerCase() === 'payment-required') {
      const value = headers[key];
      return Array.isArray(value) ? value[0] : value;
    }
  }
  return undefined;
}
