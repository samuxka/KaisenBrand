import './Categories.css'
import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

import Apparel from './Imgs/Apparel.jpg'
import Belts from './Imgs/Belts.jpg'
import Kimonos from './Imgs/Gi.jpg'
import NoGi from './Imgs/NoGi.jpg'

function Categories() {
    return(
        <>
            <Navbar/>
            <section className='collections'>
                <div className="empty"></div>
                <div className="content">
                    <div className="header">
                        <h3><Link to='/'>Home</Link> / Categories</h3>
                        <h1>Categories</h1>
                    </div>
                    <div className="banner__content">
                        <div className="banner__content-cards">
                            <div className="banner-item">
                                <Link to='/Sakura' className="banner-item__link" title="APPAREL">
                                    <div className="banner-item__header">
                                        <h3 className="banner-item__title">
                                            <span>APPAREL</span>
                                        </h3>
                                    </div>
                                    <div className="banner-item__background">
                                        <figure className="lazy-image">
                                            <img src={Apparel} className="img" />
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                            <div className="banner-item">
                                <Link className="banner-item__link">
                                    <div className="banner-item__header">
                                        <h3 className="banner-item__title">
                                            <span>BELTS</span>
                                        </h3>
                                    </div>
                                    <div className="banner-item__background">
                                        <figure className="lazy-image">
                                            <img src={Belts} className="img" />
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                            <div className="banner-item">
                                <Link className="banner-item__link" title="APPAREL">
                                    <div className="banner-item__header">
                                        <h3 className="banner-item__title">
                                            <span>KIMONOS</span>
                                        </h3>
                                    </div>
                                    <div className="banner-item__background">
                                        <figure className="lazy-image">
                                            <img src={Kimonos} className="img" />
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                            <div className="banner-item">
                                <Link className="banner-item__link" title="APPAREL">
                                    <div className="banner-item__header">
                                        <h3 className="banner-item__title">
                                            <span>NO GI</span>
                                        </h3>
                                    </div>
                                    <div className="banner-item__background">
                                        <figure className="lazy-image">
                                            <img src={NoGi} className="img" />
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Categories