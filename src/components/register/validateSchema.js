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