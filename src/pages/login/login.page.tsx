import { useState } from 'react'
import useApiCall from '../../api/axios'
import { LoginForm } from '../../components/forms/login/Login'

const Login = () => {
    const [values, setValues] = useState(null)
    const { data, error, isLoading } = useApiCall('auth/login', 'post', values)

    const onSubmit = (values: any) => {
        setValues(values)
    }

    return <LoginForm onSubmit={onSubmit} data={data} error={error} isLoading={isLoading} />
}

export default Login
