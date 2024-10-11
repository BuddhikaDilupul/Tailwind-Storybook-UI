import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { setAlert } from '../../app/features/AlertSlice';
// import { setGlobalLoading } from '../../app/features/loading/LoadingSlice';
import api from '../Api'

interface ApiResponse {
    data: any
    status: number
}

interface FetchPutHook {
    isLoading: boolean
    error: Error | null
    data: any
    putData: (url: string, requestData: any) => Promise<void>
}

const useFetch_PUT = (): FetchPutHook => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)
    const [data, setData] = useState<any>(null)
    const dispatch = useDispatch()

    const putData = async (url: string, requestData: any): Promise<void> => {
        setIsLoading(true)
        try {
            const response: ApiResponse = await api.put(url, requestData)
            setData(response.data)
            // dispatch(setAlert({ alert: response.status, open: true }));
        } catch (error: any) {
            // dispatch(setAlert({ status: error.response?.status, open: true }));
            setError(error?.response?.data || error)
            console.error(error)
        } finally {
            setIsLoading(false)
            setTimeout(() => {
                // dispatch(setAlert({ status: null, open: false }));
            }, 3000)
            // dispatch(setGlobalLoading({ loading: false }));
        }
    }

    return { isLoading, error, data, putData }
}

export default useFetch_PUT
