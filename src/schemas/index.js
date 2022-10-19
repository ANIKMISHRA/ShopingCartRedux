import * as Yup from  "yup";

export const signUpSchema = Yup.object({
    first_name: Yup.string().min(2).max(10).required("please enter your first name"),
    last_name: Yup.string().min(2).max(10).required("please enter your last name"),
    email: Yup.string().email().required("please enter your email"),
    password: Yup.string().min(6).required("please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null], "password must match"),

})

export const updateSchema = Yup.object({
    first_name: Yup.string().min(2).max(10).required("please enter your first name"),
    last_name: Yup.string().min(2).max(10).required("please enter your last name"),
    email: Yup.string().email().required("please enter your email"),
    password: Yup.string().min(6).required("please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null], "password must match"),

})


export const loginSchema = Yup.object({

    email: Yup.string().email().required("please enter your email"),
    password: Yup.string().min(6).required("please enter your password"),
   
})