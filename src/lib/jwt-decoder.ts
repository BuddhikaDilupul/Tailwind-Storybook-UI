import { jwtDecode } from 'jwt-decode'

export const handleDecode = (token: any) => {
    try {
        const decoded: any = jwtDecode(token)
        if (decoded) {
            return { userId: decoded?.id, name: decoded?.username, role: decoded?.role, email: decoded?.email }
        }

        return null
    } catch (error) {
        console.error('Invalid token', error)
        //   setDecodedToken(null);
    }
}
