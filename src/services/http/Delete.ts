import { useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../Api';
// import { clearAlert, setAlert } from '../../app/features/alert/alert';

interface ApiResponse {
  data: any;
  status: number;
}

interface FetchDeleteHook {
  isLoading: boolean;
  error: Error | null;
  data: any;
  deleteData: (url: string) => Promise<void>;
}

const useFetch_DELETE = (): FetchDeleteHook => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<any>(null);
  const dispatch = useDispatch();

  const deleteData = async (url: string): Promise<void> => {
    setIsLoading(true);
    try {
      const response: ApiResponse = await api.delete(url);
      setData(response.data);
      // dispatch(
      //   setAlert({
      //     alert: response.data,
      //     variant: "success",
      //     open: true,
      //   })
      // );
    } catch (error: any) {
      setError(error);
      // dispatch(
      //   setAlert({
      //     alert: error.message || "error",
      //     variant: "info",
      //     open: true,
      //   })
      // );
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        // dispatch(setAlert({ status: null, open: false }));
      }, 3000);
    }
  };

  return { isLoading, error, data, deleteData };
};

export default useFetch_DELETE;
