import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Post = ({ url, name }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [owner, setOwner] = useState("");

  useEffect(() => {
    setImgUrl(url);
    setOwner(name);
  }, [url, name]);

  return (
    <div className="min-h-screen">
      {/* Header Bar */}
 

      {/* Main Content */}
      <div className="app-container">
        <div className="politician-card">
          <img 
            src={imgUrl} 
            alt="post_image" 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="politician-name">
            <a 
              href={`/ratings/${owner}`}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              {owner}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Post;