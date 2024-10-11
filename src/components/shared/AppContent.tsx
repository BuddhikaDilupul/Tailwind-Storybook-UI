import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home'
import Navbar from './Navbar'

type Props = {}

const AppContent = (props: Props) => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-none h-[6%]">
                <Navbar />
            </div>
            <div className="flex-grow h-[94%] bg-slate-500 px-4 py-2">
                <Routes>
                    <Route path="/home" element={<Home />} />
                </Routes>
            </div>
        </div>
    )
}

export default AppContent
