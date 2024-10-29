import React, { useState } from 'react';
import { Star } from 'lucide-react';
import '../../styles.css';

const PoliticianReviewSection = ({ name }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmitReview = () => {
    if (review.trim() && rating > 0) {
      const newReview = {
        text: review,
        rating,
        date: new Date().toLocaleDateString()
      };
      setReviews([newReview, ...reviews]);
      setReview('');
      setRating(0);
    }
  };

  return (
    <div className="politician-card">
      <h2 className="politician-name">{name}</h2>
      
      <div className="rating-section">
        <h3 className="section-title">Rate {name}</h3>
        <div className="star-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={24}
              className={`star ${
                star <= (hoveredStar || rating) ? 'star-active' : ''
              }`}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
        
        <div className="review-input-container">
          <textarea
            placeholder={`Write your review of ${name}...`}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="review-textarea"
          />
        </div>
        
        <button 
          onClick={handleSubmitReview}
          disabled={!review.trim() || rating === 0}
          className={`submit-button ${(!review.trim() || rating === 0) ? 'disabled' : ''}`}
        >
          Submit Review
        </button>
      </div>

      <div className="reviews-section">
        <h3 className="section-title">Reviews</h3>
        {reviews.length === 0 ? (
          <p className="no-reviews">No reviews yet. Be the first to review!</p>
        ) : (
          <div className="reviews-container">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="star-container small">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="star star-active" />
                    ))}
                  </div>
                  <span className="review-date">{review.date}</span>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const RateMyPoliticians = () => {
  return (
    <div className="app-container">
      <h1 className="main-title">Rate My Politicians</h1>
      <div className="politicians-grid">
        <PoliticianReviewSection name="Politician 1" />
        <PoliticianReviewSection name="Politician 2" />
      </div>
    </div>
  );
};

export default RateMyPoliticians;