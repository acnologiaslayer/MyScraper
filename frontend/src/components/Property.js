// src/components/Property.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Property = ({ match }) => {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/properties/${match.params.propertyId}`);
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };

    fetchProperty();
  }, [match.params.propertyId]);

  return (
    <div>
      <h2>Property Details</h2>
      {property ? (
        <div>
          <p>ID: {property.id}</p>
          <p>Address: {property.address}</p>
          <p>City: {property.city}</p>
          <p>Zip Code: {property.zipCode}</p>
          <p>County: {property.county}</p>
          <p>Phone: {property.phone}</p>
          <p>Type: {property.type}</p>
          <p>Capacity: {property.capacity}</p>
        </div>
      ) : (
        <p>Loading property details...</p>
      )}
    </div>
  );
};

export default Property;
