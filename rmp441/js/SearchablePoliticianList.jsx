import React, { useState } from "react";
import Post from "./post";

const SearchablePoliticianList = () => {
  const politicians = [
    {
      name: "Debbie Dingell",
      url: "/uploads/debbie_imgjpg.jpg",
      title: "U.S Representative",
      location: "Michigan"
    },
    {
      name: "Jason Morgan",
      url: "/uploads/jason_morgan.jpg",
      title: "State Representative",
      location: "Ann Arbor"
    },
    {
      name: "Travis Radina",
      url: "/uploads/travis_radina_img.jpg",
      title: "Councilman",
      location: "Ann Arbor"
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredPoliticians = politicians.filter((politician) =>
    politician.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search politicians..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowDropdown(true);
          }}
          onFocus={() => setShowDropdown(true)}
          className="search-bar"
        />
        
        {showDropdown && searchTerm && (
          <div className="search-results">
            {filteredPoliticians.length > 0 ? (
              filteredPoliticians.map((politician) => (
                <div key={politician.name} className="search-result-item">
                  <img
                    src={politician.url}
                    alt={politician.name}
                    className="result-image"
                  />
                  <div className="result-content">
                    <a
                      href={`/ratings/${politician.name}`}
                      className="result-name"
                    >
                      {politician.name}
                      <div style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>
                        {politician.title} • {politician.location}
                      </div>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                No politicians found
              </div>
            )}
          </div>
        )}
      </div>

      {/* Display all posts below */}
      <div className="app-container">
        {politicians.map((politician) => (
          <Post
            key={politician.name}
            url={politician.url}
            name={politician.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchablePoliticianList;