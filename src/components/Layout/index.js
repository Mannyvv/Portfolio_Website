
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import './index.scss'


const Layout = () => {
    return (
    <>
    <Header/>
    <Outlet/>
    
    </>
        )
}

export default Layout