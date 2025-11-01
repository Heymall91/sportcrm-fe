import * as z from 'zod';

const ukrainePhoneRegex = /^\+380 \d{2} \d{3} \d{4}$/;

const emailObject = z.string().email({message: 'Email should contains "@"-symbol'});
const passwordObject = z.string().min(6, {message: 'Password shoud have at least 6 characters'});

export const GeneralValidInfo = z.object({
    firstName: z.string().min(2, {message: 'Name should contains at least 2 characters'}).max(50, {message: "Name shouldn't be longer than 50 characters"}),
    lasttName: z.string().min(2, {message: 'Last name should contains at least 2 characters'}).max(50, {message: "Last name shouldn't be longer than 50 characters"}),
    phone: z.string().regex(ukrainePhoneRegex, {message: "Phone number should have a ukrainian code"})
})

export const loginValid = z.object({
    email: emailObject,
    password: passwordObject
})