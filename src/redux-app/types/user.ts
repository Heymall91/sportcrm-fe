export type Gender = "male" | "female";

export interface User {
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    birthday: Date,
    gender: Gender,
    height?: number,
    weight?: number
}

export interface IUserRes{
    data: User,
    message: string;
}