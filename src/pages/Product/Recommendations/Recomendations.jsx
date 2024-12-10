import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Recomendations = ({ products, currentProduct }) => {
    // console.log('RelatedProducts:', relatedProducts);
    
    // if (!Array.isArray(relatedProducts) || relatedProducts.length === 0) {
    //     return <div>Nenhum produto relacionado encontrado.</div>;
    // }
    
    const filteredProducts = products.filter(
        (product) => product.id !== currentProduct.id
    );

    if (filteredProducts.length === 0) {
        return <div>Nenhum produto relacionado encontrado.</div>;
    }

    return (
        <div>
            <div className="more-content">
                <div className="more-content-head">
                    <h3>You might also like these</h3>
                </div>
                <div className="other-products-cards">
                    <Swiper
                        pagination={{ clickable: true }}
                        navigation
                        loop={true}
                        grabCursor={true}
                        modules={[Pagination]}
                        slidesPerView={4.05}
                        spaceBetween={50}
                    >
                        {filteredProducts
                            .slice(0, 5)
                            .map((product) => (
                                <SwiperSlide key={product.id}>
                                    <Link to={`/Product/${product.id}`}>
                                        <div className='card'>
                                            <div className="img">
                                                <img src={product.image_url_front} alt={product.name} />
                                            </div>
                                            <h2>{product.name}</h2>
                                            <p>$ {product.price}</p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Recomendations;
