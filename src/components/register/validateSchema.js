import * as yup from 'yup'

export const registSchema = yup.object({
    username: yup.string().required("username is requared").min(5,"username must at least 5 char").max(30,"username must max 30"),
    password: yup.string().required("password is requared").min(5,"password must at least 5 char").max(30,"password must max 30"),
    email: yup.string().required("email is requared").email("email must valid")
})

export const LoginSchema = yup.object({
    password: yup.string().required("password is requared").min(5,"password must at least 5 char").max(30,"password must max 30"),
    email: yup.string().required("email is requared").email("email must valid")
})

export const EmailSchema = yup.object({
    email: yup.string().required("email is requared").email("email must valid")
})
export const ForgetSchema = yup.object({
    email: yup.string().required("email is requared").email("email must valid"),
    password: yup.string().required("password is requared").min(5,"password must at least 5 char").max(30,"password must max 30"),
    code: yup.string().required("code is requared")
})
export const CheckoutSchema = yup.object({
    couponName: yup.string().required("coupon name is requared").max(30,"password must max 30").min(5,"password must min 5"),
    address: yup.string().required("address is requared").min(5,"address must at least 5 char").max(30,"address must max 30"),
    phone: yup.number().min(5,"phone must min 5 digit")
})