
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// The parameter of this function is an object with a string called url inside it.
// url is a prop for the Post component.
export default function Post({ url, name }) {
  /* Display image and post owner of a single post */

  const [imgUrl, setImgUrl] = useState("");
  const [owner, setOwner] = useState("");

  useEffect(() => {
    setImgUrl(url);
    setOwner(name);
  }, [url, name]);

  // Render post image and post owner
  return (
    <div className="post">
      <img src={imgUrl} alt="post_image" />
      
      <p>
      <a href={`/post/${owner}`}>{owner}</a>      
      </p>
    </div>
  );
}

Post.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

