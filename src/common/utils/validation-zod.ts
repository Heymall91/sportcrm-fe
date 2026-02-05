import * as z from 'zod';

const ukrainePhoneRegex = /^\+380 \d{2} \d{3} \d{4}$/;

const emailObject = z.string().email({message: 'validation.registration.email'});
const passwordObject = z.string().min(6, {message: 'validation.registration.password.min'});

export const GeneralValidInfo = z.object({
    firstName: z.string().min(2, {message: 'validation.registration.firstName.min'}).max(50, {message: 'validation.registration.firstName.max'}),
    lasttName: z.string().min(2, {message: 'validation.registration.lastName.min'}).max(50, {message: 'validation.registration.lastName.max'}),
    phone: z.string().regex(ukrainePhoneRegex, {message: 'validation.registration.phone'})
})

export const loginValid = z.object({
    email: emailObject,
    password: passwordObject
})