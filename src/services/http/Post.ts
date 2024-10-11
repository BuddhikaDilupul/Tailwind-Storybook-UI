import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { clearAlert, setAlert } from '../../app/features/alert/alert';
// import { clearGlobalLoading, setGlobalLoading } from '../../app/features/loading/LoadingSlice';
import { setLoading } from '../../redux-store/features/global/loading'
import api from '../Api'

interface ApiResponse {
    data: any
    status: number
}

interface FetchPostHook {
    isLoading: boolean
    error: any
    data: any
    postData: (url: string, requestData: any) => Promise<void>
}

const useFetch_POST = (): FetchPostHook => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)
    const [data, setData] = useState<any>(null)
    const dispatch = useDispatch()

    const postData = async (url: string, requestData: any): Promise<void> => {
        dispatch(setLoading(true))
        setIsLoading(true)
        try {
            const response: ApiResponse = await api.post(url, requestData)
            setData(response.data)
        } catch (error: any) {
            setError(error?.response?.data || error)
            console.error(error?.response?.data)
        } finally {
            dispatch(setLoading(false))
            setIsLoading(false)
        }
    }

    return { isLoading, error, data, postData }
}

export default useFetch_POST
