import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return(
        <>
            <footer>
                <div className="empty"></div>
                <div className="content">
                    <div className="menu">
                        <div className="menu__header">
                            <h1>MENU</h1>
                        </div>
                        <div className="menu__navlist">
                            <nav>
                                <ul>
                                    <li><Link to='/NewArrivals'>NEW ARRIVALS</Link></li>
                                    <li><Link to='/Kimonos'>KIMONOS</Link></li>
                                    <li><Link to='/NoGi'>NO GI</Link></li>
                                    <li><Link to='/Apparel'>APPAREL</Link></li>
                                    <li><Link to='/Accessories'>ACCESSORIES</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="email-bar">
                            <input type="text" placeholder="Enter your email"/>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="support">
                        <div className="support__header">
                            <h1>SUPPORT</h1>
                        </div>
                        <div className="support__navlist">
                            <nav>
                                <ul>
                                    <li><Link to='/'>About us</Link></li>
                                    <li><Link to='/'>Contact us</Link></li>
                                    <li><Link to='/'>Shipping & Returns</Link></li>
                                    <li><Link to='/'>FAQ</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="copyright">
                            <p>Copyright <i className="uil uil-copyright"></i> 2024 Kaisen Brand. Powered by <a href="https://instagram.com/sso_webflow" target='_blank'>SSO - Webflow</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer