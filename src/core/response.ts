interface ErrorPayload {
  message: string;
}

interface ErrorResp {
  data: null;
  errors: string | string[];
}

interface SuccessResp {
  data: any;
  errors: null;
}

// generic error response type 
export function error(errors: string | string[]): ErrorResp {
  if (Array.isArray(errors)){
    return { errors, data: null }
  }
  return { errors: [errors], data: null }
}

// generic success response type
export function success(data: any): SuccessResp {
  return {
    data,
    errors: null
  };
}

