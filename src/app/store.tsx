import { combineReducers, configureStore } from '@reduxjs/toolkit'
import apiStatusSclice from './features/apiStatusSlice'
const reducer = combineReducers({
    apiStatusSclice
})

const store = configureStore({
    reducer: reducer
})

export default store
