export type Gender = "male" | "female";

export interface User {
    id: string,
    auth0Id: string;
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    birthday: Date,
    gender: Gender,
    height?: number,
    weight?: number
}