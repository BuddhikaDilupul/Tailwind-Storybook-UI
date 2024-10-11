import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AppContent from './components/shared/AppContent'
import Layout from './components/shared/Layout'
import Login from './pages/login/login.page'
import { store } from './redux-store/store'

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Layout />}>
                        <Route path="/*" element={<AppContent />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
