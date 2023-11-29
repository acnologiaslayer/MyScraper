// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Property from './components/Property';
import SearchProperty from './components/SearchProperty';
import PropertyList from './components/PropertyList';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/properties/1">View Property 1</Link>
            </li>
            <li>
              <Link to="/properties/2">View Property 2</Link>
            </li>
            <li>
              <Link to="/search">Search Properties</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/properties/:propertyId" element={<Property />} />
          <Route path="/search" element={<SearchProperty />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/" element={<h2>Home</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
