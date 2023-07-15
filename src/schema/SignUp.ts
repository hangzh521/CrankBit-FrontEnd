import * as Yup from 'yup'

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'At least 3 characters')
    .max(50, 'Name field should be less than 50 characters')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'At least 8 characters with 1 letter')
    .max(25, 'Password field should be less than 25 characters')
    .required('Required'),
})

export default SignUpSchema
