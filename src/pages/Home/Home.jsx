import Navbar from "../../Components/NavBar/Navbar"
import Banner1 from '../../assets/Imgs/banner1.jpg'
import Banner2 from '../../assets/Imgs/banner2.jpg'
import './Home.css'

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

import { Link } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"

import supabase from "../../data/supabaseClient"
import { useCallback, useState, useEffect } from 'react';

function Home() {
    const [products, setProducts] = useState([]);
    const fetchProducts = useCallback(async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .limit(10);
  
      if (error) console.error(error);
      else setProducts(data);
    }, []);
  
    useEffect(() => {
      fetchProducts();
    }, [fetchProducts]);

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
                            {products
                            .slice(0, 4)
                            .map((product) => (
                                <div className="card" key={product.id}>
                                    <Link to={`/Product/${product.id}`}>
                                        <div className="img">
                                            <img src={product.image_url_front} alt={product.name} />
                                        </div>
                                        <div className="info">
                                            <h1>{product.name}</h1>
                                            <p>${product.price}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="categories">

                    </div>
                    <div className="cabecario">
                        <h1>KIMONOS</h1>
                        <Link to='/Categories/Kimono'>View all products</Link>
                    </div>
                    <div className="products">
                        
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