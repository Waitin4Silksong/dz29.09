import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">City Information</Link>
            </li>
            <li>
              <Link to="/famous">Famous Landmark</Link>
            </li>
            <li>
              <Link to="/other">Other Landmarks</Link>
            </li>
            <li>
              <Link to="/photos">City Photos</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CityInfo />} />
          <Route path="/famous" element={<FamousPlaces />} />
          <Route path="/other" element={<OtherPlaces />} />
          <Route path="/photos" element={<CityPhotos />} />
        </Routes>
      </div>
    </Router>
  );
}

function CityInfo() {
  return (
    <div>
      <h1>Ivano-Frankivsk</h1>
      <p>
        Ivano-Frankivsk is a city in western Ukraine, known for its rich
        history, beatiful nature, and architecture.
      </p>
    </div>
  );
}

function FamousPlaces() {
  return (
    <div>
      <h1>Ratusha (City Hall)</h1>
      <p>
        The Ratusha is one of the most iconic landmarks in Ivano-Frankivsk,
        offering a panoramic view of the city from its tower.
      </p>
    </div>
  );
}

function OtherPlaces() {
  return (
    <div>
      <h1>Other Landmarks</h1>
      <ul>
        <li>Shevchenko Park</li>
        <li>Bastion Fortress</li>
      </ul>
    </div>
  );
}

function CityPhotos() {
  return (
    <div>
      <h1>City Photos</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Ivano-FrankivskRatusha.jpg/1920px-Ivano-FrankivskRatusha.jpg" />
      <img src="https://if.informator.ua/wp-content/uploads/2023/04/photo5449599319033363574-1.jpg" />
    </div>
  );
}

export default App;
