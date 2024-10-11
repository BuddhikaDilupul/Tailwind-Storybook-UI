import * as Yup from 'yup'
import { password, username } from '.'

export const loginValidationSchema = Yup.object({
    username: username,
    password: password
})
