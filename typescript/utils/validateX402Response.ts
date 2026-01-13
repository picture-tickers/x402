export interface X402Response {
  status: number;
  headers?: Record<string, string | string[]>;
}

/**
 * Validates that a response object is compatible with x402 handling.
 */
export function validateX402Response(response: X402Response): boolean {
  if (typeof response.status !== 'number') {
    return false;
  }

  if (response.headers && typeof response.headers !== 'object') {
    return false;
  }

  return true;
}
