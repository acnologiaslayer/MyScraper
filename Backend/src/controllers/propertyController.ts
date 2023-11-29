// controllers/propertyController.ts

import { Request, Response } from 'express';
import { Property } from '../models/PropertyModel';

// Get a single property by ID
export const getPropertyById = async (req: Request, res: Response) => {
  const propertyId = req.params.propertyId;

  try {
    const property = await Property.findByPk(propertyId);

    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    return res.status(200).json(property);
  } catch (error) {
    console.error('Error retrieving property:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
