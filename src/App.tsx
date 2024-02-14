import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { LoginForm } from './components/forms/login/Login'
import Layout from './components/shared/Layout'
import Dashboard from './views/Dashboard'
import Product from './views/Product'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/home" element={<Dashboard />} />
                    <Route path="/product" element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
