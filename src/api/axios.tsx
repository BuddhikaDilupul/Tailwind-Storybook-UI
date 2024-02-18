import { Method } from 'axios'
import { useEffect, useState } from 'react'
import axios from './api' // Import your axios instance

const useApiCall = (url: string, method: Method, body: any = {}) => {
    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                let response
                if (method.toLowerCase() === 'post' && body !== null) {
                    response = await axios.post(url, body)
                } else if (method.toLowerCase() === 'put' && body !== null) {
                    response = await axios.post(url, body)
                } else if (method.toLowerCase() === 'delete') {
                    response = await axios.post(url, body)
                } else if (method.toLowerCase() === 'get') {
                    response = await axios.post(url, body)
                }
                setData(response?.data)
            } catch (error) {
                console.log(error)
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [url, method, body])

    return { data, error, isLoading }
}

export default useApiCall
