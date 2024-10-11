import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../redux-store/features/global/loading'
import api from '../Api'

interface ApiResponse {
    data: any
    status: number
}

interface FetchGetHook {
    isLoading: boolean
    error: Error | null
    data: any
    getData: (url: string) => Promise<void>
}

const useFetch_GET = (): FetchGetHook => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)
    const [data, setData] = useState<any>(null)
    const dispatch = useDispatch()

    const getData = async (url: string): Promise<void> => {
        setIsLoading(true)
        try {
            const response: ApiResponse = await api.get(url)
            setData(response.data)
        } catch (error: any) {
            console.log(error)
            if (error.response && error.response.status === 404) {
            } else {
                console.error('An error occurred:', error.message)
            }
            setError(error)
        } finally {
            dispatch(setLoading(false))
            setIsLoading(false)
        }
    }

    return { isLoading, error, data, getData }
}

export default useFetch_GET
