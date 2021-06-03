import { Request } from "express"
export interface GetUserAuthInfoRequest extends Request {
  user: {
    id: number,
    firstName: string,
    lastName: string,
    patronymic: string,
    email: string,
    password: string,
    role: string,
  }
}