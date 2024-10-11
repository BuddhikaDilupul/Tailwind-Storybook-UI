import { useNavigate } from 'react-router-dom'
import { LoginForm } from '../../components/forms/login/Login'
import useFetch_POST from '../../services/http/Post'

const Login = () => {
    const { isLoading, error, data, postData } = useFetch_POST()
    const navigate = useNavigate()
    const onSubmit = (values: any) => {
        postData('/auth/v1/login', values)
    }
    if (data) {
        localStorage.setItem('token', data)
        navigate('/')
    }
    return <LoginForm onSubmit={onSubmit} data={data} error={error} isLoading={isLoading} />
}

export default Login
