import * as yup from 'yup'
import YupPassword from 'yup-password'

YupPassword(yup)

export const SignUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Your name must be of at least 3 characters')
    .max(50, 'Your name must be at most 50 characters')
    .required('Please input your name'),
  email: yup
    .string()
    .email('Please provide valid email')
    .required('Please input your email'),
  password: yup
    .string()
    .password()
    .minRepeating(3, 'Repeated characters are not allowed')
    .required('Please input your password'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Please input your password confirmation'),
})

export const StoreSchema = yup.object().shape({
  storeName: yup
    .string()
    .min(3, 'Your store name must be of at least 3 characters')
    .max(50, 'Your store name must be at most 50 characters')
    .required('Please input your store name'),
  storeDescription: yup
    .string()
    .min(10, 'Your store description must be at least 10 characters')
    .max(150, 'Your store description must be at most 150 characters')
    .required('Please input your store description'),
})

export const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please provide valid email')
    .required('Please input your email'),
  password: yup
    .string()
    .password()
    .minRepeating(3, 'Repeated characters are not allowed')
    .required('Please input your password'),
})

export const InventorySchema = yup.object().shape({
  count: yup
    .number()
    .min(1, 'Your inventory count must be at least 1')
    .required('Please input your inventory count'),
  price: yup
    .number()
    .min(1, 'Your inventory product price must be at least 1')
    .required('Please provide this products price'),
  warranty: yup.number(),
})

export const EmployeeSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Your name must be of at least 3 characters')
    .max(50, 'Your name must be at most 50 characters')
    .required('Please input your name'),
  email: yup
    .string()
    .email('Please provide valid email')
    .required('Please input your email'),
  password: yup
    .string()
    .password()
    .minRepeating(3, 'Repeated characters are not allowed')
    .required('Please input your password'),
})

export const EmailSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please provide valid email')
    .required('Please input your email'),
})

export const ResetPasswordSchema = yup.object().shape({
  code: yup
    .string()
    .min(6, 'Your code must be at least 6 characters')
    .max(6, 'Your code must be at most 6 characters'),
  password: yup
    .string()
    .password()
    .minRepeating(3, 'Repeated characters are not allowed')
    .required('Please input your password'),
})
