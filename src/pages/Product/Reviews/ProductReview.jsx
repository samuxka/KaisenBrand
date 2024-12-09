import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import '../Product.css'

function ProductReview() {
    const [rating, setRating] = useState(0);
    const [isReviewing, setIsReview] = useState(false);
    const [reviewText, setReviewText] = useState('');

    const handleStarClick = (value) => {
        setRating(value);
    };

    const handleSubmitReview = () => {
        if (rating === 0) {
            alert('Por favor, escolha uma avaliação!');
        } else {
            alert(`Avaliação enviada com ${rating} estrelas!`);
            setIsReview(false);
        }
    };

    return (
        <div className="customer-reviews">
            <h3>Costumer Review</h3>
            <p>Please rate this product and help us improve.</p>

            <div className="stars">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={40}
                        color={i < rating ? "gold" : "#ccc"}
                        onClick={() => handleStarClick(i + 1)}
                        cursor="pointer"
                    />
                ))}
            </div>
            <div className="review">
                {!isReviewing ? (
                    <button onClick={() => setIsReview(true)}>Write a review</button>
                ) : (
                    <div>
                        <textarea
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder="Write your review"
                        ></textarea>
                        <button onClick={handleSubmitReview}>Send review</button>
                    </div>
                )}
            </div>
            <div className="share">
                <a href="#">Share this product <Send/></a>
            </div>
        </div>
    );
}

export default ProductReview;
