import { IUserData } from "../user/types"

export interface IState{
  status: "null" | "pending" | "fulfilled" | "error",
  data: IRoom[] | null,
  error: string | null
}

export interface IRoom {
  _id: string,
  name: string,
  users: IUserData[],
  createdAt: string,
  updatedAt: string,
  __v: number
}