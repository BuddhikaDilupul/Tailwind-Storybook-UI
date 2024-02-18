import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import store from './app/store'
import Layout from './components/shared/Layout'
import Login from './pages/login/login.page'
import Dashboard from './views/Dashboard'
import Product from './views/Product'

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Layout />}>
                        <Route path="/home" element={<Dashboard />} />
                        <Route path="/product" element={<Product />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
