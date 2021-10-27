interface ErrorPayload {
  message: string;
}

interface ErrorResp {
  errors: ErrorPayload[];
}

interface SuccessResp {
  data: any;
}

// generic error response type 
export function error(errors: string | string[]): ErrorResp {
  if (Array.isArray(errors)){
    return { 
      errors: errors.map(e => ({message: e})) 
    }
  }

  return { 
    errors: [{message: errors}]
  }
}

// generic success response type
export function success(data: any): SuccessResp {
  return { data }
}

