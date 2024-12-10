import '../Product.css'
import { useRef, useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react'

import supabase from '../../data/supabaseClient';

const ColorSelector = () => {
    const { id: productId } = useParams();
    const [product, setProduct] = useState({});
    const [variations, setVariations] = useState([]);
    const [isColorDropdownOpen, setIsColorDropdownOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');
    const colorDropdownRef = useRef(null);

    const handleColorOptionClick = (event) => {
        const label = event.target.dataset.label;
        if (label) {
            setSelectedColor(label);
            setIsColorDropdownOpen(false);
        }
    };

    return(
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
    )
}

export default ColorSelector