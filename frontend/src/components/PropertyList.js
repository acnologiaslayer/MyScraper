// src/components/PropertyList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = ({ location }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const searchTerm = new URLSearchParams(location.search).get('search');
        if (searchTerm) {
          const response = await axios.get(`http://localhost:3000/search?term=${encodeURIComponent(searchTerm)}`);
          setSearchResults(response.data);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchSearchResults();
  }, [location.search]);

  return (
    <div>
      <h2>Search Results</h2>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((property) => (
            <li key={property.id}>
              <p>{property.address}</p>
              <p>{property.city}</p>
              <p>{property.zipCode}</p>
              {/* Add more property details as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default PropertyList;
