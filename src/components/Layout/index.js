
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './index.scss'


const Layout = () => {
    return (
    <>
    <Header/>
    <div style={{flex:1}}>

    <Outlet/>
    </div>
    <Footer/>
    </>
        ) 
}

export default Layout