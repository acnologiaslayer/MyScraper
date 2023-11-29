// src/components/SearchProperty.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchProperty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      // Redirect to the property list page with the search term as a query parameter
      navigate(`/properties?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div>
      <h2>Search Properties</h2>
      <input
        type="text"
        placeholder="Enter property name/city/state"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchProperty;
