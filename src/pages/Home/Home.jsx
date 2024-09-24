import Navbar from "../../Components/NavBar/Navbar"
import Banner1 from '../../assets/Imgs/banner1.jpg'
import Banner2 from '../Product/imgs/banner2.jpg'
import './Home.css'

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

import { Link } from "react-router-dom"
import OniTee from '../Product/imgs/OniTee.jpg'
import Categorie1 from '../Product/imgs/categorie1.jpg'
import Categorie2 from '../Product/imgs/categorie2.jpg'
import Categorie3 from '../Product/imgs/categorie3.jpg'
import Footer from "../../Components/Footer/Footer"

function Home() {
    return(
        <>
            <Navbar/>
            <section className="home">
                <div className="empty"></div>
                <div className="content">
                    <div className="banners">
                        <Swiper
                            pagination={{ clickable: true }}
                            navigation
                            loop={true}
                            grabCursor={true}
                            modules={[Pagination]}
                            slidesPerView={1}
                        >
                            <SwiperSlide>
                                <div className="banner">
                                    <img src={Banner1} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="banner">
                                    <img src={Banner1} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="banner">
                                    <img src={Banner1} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="banner">
                                    <img src={Banner1} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="banner">
                                    <img src={Banner1} alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="cabecario">
                        <h1>NEW ARRIVALS</h1>
                        <Link to='/NewArrivals'>View all products</Link>
                    </div>
                    <div className="products">
                        <div className="products_top">
                            <div className="card">
                                <Link to='/Product'>
                                    <div className="img">
                                        <img src={OniTee} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Oni Tee</h1>
                                        <p>$29.99</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to='/Product'>
                                    <div className="img">
                                        <img src={OniTee} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Oni Tee</h1>
                                        <p>$29.99</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to='/Product'>
                                    <div className="img">
                                        <img src={OniTee} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Oni Tee</h1>
                                        <p>$29.99</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to='/Product'>
                                    <div className="img">
                                        <img src={OniTee} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Oni Tee</h1>
                                        <p>$29.99</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to='/Product'>
                                    <div className="img">
                                        <img src={OniTee} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Oni Tee</h1>
                                        <p>$29.99</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to='/Product'>
                                    <div className="img">
                                        <img src={OniTee} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Oni Tee</h1>
                                        <p>$29.99</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to='/Product'>
                                    <div className="img">
                                        <img src={OniTee} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Oni Tee</h1>
                                        <p>$29.99</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to='/Product'>
                                    <div className="img">
                                        <img src={OniTee} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Oni Tee</h1>
                                        <p>$29.99</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="categories">
                        <div className="collection-item collectio1">
                            <Link className="collection-item__link" title="APPAREL">
                                <div className="collection-item__header">
                                    <h3 className="collection-item__title">
                                        <span>APPAREL</span>
                                    </h3>
                                </div>
                                <div className="collection-item__background">
                                    <figure className="lazy-image">
                                        <img src={Categorie1} className="img" />
                                    </figure>
                                </div>
                            </Link>
                        </div>
                        <div className="categorie-bot">
                            <div className="collection-item collection2">
                                <Link className="collection-item__link" title="APPAREL">
                                    <div className="collection-item__header">
                                        <h3 className="collection-item__title">
                                            <span>MENs KIMONOS</span>
                                        </h3>
                                    </div>
                                    <div className="collection-item__background">
                                        <figure className="lazy-image">
                                            <img src={Categorie2} className="img" />
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                            <div className="collection-item collection3">
                                <Link className="collection-item__link" title="APPAREL">
                                    <div className="collection-item__header">
                                        <h3 className="collection-item__title">
                                            <span>WOMENs KIMONO</span>
                                        </h3>
                                    </div>
                                    <div className="collection-item__background">
                                        <figure className="lazy-image">
                                            <img src={Categorie3} className="img" />
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="cabecario">
                        <h1>MENS KIMONOS</h1>
                        <Link to='/Kimonos'>View all products</Link>
                    </div>
                    <div className="products">
                        <div className="products_top">
                            <div className="card">
                                <Link to='/Product'>
                                    <div className="img">
                                        <img src={OniTee} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Oni Tee</h1>
                                        <p>$29.99</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to='/Product'>
                                    <div className="img">
                                        <img src={OniTee} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Oni Tee</h1>
                                        <p>$29.99</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to='/Product'>
                                    <div className="img">
                                        <img src={OniTee} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Oni Tee</h1>
                                        <p>$29.99</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="card">
                                <Link to='/Product'>
                                    <div className="img">
                                        <img src={OniTee} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>Oni Tee</h1>
                                        <p>$29.99</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="banners-bottom">
                        <div className="banner-item">
                            <div className="banner-item__header">
                                <h3 className="banner-item__title">
                                    <span>NOGI</span>
                                </h3>
                                <Link className="banner-item__link" title="NOGI">SHOP NOW <i className="uil uil-arrow-right"></i></Link>
                            </div>
                            <div className="banner-item__background">
                                <img src={Banner2} className="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/> 
        </>
    )
}

export default Home