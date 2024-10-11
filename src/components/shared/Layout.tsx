import AppContent from './AppContent'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <div className="flex flex-row flex-grow">
            <Sidebar />
            <div className="flex-grow">
                <AppContent />
            </div>
        </div>
    )
}

export default Layout
