import Navbar from "../../Components/NavBar/Navbar"
import Banner1 from '../../assets/Imgs/banner1.jpg'
import Banner2 from '../Product/imgs/banner2.jpg'
import './Home.css'

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

import { Link } from "react-router-dom"
import produtos from '../../data/produtos'
import Footer from "../../Components/Footer/Footer"
import colecoes from "../../data/colecoes"

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
                            {produtos
                            .slice(0, 4)
                            .map((produto) => (
                                <div className="card" key={produto.id}>
                                    <Link to={`/Product/${produto.id}`}>
                                        <div className="img">
                                            <img src={produto.imagem} alt={produto.nome} />
                                        </div>
                                        <div className="info">
                                            <h1>{produto.nome}</h1>
                                            <p>${produto.preco.toFixed(2)}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="categories">
                        {colecoes
                        .slice(0,3)
                        .map((colecao) => (
                            <div className="collection-item collectio1" key={colecao.id}>
                                <Link className="collection-item__link" to={`/Collections/${colecao.id}`}>
                                    <div className="collection-item__header">
                                        <h3 className="collection-item__title">
                                            <span>{colecao.nome}</span>
                                        </h3>
                                    </div>
                                    <div className="collection-item__background">
                                        <figure className="lazy-image">
                                            <img src={colecao.imagem} className="img" />
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="cabecario">
                        <h1>KIMONOS</h1>
                        <Link to='/Kimonos'>View all products</Link>
                    </div>
                    <div className="products">
                        <div className="products_top">
                            {produtos
                            .filter(produto => produto.categoria === "kimono")
                            .slice(0, 4)
                            .map((produto) => (
                                <div className="card" key={produto.id}>
                                    <Link to={`/Product/${produto.id}`}>
                                        <div className="img">
                                            <img src={produto.imagem} alt={produto.nome} />
                                        </div>
                                        <div className="info">
                                            <h1>{produto.nome}</h1>
                                            <p>${produto.preco.toFixed(2)}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
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