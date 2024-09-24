import { Link } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/NavBar/Navbar"
import { UilStar } from '@iconscout/react-unicons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image1 from './imgs/OniTee.jpg'

import './Product.css'
import { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

function Product() {
    const [count, setCount] = useState(1);
    const [rating, setRating] = useState(0);
    const [isReviewing, setIsReview] = useState(false)

    const handleStarClick = (starValue) => {
        setRating(starValue);
    }

    const handleWriteReview = () => {
        setIsReview(true)
    }

    const handleSubmitReview = () => {
        if (rating === 0){
            alert('Por favor, escolha uma avaliação!')
        }else {
            alert(`Avaliação enviada com ${rating} estrelas!`)
            setIsReview(false)
        }
    }

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }

    const [size, setSize] = useState("XL");

    const updateSize = (event) => {
        setSize(event.target.value);
    }; 
    
    const [color, setColor] = useState("BLACK");

    const updateColor = (event) => {
        setColor(event.target.value);
    };

    return(
        <>
            <Navbar />
            <section className="product">
                <div className="empty"></div>
                <div className="content">
                    <div className="product-area">
                        <div className="product-area__info">
                            <div className="product-area__info_url">
                                <h3><Link to='/'>Home</Link> / <Link to='/Collections'>Collections</Link> / <Link to='/Apparel'>Apparel</Link> / Oni Tee</h3>
                            </div>
                            <div className="product-area__info_head">
                                <div className="product-area__info_head-header">
                                    <h1>Oni Tee</h1>
                                    <p>$ 29.99</p>
                                </div>
                                <div className="size-selector">
                                    <label htmlFor="size">SIZE</label>
                                    <div className="dropdown">
                                        <span id="selected-size">{size}</span>
                                        <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                                        <select id="size" value={size} onChange={updateSize}>
                                            <option value="XS">XS</option>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                            <option value="XXL">XXL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="color-selector">
                                    <label htmlFor="color">COLOR</label>
                                    <div className="dropdown">
                                        <span id="selected-color">{color}</span>
                                        <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                                        <select id="color" value={color} onChange={updateColor}>
                                            <option value="BLACK">BLACK</option>
                                            <option value="WHITE">WHITE</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cart">
                                    <div className="count-cart">
                                        <div className="counter-box">
                                            <button onClick={decrement}>-</button>
                                            <span className="count">{count}</span>
                                            <button onClick={increment}>+</button>
                                        </div>
                                        <div className="addtocart">
                                            <a href="#">Add to cart</a>
                                        </div>
                                    </div>
                                    <p className="products-left">There are 2 products left</p>
                                </div>
                                <div className="features">
                                    <h1>FEATURES</h1>
                                    <nav>
                                        <ul>
                                            <li>Relaxed fit</li>
                                            <li>Super soft ring spun cotton</li>
                                            <li>Screen printed design</li>
                                            <li>Kaisen Brand original design</li>
                                        </ul>
                                    </nav>
                                    <p><span>Material:</span> 100% combed ring-spun cotton</p>
                                </div>
                                <div className="costumer-reviews">
                                    <div>
                                        <h3>Costumer Reviews</h3>
                                        {!isReviewing ? (
                                            <>
                                                <div>
                                                    {[...Array(5)].map((_, i) => (
                                                        <UilStar
                                                            key={i}
                                                            size="40"
                                                            color={i < rating ? "gold" : "gray"}
                                                            onClick={() => handleStarClick(i + 1)}
                                                            />
                                                        ))}
                                                </div>
                                                    <button
                                                        onClick={handleWriteReview}>
                                                        Write a review
                                                    </button>
                                            </>
                                        ) : (
                                            <>
                                                <div>
                                                    {[...Array(5)].map((_, i) => (
                                                        <UilStar 
                                                            key={i}
                                                            size="40"
                                                            color={i < rating ? "gold" : "gray"}
                                                            onClick={() => handleStarClick(i + 1)}
                                                        />
                                                    ))}
                                                </div>
                                                <textarea
                                                    placeholder="Write a review"
                                                ></textarea>
                                                <button
                                                    onClick={handleSubmitReview}
                                                >Submit review</button>
                                            </>
                                        )}
                                    </div>
                                    <a href="#"><i className="uil uil-share-alt"></i> Share this product</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-area__images">
                            <div className="images">
                                <Swiper
                                    pagination={{ clickable: true }}
                                    navigation
                                    loop={true}
                                    grabCursor={true}
                                    modules={[Pagination]}
                                    slidesPerView={1.1}
                                >
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src={Image1} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src={Image1} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src={Image1} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src={Image1} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img src={Image1} />
                                        </div>
                                    </SwiperSlide>    
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Product