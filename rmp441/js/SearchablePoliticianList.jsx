import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Post from "./post";

const SearchablePoliticianList = () => {
  const politicians = [
    {
      name: "Debbie Dingell",
      url: "/uploads/debbie_imgjpg.jpg",
      title: "U.S Representative",
      location: "Michigan",
      coordinates: [42.2735, -83.7442],
    },
    {
      name: "Jason Morgan",
      url: "/uploads/jason_morgan.jpg",
      title: "State Representative",
      location: "Ann Arbor",
      coordinates: [42.2908, -83.7390],
    },
    {
      name: "Travis Radina",
      url: "/uploads/travis_radina_img.jpg",
      title: "Councilman",
      location: "Ann Arbor",
      coordinates: [42.2829, -83.7504],
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredPoliticians = politicians.filter((politician) =>
    politician.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-layout">
      <div className="left-content">
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

        <div className="posts-container">
          {politicians.map((politician) => (
            <Post
              key={politician.name}
              url={politician.url}
              name={politician.name}
            />
          ))}
        </div>
      </div>

      <div className="map-section">
        <h2 className="map-title">Find politicians near you...</h2>
        <div className="map-container">
          <MapContainer 
            center={[42.2808, -83.7430]}
            zoom={12}
            className="map"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {politicians.map((politician) => (
              <Marker 
                key={politician.name}
                position={politician.coordinates}
              >
                <Popup>
                  <div className="map-marker-content">
                    <img
                      src={politician.url}
                      alt={politician.name}
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '25px',
                        marginBottom: '8px'
                      }}
                    />
                    <div>{politician.name}</div>
                    <div style={{ fontSize: '12px' }}>{politician.title}</div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default SearchablePoliticianList;