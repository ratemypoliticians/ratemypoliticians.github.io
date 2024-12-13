import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const SearchablePoliticianList = () => {
  const [politicians, setPoliticians] = useState([
    {
      name: "Debbie Dingell",
      url: "/uploads/debbie_imgjpg.jpg",
      title: "U.S Representative",
      location: "Michigan",
      district: "6th District",
      coordinates: [42.2735, -83.7442],
    },
    {
      name: "Jason Morgan",
      url: "/uploads/jason_morgan.jpg",
      title: "State Representative",
      location: "Ann Arbor",
      district: "N/A",
      coordinates: [42.2908, -83.739],
    },
    {
      name: "Travis Radina",
      url: "/uploads/travis_radina_img.jpg",
      title: "Councilman",
      location: "Ann Arbor",
      district: "N/A",
      coordinates: [42.2829, -83.7504],
    },
    {
      name: "Victoria Burton-Harris",
      url: "/uploads/victoria_burton_harris_img.jpg",
      title: "Judge",
      location: "Michigan",
      district: "36th District Court",
      coordinates: [42.3500, -83.5364],
  },
  
  {
      name: "Ranjeev Puri",
      url: "/uploads/ranjeev_puri_img.jpg",
      title: "State Representative",
      location: "Michigan",
      district: "24th District",
      coordinates: [42.3058, -83.1693],
  },
  
  {
      name: "Sheldon Neeley",
      url: "/uploads/sheldon_neeley_img.jpg",
      title: "Mayor",
      location: "Michigan",
      district: "City of Flint",
      coordinates: [43.0125, -83.6875],
  },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [newPolitician, setNewPolitician] = useState({
    name: "",
    url: "",
    title: "",
    location: "",
    coordinates: "",
    district: "",
  });

  const filteredPoliticians = politicians.filter(
    (politician) =>
      politician.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      politician.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      politician.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPolitician = (e) => {
    e.preventDefault();

    const [lat, lng] = newPolitician.coordinates.split(",").map(Number);
    if (isNaN(lat) || isNaN(lng)) {
      alert("Invalid coordinates. Please enter valid latitude and longitude.");
      return;
    }

    setPoliticians((prev) => [
      ...prev,
      { ...newPolitician, coordinates: [lat, lng] },
    ]);
    setNewPolitician({
      name: "",
      url: "",
      title: "",
      location: "",
      coordinates: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto p-8">
        <h1 className="map-title text-center mb-12">Find politicians near you.</h1>
        
        {/* Search Section */}
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
                  <div className="no-results">No politicians found</div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Add Politician Form
        <h2 className="map-title text-center mb-12">Add a New Politician</h2>
        <form
          className="w-full max-w-2xl mx-auto mb-12"
          onSubmit={handleAddPolitician}
        >
          <input
            type="text"
            placeholder="Name"
            value={newPolitician.name}
            onChange={(e) =>
              setNewPolitician({ ...newPolitician, name: e.target.value })
            }
            required
            className="input-field"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newPolitician.url}
            onChange={(e) =>
              setNewPolitician({ ...newPolitician, url: e.target.value })
            }
            required
            className="input-field"
          />
          <input
            type="text"
            placeholder="Title"
            value={newPolitician.title}
            onChange={(e) =>
              setNewPolitician({ ...newPolitician, title: e.target.value })
            }
            required
            className="input-field"
          />
          <input
            type="text"
            placeholder="Location"
            value={newPolitician.location}
            onChange={(e) =>
              setNewPolitician({ ...newPolitician, location: e.target.value })
            }
            required
            className="input-field"
          />
          <input
            type="text"
            placeholder="Coordinates (lat,lng)"
            value={newPolitician.coordinates}
            onChange={(e) =>
              setNewPolitician({
                ...newPolitician,
                coordinates: e.target.value,
              })
            }
            required
            className="input-field"
          />
          <button type="submit" className="submit-button">
            Add Politician
          </button>
        </form> */}

        {/* Map Section */}
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
                    click: () => {
                      window.location.href = `/ratings/${politician.name}`;
                    },
                  }}
                >
                  <Popup>
                    <div className="popup-content">
                      <img
                        src={politician.url}
                        alt={politician.name}
                        className="popup-image"
                      />
                      <div className="popup-details">
                        <a
                          href={`/ratings/${politician.name}`}
                          className="popup-name"
                        >
                          {politician.name}
                        </a>
                        <div className="popup-title">{politician.title}</div>
                        <div className="popup-location">
                          {politician.location}
                        </div>
                      </div>
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
