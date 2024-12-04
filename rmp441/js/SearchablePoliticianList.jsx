import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';

const SearchablePoliticianList = () => {
  const politicians = [
    {
      name: "Debbie Dingell",
      url: "/uploads/debbie_imgjpg.jpg",
      title: "U.S Representative",
      location: "Michigan, 6th District",
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
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredPoliticians = politicians.filter((politician) =>
    politician.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    politician.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    politician.title.toLowerCase().includes(searchTerm.toLowerCase())

  );

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto p-8">
        <h1 className="map-title text-center mb-12">
          Find politicians near you.
        </h1>
        
        <div className="w-full max-w-2xl mx-auto mb-12">
          <h2 className="map-title text-center mb-12">Search . . .</h2>
          <div className="search-container w-full">
            <input
              type="text"
              placeholder="Search politicians or locations..."
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
                          <div className="text-sm text-gray-500 mt-1">
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
        </div>

        <h2 className="map-title text-center mb-12">or Explore . . .</h2>
        
        <div className="w-full max-w-3xl mx-auto px-8">
          <div className="map-container h-96 rounded-xl overflow-hidden">
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
                  eventHandlers={{
                    mouseover: (e) => e.target.openPopup(),
                    mouseout: (e) => e.target.closePopup(),
                  }}
                >
                  <Popup>
                    <div className="map-marker-content">
                      <img
                        src={politician.url}
                        alt={politician.name}
                        className="w-12 h-12 rounded-full mb-2"
                      />
                      <a href={`/ratings/${politician.name}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                          <div>{politician.name}</div>
                      </a>
                      <div className="text-sm">{politician.title}</div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchablePoliticianList;
