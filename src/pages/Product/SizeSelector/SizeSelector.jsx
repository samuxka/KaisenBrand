import '../Product.css'
import { useRef, useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react'

const SizeSelector = () => {
    const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');
    const sizeDropdownRef = useRef(null);

    const handleSizeOptionClick = (event) => {
        const label = event.target.dataset.label;
        if (label) {
            setSelectedSize(label);
            setIsSizeDropdownOpen(false);
        }
    };

    return(
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
    )
}

export default SizeSelector