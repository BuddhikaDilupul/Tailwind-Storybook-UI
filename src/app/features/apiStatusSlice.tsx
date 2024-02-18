import { createSlice } from '@reduxjs/toolkit'

const apiStatusSclice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: null,
        error: null
    },
    reducers: {
        setState: (state, action) => {
            const { isLoading, data, error } = action.payload

            state.isLoading = isLoading
            state.error = error
        },
        clearSstate: (state, action) => {
            state.isLoading = null
            state.error = null
        }
    }
})

export const { setState, clearSstate } = apiStatusSclice.actions

export default apiStatusSclice.reducer
// export const selectCurrentUser = (state) =>  state.auth.user
// export const selectCurrentToken = (state) =>  ( state.auth.token)
