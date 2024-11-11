import React, { useState, useMemo } from 'react';
import { ThumbsUp, ThumbsDown, Trash2, MapPin, Briefcase, Share2, Flag, Users } from 'lucide-react';
import '../../styles.css';

const PoliticianReviewSection = ({ name, location, title, party = " Democrat" }) => {
  const handleShare = (review) => {
    // Get current URL
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy link:', err);
    });
  };
  
  const handleReport = (review) => {
    alert('Report Submitted');
    console.log('Review reported:', review);
  };

  const getInitialReviews = () => {
    if (name === 'Debbie Dingell') {
      return [{
        text: "Debbie Dingell's approach often feels too moderate and cautious, especially on urgent progressive issues like Medicare for All and environmental reform. While she voices support for healthcare reform, her reluctance to fully back single-payer healthcare falls short of the progressive demand for a comprehensive, universal system that leaves no one behind. Additionally, her environmental policies, while appearing supportive on the surface, lack the boldness needed to combat the climate crisis effectively. Dingell's gradualist stance on transitioning the auto industry toward cleaner energy seems like a half-measure, favoring corporate interests over aggressive action. Her unwillingness to fully embrace a progressive agenda ultimately signals a hesitancy to challenge the status quo, which is disappointing for those seeking substantive change in these critical areas.",
        approval: false,
        date: "10/29/2024",
        isSeeded: true
      }, {
        text: "Debbie Dingell is a dedicated advocate for Michigan's 6th Congressional District and a true voice for Ann Arbor. In Congress, she's championed accessible health care, co-authoring Medicare for All and advancing long-term care reforms. As co-chair of the Great Lakes Task Force, Dingell fights for environmental protection, tackling PFAS contamination and backing wildlife initiatives. From securing federal flood relief to supporting veterans and education she has always been there for us in Ann Arbor. Specficially, she has been there for us college students, by attending our events, listening to our voices, and enacting legislation that aligns with our values. Dingell's commitment to her constituents and collaborative spirit make her a respected leader both locally and nationally. We need to ensure she stays Ann Arbor's voice in Congress.",
        approval: true,
        date: "10/27/2024",
        isSeeded: true
      }];
    }
    else if (name == 'Travis Radina'){
      return [{
        text: "Travis Radina has been an unwavering advocate for Ann Arbor and a champion for students and young professionals in our community. Representing Ward 3 on City Council, he's consistently prioritized affordable housing, proposing policies that expand housing access for residents, including University of Michigan students. Radina is also a staunch supporter of LGBTQ+ rights, working to protect our community from discrimination and spearheading initiatives that foster inclusivity. His environmental leadership is clear in his push for sustainable development and efforts to address climate change locally. Travis Radina's dedication to Ann Arbor's growth and well-being makes him an essential leader, and we need to keep him in office",
        approval: false,
        date: "10/31/2024",
        isSeeded: true
      }];
    }
    else if (name == 'Jason Morgan'){
      return [{
        text: "Jason Morgan has been a proactive force in Michigan's 23rd State House District, championing legislation that addresses critical local issues. He has always been there for us college students at the University of Michigan and has been highly active in his advocacy for us. He introduced bills aimed at expanding affordable housing, including measures to increase tax credits for developers creating low-income housing units. Morgan is also a strong advocate for mental health, authoring legislation that secures additional funding for community mental health services and works to improve accessibility in schools. On environmental issues, he sponsored bills promoting clean energy and reducing PFAS contamination, ensuring cleaner water for all Michiganders. His hands-on approach and commitment to impactful legislation make him a vital representative for Ann Arbor and we need to keep him in office.",
        approval: true,
        date: "10/30/2024",
        isSeeded: true
      }, {
        text: "Jason Morgan's policies often lack the boldness that many progressives expect on key issues like affordable housing and criminal justice reform. His incremental approach to housing policy, while acknowledging the issue, fails to push for the sweeping rent controls and tenant protections needed to genuinely address the housing crisis. On criminal justice, his proposals lean too far toward reform rather than transformative change, avoiding serious calls for reallocating resources from policing to community programs. His moderate stance suggests a reluctance to confront systemic inequalities head-on, leaving those seeking comprehensive change in social justice and economic equality frustrated and disillusioned.",
        approval: false,
        date: "10/26/2024",
        isSeeded: true
      }];
    }
    return [];
  };

  const [approval, setApproval] = useState(null);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState(getInitialReviews);

  const approvalPercentage = useMemo(() => {
    if (reviews.length === 0) return 0;
    const approvalCount = reviews.filter(review => review.approval).length;
    return Math.round((approvalCount / reviews.length) * 100);
  }, [reviews]);

  const handleThumbsUpClick = () => {
    setApproval(approval === true ? null : true);
  };

  const handleThumbsDownClick = () => {
    setApproval(approval === false ? null : false);
  };

  const handleSubmitReview = () => {
    if (review.trim() && approval !== null) {
      const newReview = {
        text: review,
        approval,
        date: new Date().toLocaleDateString(),
        isSeeded: false
      };
      setReviews([newReview, ...reviews]);
      setReview('');
      setApproval(null);
    }
  };

  const handleDeleteReview = (index) => {
    setReviews(prevReviews => prevReviews.filter((_, i) => i !== index));
  };

  return (
    <div className="politician-card">
      <div className="politician-info">
        <div className="politician-header">
          <div className="politician-name-title">
            <h2 className="politician-name">
              <a href={`/ratings/${encodeURIComponent(name)}`} className="politician-name-link">
                {name}
              </a>
            </h2>
            <div className="politician-details">
              <div className="detail-item">
                <Briefcase size={20} className="detail-icon" />
                <span>{title}</span>
              </div>
              <div className="detail-item">
                <MapPin size={20} className="detail-icon" />
                <span>{location}</span>
              </div>
              <div className="detail-item">
                <Users size={20} className="detail-icon" />
                <span>{party}</span>
              </div>
            </div>
          </div>
          <div className="approval-percentage">
            <span className={`percentage ${approvalPercentage >= 50 ? 'positive' : 'negative'}`}>
              {approvalPercentage}% Approval
            </span>
            <span className="review-count">
              ({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})
            </span>
          </div>
        </div>
      </div>
      
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
                  <div className="review-header-left">
                    <div className="thumb-container small">
                      {review.approval ? (
                        <ThumbsUp size={16} className="thumb-icon thumb-active-blue" />
                      ) : (
                        <ThumbsDown size={16} className="thumb-icon thumb-active-red" />
                      )}
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>
                  {!review.isSeeded && (
                    <button 
                      onClick={() => handleDeleteReview(index)}
                      className="delete-button"
                      aria-label="Delete review"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
                <p className="review-text">{review.text}</p>
                <div className="review-actions">
                  <button 
                    className="action-button"
                    onClick={() => handleShare(review)}
                    aria-label="Share review"
                  >
                    <Share2 size={16} />
                  </button>
                  <button 
                    className="action-button"
                    onClick={() => handleReport(review)}
                    aria-label="Report review"
                  >
                    <Flag size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const RateMyPoliticians = ({name, location, title, party}) => {
  return (
    <div className="app-container">
      <h1 className="main-title">Rate Your Politician</h1>
      <div className="politicians-grid">
        <PoliticianReviewSection name={name} location={location} title={title} party={party} />
      </div>
    </div>
  );
};

export default RateMyPoliticians;