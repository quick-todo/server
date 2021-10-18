

/**
 * generic error response type
 *
 * @param {object|Array} message
 * @returns {object}
 */
export function error(...message: any) {
  return {
    errors: [...message]
  }
}

/**
 * generic success response type
 *
 * @param {any} data
 * @returns {object}
 */
export function success(data: any) {
  return {
    data: data
  }
}

