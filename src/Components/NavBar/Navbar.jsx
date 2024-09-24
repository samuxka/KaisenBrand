import Logo from '../../assets/Imgs/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useEffect } from 'react'

function Navbar() {
    useEffect(() => {
        const header = document.querySelector("header")
        const menu = document.querySelector("#menu-icon")
        const navlist = document.querySelector(".navlist")

        const handleMenuClick = () =>{
            if (header && menu && navlist){
                header.classList.toggle('head')
                menu.classList.toggle('bx-x')
                navlist.classList.toggle('open')
            }
        }

        const handleWindowScroll = () => {
            if (header && menu && navlist){
                header.classList.remove('head')
                menu.classList.remove('bx-x')
                navlist.classList.remove('open')
            }
        }

        menu?.addEventListener('click', handleMenuClick)
        window.addEventListener('scroll', handleWindowScroll)

        return () => {
            menu?.removeEventListener('click', handleMenuClick)
            window.removeEventListener('scroll', handleWindowScroll)
        }
    }, [])
    return(
        <>
            <header className='sidebar'>
                <div className="topo">
                    <div className="logo">
                        <Link to='/'><img src={Logo} />  </Link>
                    </div>
                    <div className="bag">
                        <i className="uil uil-shopping-bag"></i>
                    </div>
                </div>
                <nav>
                    <ul className='navlist'>
                        <li><Link to='/NewArrivals'>NEW ARRIVALS</Link></li>
                        <li><Link to='/Kimonos'>KIMONOS <i className="uil uil-angle-right-b"></i></Link></li>
                        <li><Link to='/NoGi'>NO GI <i className="uil uil-angle-right-b"></i></Link></li>
                        <li><Link to='/Apparel'>APPAREL <i className="uil uil-angle-right-b"></i></Link></li>
                        <li><Link to='/Accessories'>ACCESSORIES <i className="uil uil-angle-right-b"></i></Link></li>
                        <li><Link to='/Collections'>COLLECTIONS <i className="uil uil-angle-right-b"></i></Link></li>
                        <li><Link to='/Login' className='login'>LOGIN</Link></li>
                    </ul>
                </nav>
                <div className="search-container">
                    <input type="text" placeholder="Search..."/>
                    <div className="search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
                            <path fill="none" stroke="#161816" strokeWidth="2" d="M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z M22,22 L16,16"/>
                        </svg>
                    </div>
                </div>
                <div className="bx bx-menu" id="menu-icon"></div>
            </header>
        </>
    )
}

export default Navbar