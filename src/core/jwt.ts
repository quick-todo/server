import jwt from 'jsonwebtoken'

const DAY = 24 * 60 * 60;
const JWT_EXP_TIME = DAY * 14; // 7 days


export function signUserData(data: any){
  return jwt.sign(data, process.env.JWT_SECRET, { 
    expiresIn: new Date().getTime() + JWT_EXP_TIME,
  });
}

