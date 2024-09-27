import './Collections.css'
import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

import Sakura from './Img/Sakura.jpg'
import Temple from './Img/Temple.jpg'
import Samurai from './Img/Samurai.jpg'
import Countries from './Img/Countries.jpg'
import States from './Img/States.jpg'
import Carpa from './Img/Carpa.jpg'

function Collections() {
    return(
        <>
            <Navbar/>
            <section className='collections'>
                <div className="empty"></div>
                <div className="content">
                    <div className="header">
                        <h3><Link to='/'>Home</Link> / Collections</h3>
                        <h1>Collections</h1>
                    </div>
                    <div className="banner__content">
                        <div className="banner__content-cards">
                            <div className="banner-item">
                                <Link className="banner-item__link" title="APPAREL">
                                    <div className="banner-item__header">
                                        <h3 className="banner-item__title">
                                            <span>SAKURA</span>
                                        </h3>
                                    </div>
                                    <div className="banner-item__background">
                                        <figure className="lazy-image">
                                            <img src={Sakura} className="img" />
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                            <div className="banner-item">
                                <Link className="banner-item__link">
                                    <div className="banner-item__header">
                                        <h3 className="banner-item__title">
                                            <span>TEMPLE</span>
                                        </h3>
                                    </div>
                                    <div className="banner-item__background">
                                        <figure className="lazy-image">
                                            <img src={Temple} className="img" />
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                            <div className="banner-item">
                                <Link className="banner-item__link" title="APPAREL">
                                    <div className="banner-item__header">
                                        <h3 className="banner-item__title">
                                            <span>SAMURAI</span>
                                        </h3>
                                    </div>
                                    <div className="banner-item__background">
                                        <figure className="lazy-image">
                                            <img src={Samurai} className="img" />
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                            <div className="banner-item">
                                <Link className="banner-item__link" title="APPAREL">
                                    <div className="banner-item__header">
                                        <h3 className="banner-item__title">
                                            <span>COUNTRIES</span>
                                        </h3>
                                    </div>
                                    <div className="banner-item__background">
                                        <figure className="lazy-image">
                                            <img src={Countries} className="img" />
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                            <div className="banner-item">
                                <Link className="banner-item__link" title="APPAREL">
                                    <div className="banner-item__header">
                                        <h3 className="banner-item__title">
                                            <span>STATES</span>
                                        </h3>
                                    </div>
                                    <div className="banner-item__background">
                                        <figure className="lazy-image">
                                            <img src={States} className="img" />
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                            <div className="banner-item">
                                <Link className="banner-item__link">
                                    <div className="banner-item__header">
                                        <h3 className="banner-item__title">
                                            <span>CARPA</span>
                                        </h3>
                                    </div>
                                    <div className="banner-item__background">
                                        <figure className="lazy-image">
                                            <img src={Carpa} className="img" />
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

export default Collections