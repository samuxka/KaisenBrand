import './Product.css'

import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

import Navbar from '../../Components/NavBar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ProductReview from './Reviews/ProductReview';
import Recomendacoes from './Recommendations/Recomendations';
import supabase from '../../data/supabaseClient';

import { ShoppingCart, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'


const Product = () => {
    const { id: productId } = useParams();
    const [product, setProduct] = useState({});
    const [variations, setVariations] = useState([]);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const [count, setCount] = useState(1);
    const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
    const [isColorDropdownOpen, setIsColorDropdownOpen] = useState(false);
    const sizeDropdownRef = useRef(null);
    const colorDropdownRef = useRef(null);

    const carregarProduto = async () => {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('id', productId);

        if (error) console.error(error);
        else setProduct(data[0]);
    };

    const carregarVariações = async () => {
        const { data, error } = await supabase
            .from('products_variations')
            .select('*')
            .eq('product_id', productId);

        if (error) console.error(error);
        else setVariations(data);
    };

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count >= 1) {
            setCount(count - 1)
        } else {
            alert("A quantidade tem que ser maior que um")
        }
    }

    const handleSizeOptionClick = (event) => {
        const label = event.target.dataset.label;
        if (label) {
            setSelectedSize(label);
            setIsSizeDropdownOpen(false);
        }
    };

    const handleColorOptionClick = (event) => {
        const label = event.target.dataset.label;
        if (label) {
            setSelectedColor(label);
            setIsColorDropdownOpen(false);
        }
    };

    useEffect(() => {
        carregarProduto();
        carregarVariações();

        const handleClickOutside = (event) => {
            if (sizeDropdownRef.current && !sizeDropdownRef.current.contains(event.target)) {
                setIsSizeDropdownOpen(false);
            }
            if (colorDropdownRef.current && !colorDropdownRef.current.contains(event.target)) {
                setIsColorDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [productId]);



    return (
        <>
            <Navbar />
            <section className="products">
                <div className="empty"></div>
                <div className="content">
                    <div className="product__area">
                        <div className="product__area-info">
                            <div className="info__area-head">
                                <h3>
                                    <Link to="/">Home</Link> /
                                    <Link to='/Collections/:collectionId'> {product.collection} </Link> /
                                    <Link to={`/${product.category}`}> {product.category} </Link> /
                                    {product.name}
                                </h3>
                            </div>
                            <div className="info__area-middle">
                                <h1>{product.name}</h1>
                                <p className='price'>$ {product.price}</p>
                                <div className="area__middle-sizeColor">
                                    <div className="select" ref={sizeDropdownRef}>
                                        <div id="size-select">
                                            <label htmlFor="options-view-button">Sizes</label>
                                            <input
                                                type="checkbox"
                                                id='options-view-button'
                                                checked={isSizeDropdownOpen}
                                                onChange={() => setIsSizeDropdownOpen(!isSizeDropdownOpen)}
                                            />
                                            <div id="select-button">
                                                <div id="selected-value">{selectedSize || 'Select size'}</div>
                                                <i data-lucide='chevron-down'><ChevronDown /></i>
                                            </div>
                                        </div>
                                        {isSizeDropdownOpen && (
                                            <ul id="options">
                                                {product.sizes?.map((size, index) => (
                                                    <li key={index} className="option">
                                                        <input
                                                            type="radio"
                                                            name='size'
                                                            value={size}
                                                            data-label={size}
                                                            onClick={handleSizeOptionClick}
                                                        />
                                                        <span className="label">{size}</span>
                                                        <i data-lucide="check"><Check /></i>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className="select" ref={colorDropdownRef}>
                                        <div id="color-select">
                                            <label htmlFor="options-view-button">Colors</label>
                                            <input
                                                type="checkbox"
                                                id='options-view-button'
                                                checked={isColorDropdownOpen}
                                                onChange={() => setIsColorDropdownOpen(!isColorDropdownOpen)}
                                            />
                                            <div id="select-button-color">
                                                <div id="selected-value">{selectedColor || product.color || 'Select Color'}</div>
                                                <i data-lucide='chevron-down'><ChevronDown /></i>
                                            </div>
                                        </div>
                                        {isColorDropdownOpen && (
                                            <ul id="options">
                                                <li className="option">
                                                    <input
                                                        type="radio"
                                                        name='color'
                                                        value={product.color}
                                                        data-label={product.color}
                                                        onClick={handleColorOptionClick}
                                                        defaultChecked={selectedColor === product.color}
                                                    />
                                                    <span className="label">{product.color}</span>
                                                    <i data-lucide="check"><Check /></i>
                                                </li>
                                                {variations.map((variation, index) => (
                                                    <li key={index} className="option">
                                                        <input
                                                            type="radio"
                                                            name='color'
                                                            value={variation.color}
                                                            data-label={variation.color}
                                                            onClick={handleColorOptionClick}
                                                            defaultChecked={selectedColor === variation.color}
                                                        />
                                                        <span className="label">{variation.color}</span>
                                                        <i data-lucide="check"><Check /></i>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                                <div className="buy">
                                    <div className="count">
                                        <div className="count-box">
                                            <button onClick={decrement}><ChevronDown /></button>
                                            <span>{count}</span>
                                            <button onClick={increment}><ChevronUp /></button>
                                        </div>
                                    </div>
                                    <button className='buyNow'>Shop now</button>
                                    <button className='cart'><ShoppingCart /></button>
                                </div>
                                <span className='stock'>There are {product.stock} products left</span>
                                <div className="description">
                                    <h3>Descrição</h3>
                                    <p>{product.description}</p>
                                </div>
                                <ProductReview />
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
                                    slidesPerView={1.4}
                                >
                                    <SwiperSlide>
                                        <div className="image">
                                            <img
                                                src={variations.find((v) => v.color === selectedColor)?.image_url_front || product.image_url_front}
                                                alt={`Frente do produto ${product.name}`}
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img
                                                src={variations.find((v) => v.color === selectedColor)?.image_url_back || product.image_url_back}
                                                alt={`Verso do produto ${product.name}`}
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img
                                                src={variations.find((v) => v.color === selectedColor)?.image_url_front || product.image_url_front}
                                                alt={`Frente do produto ${product.name}`}
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="image">
                                            <img
                                                src={variations.find((v) => v.color === selectedColor)?.image_url_back || product.image_url_back}
                                                alt={`Verso do produto ${product.name}`}
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <Recomendacoes />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Product