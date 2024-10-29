import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import '../../styles.css';

const PoliticianReviewSection = ({ name }) => {
  const [approval, setApproval] = useState(null); // null for no selection, true for approval, false for disapproval
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleThumbsUpClick = () => {
    setApproval(approval === true ? null : true); // Toggle thumbs up
  };

  const handleThumbsDownClick = () => {
    setApproval(approval === false ? null : false); // Toggle thumbs down
  };

  const handleSubmitReview = () => {
    if (review.trim() && approval !== null) {
      const newReview = {
        text: review,
        approval,
        date: new Date().toLocaleDateString()
      };
      setReviews([newReview, ...reviews]);
      setReview('');
      setApproval(null);
    }
  };

  return (
    <div className="politician-card">
      <h2 className="politician-name">{name}</h2>
      
      <div className="rating-section">
        <h3 className="section-title">Do you approve of {name}?</h3>
        <div className="thumbs-container">
          <ThumbsUp
            size={24}
            className={`thumb-icon ${approval === true ? 'thumb-active-blue' : ''}`}
            onClick={handleThumbsUpClick}
          />
          <ThumbsDown
            size={24}
            className={`thumb-icon ${approval === false ? 'thumb-active-red' : ''}`}
            onClick={handleThumbsDownClick}
          />
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
          disabled={!review.trim() || approval === null}
          className={`submit-button ${(!review.trim() || approval === null) ? 'disabled' : ''}`}
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
                  <div className="thumb-container small">
                    {review.approval ? (
                      <ThumbsUp size={16} className="thumb-icon thumb-active-blue" />
                    ) : (
                      <ThumbsDown size={16} className="thumb-icon thumb-active-red" />
                    )}
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

const RateMyPoliticians = ({name}) => {
  return (
    <div className="app-container">
      <h1 className="main-title">Rate My Politicians</h1>
      <div className="politicians-grid">
        <PoliticianReviewSection name={name} />
        {/* <PoliticianReviewSection name="Politician 2" /> */}
      </div>
    </div>
  );
};

export default RateMyPoliticians;
