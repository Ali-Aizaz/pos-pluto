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
