import { Form, Formik } from 'formik'
import { loginValidationSchema } from '../../../validation/login.schema'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'
import { Text } from '../../atoms/text'
import { Box, Stack } from '../../layout'

interface LoginFormProps {
    onSubmit: (values: any) => void
    data: Record<string, string> | null
    error: Error | null
    isLoading: boolean
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, data, error, isLoading }) => {
    const validationSchema = loginValidationSchema
    const handleSubmit = (values: any) => {
        onSubmit(values)
    }
    return (
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <Box className="flex flex-col items-center justify-center h-screen">
                    <Box className="bg-white border border-gray-300 rounded-xl shadow-md px-8 py-12 w-full md:w-1/2 max-w-md">
                        <Stack>
                            <Text as="h2" weight={'bold'} align={'center'} size={'3xl'} className="mb-2">
                                Login
                            </Text>
                            <Text as="span" emphasis={'low'} size={'sm'} align={'center'} className="mb-8">
                                Please enter your credentials to login
                            </Text>
                            <Text as="label" htmlFor="username" size={'sm'} weight={'medium'} className="mb-1.5">
                                Username
                            </Text>
                            <Input name="username" type="text" id="username" placeholder="Username" className="mb-4" />

                            <Text as="label" htmlFor="password" size={'sm'} weight={'medium'} className="mb-1.5">
                                Password
                            </Text>
                            <Input name="password" id="password" type="password" placeholder={'Password'} />

                            <Button type="submit" variant={'outline'} className="mt-10" isLoading={isLoading}>
                                Login
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Form>
        </Formik>
    )
}
