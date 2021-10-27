import jwt from 'jsonwebtoken'

export function signUserData(data: any){
  return jwt.sign(data, process.env.JWT_SECRET, { 
    expiresIn: '14d',
  });
}

