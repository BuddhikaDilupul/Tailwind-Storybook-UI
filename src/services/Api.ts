import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const setAuthorizationHeader = (token: string | null): void => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

const token: string | null = localStorage.getItem('token');

  setAuthorizationHeader(token);


export const updateToken = (newToken: string | null)=>{
  setAuthorizationHeader(newToken);
}

export default api;
