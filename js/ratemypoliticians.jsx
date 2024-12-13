import React, { useState, useMemo } from 'react';
import { ThumbsUp, ThumbsDown, Trash2, MapPin, Briefcase, Share2, Flag, Users, ArrowUp } from 'lucide-react';
import '../../styles.css';

const PoliticianReviewSection = ({ name, location, title, party = "Democrat", district }) => {
  const bannedWords = ['shit', 'fuck', 'slur', 'bad_word']; // Replace with actual banned words.
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
        isSeeded: true,
        upvotes: 0
      }, {
        text: "Debbie Dingell is a dedicated advocate for Michigan's 6th Congressional District and a true voice for Ann Arbor. In Congress, she's championed accessible health care, co-authoring Medicare for All and advancing long-term care reforms. As co-chair of the Great Lakes Task Force, Dingell fights for environmental protection, tackling PFAS contamination and backing wildlife initiatives. From securing federal flood relief to supporting veterans and education she has always been there for us in Ann Arbor. Specficially, she has been there for us college students, by attending our events, listening to our voices, and enacting legislation that aligns with our values. Dingell's commitment to her constituents and collaborative spirit make her a respected leader both locally and nationally. We need to ensure she stays Ann Arbor's voice in Congress.",
        approval: true,
        date: "10/27/2024",
        isSeeded: true,
        upvotes: 1
      }];
    }
    else if (name == 'Travis Radina'){
      return [{
        text: "Travis Radina has been an unwavering advocate for Ann Arbor and a champion for students and young professionals in our community. Representing Ward 3 on City Council, he's consistently prioritized affordable housing, proposing policies that expand housing access for residents, including University of Michigan students. Radina is also a staunch supporter of LGBTQ+ rights, working to protect our community from discrimination and spearheading initiatives that foster inclusivity. His environmental leadership is clear in his push for sustainable development and efforts to address climate change locally. Travis Radina's dedication to Ann Arbor's growth and well-being makes him an essential leader, and we need to keep him in office",
        approval: false,
        date: "10/31/2024",
        isSeeded: true,
        upvotes: 2
      }];
    }
    else if (name == 'Jason Morgan'){
      return [{
        text: "Jason Morgan has been a proactive force in Michigan's 23rd State House District, championing legislation that addresses critical local issues. He has always been there for us college students at the University of Michigan and has been highly active in his advocacy for us. He introduced bills aimed at expanding affordable housing, including measures to increase tax credits for developers creating low-income housing units. Morgan is also a strong advocate for mental health, authoring legislation that secures additional funding for community mental health services and works to improve accessibility in schools. On environmental issues, he sponsored bills promoting clean energy and reducing PFAS contamination, ensuring cleaner water for all Michiganders. His hands-on approach and commitment to impactful legislation make him a vital representative for Ann Arbor and we need to keep him in office.",
        approval: true,
        date: "10/30/2024",
        isSeeded: true,
        upvotes: 3
      }, {
        text: "Jason Morgan's policies often lack the boldness that many progressives expect on key issues like affordable housing and criminal justice reform. His incremental approach to housing policy, while acknowledging the issue, fails to push for the sweeping rent controls and tenant protections needed to genuinely address the housing crisis. On criminal justice, his proposals lean too far toward reform rather than transformative change, avoiding serious calls for reallocating resources from policing to community programs. His moderate stance suggests a reluctance to confront systemic inequalities head-on, leaving those seeking comprehensive change in social justice and economic equality frustrated and disillusioned.",
        approval: false,
        date: "10/26/2024",
        isSeeded: true,
        upvotes: 4
      }];
    } else if (name === 'Victoria Burton-Harris') {
      return [{
          text: "Victoria Burton-Harris's work as a judge is admirable in its dedication to restorative justice and fairness, but some critics argue that her rulings occasionally lean too lenient, especially in cases involving repeat offenders. While her focus on rehabilitation over punishment is commendable, there are concerns about whether this approach always aligns with community safety. Nevertheless, her passion for reforming the justice system and addressing systemic inequities makes her a transformative figure in Michigan's legal landscape.",
          approval: false,
          date: "11/30/2024",
          isSeeded: true,
          upvotes: 0
      }, {
          text: "Judge Victoria Burton-Harris exemplifies fairness and compassion in the courtroom. Her commitment to addressing systemic inequities and her emphasis on restorative justice demonstrate her deep understanding of the community's needs. Burton-Harris consistently ensures that justice is served with a focus on rehabilitation and community support, making her an invaluable asset to Michigan's judiciary. Her dedication to reform and equal access to justice sets her apart as a leader in the legal system.",
          approval: true,
          date: "11/28/2024",
          isSeeded: true,
          upvotes: 1
      }];
    }
  
    else if (name === 'Ranjeev Puri') {
        return [{
            text: "Ranjeev Puri has shown strong advocacy for his district, but his approach to economic issues sometimes feels out of touch with the working-class challenges in Michigan. While he supports small businesses and promotes job growth, critics argue that his policies favor corporate incentives over direct support for low-income families. Additionally, his environmental stance, while progressive, lacks the ambitious timelines needed to combat the climate crisis effectively.",
            approval: false,
            date: "12/01/2024",
            isSeeded: true,
            upvotes: 0
        }, {
            text: "Representative Ranjeev Puri is a dynamic and forward-thinking leader who genuinely cares about his constituents. From advocating for public education to championing renewable energy initiatives, he has worked tirelessly to build a brighter future for Michigan. His ability to engage with diverse communities and promote inclusivity sets him apart as a legislator. Puri's commitment to transparency and accountability ensures that his district's voice is heard at the state level.",
            approval: true,
            date: "11/29/2024",
            isSeeded: true,
            upvotes: 2
        }];
    }
    else if (name === 'Sheldon Neeley') {
        return [{
            text: "Sheldon Neeley has made strides in addressing Flint's water crisis, but critics argue that his leadership lacks the urgency and boldness needed to fully rebuild trust with the community. While his focus on economic development is important, some residents feel that his administration hasn't done enough to address systemic issues like housing and public health. His cautious approach sometimes falls short of the transformative action Flint desperately needs.",
            approval: false,
            date: "12/02/2024",
            isSeeded: true,
            upvotes: 1
        }, {
            text: "Mayor Sheldon Neeley has shown unwavering dedication to Flint, working tirelessly to bring the city back from one of its darkest chapters. His leadership in addressing the water crisis and prioritizing economic development has been a beacon of hope for many. Neeley's efforts to improve public safety, expand job opportunities, and restore trust in local government demonstrate his commitment to Flint's residents. He remains a steady and reliable leader in challenging times.",
            approval: true,
            date: "11/30/2024",
            isSeeded: true,
            upvotes: 3
        }];
    }
    return [];
  };

  const [approval, setApproval] = useState(null);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState(getInitialReviews);
  const [sortOption, setSortOption] = useState('date'); // State for sorting reviews

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

    const containsBannedWord = bannedWords.some(word =>
      review.toLowerCase().includes(word)
    );

    if (containsBannedWord) {
      alert('Your review contains inappropriate language. Please revise your text.');
      return;
    }

    if (review.trim() && approval !== null) {
      const newReview = {
        text: review,
        approval,
        date: new Date().toLocaleDateString(),
        isSeeded: false,
        upvotes: 0
      };
      setReviews([newReview, ...reviews]);
      setReview('');
      setApproval(null);
    }
  };

  const handleDeleteReview = (index) => {
    setReviews(prevReviews => prevReviews.filter((_, i) => i !== index));
  };

  const handleUpvote = (index) => {
    setReviews((prevReviews) =>
      prevReviews.map((review, i) =>
        i === index ? { ...review, upvotes: review.upvotes + 1 } : review
      )
    );
  };


  const sortedReviews = useMemo(() => {
    return [...reviews].sort((a, b) => {
      if (sortOption === 'date') {
        return new Date(b.date) - new Date(a.date); // Sort by date (newest first)
      } else if (sortOption === 'upvotes') {
        return b.upvotes - a.upvotes; // Sort by upvotes (highest first)
      } else if (sortOption === 'approval') {
        return (b.approval === a.approval ? 0 : b.approval ? -1 : 1); // Sort by approval (true first)
      } else if (sortOption === 'disapproval') {
        return (b.approval === a.approval ? 0 : b.approval ? 1 : -1); // Sort by disapproval (false first)
      }
      return 0;
    });
  }, [reviews, sortOption]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
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
              {district && district !== "N/A" && (
                  <div className="detail-item">
                    <MapPin size={20} className="detail-icon" />
                    <span>{district}</span>
                  </div>
                )}
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
        <div className="sort-options">
          <label htmlFor="sort">Sort by: </label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="date">Date</option>
            <option value="upvotes">Upvotes</option>
            <option value="approval">Disapproval</option>
            <option value="disapproval">Approval</option> 
          </select>
        </div>
        {sortedReviews.length === 0 ? (
          <p className="no-reviews">No reviews yet. Be the first to review!</p>
        ) : (
          <div className="reviews-container">
            {sortedReviews.map((review, index) => (
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
                  <button className="action-button" onClick={() => handleUpvote(index)}>
                    <ArrowUp size={16} /> {review.upvotes}
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

const RateMyPoliticians = ({name, location, title, party, district}) => {
  return (
    <div className="app-container">
      <h1 className="main-title">Rate Your Politician</h1>
      <div className="politicians-grid">
        <PoliticianReviewSection name={name} location={location} title={title} party={party} district={district}/>
      </div>
    </div>
  );
};

export default RateMyPoliticians;