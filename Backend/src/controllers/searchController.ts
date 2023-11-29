// src/controllers/searchController.ts
import { Request, Response } from 'express';
import { Property } from '../models/PropertyModel';
import { Op } from 'sequelize/types/operators';

/**
 * Searches for properties based on a search term.
 * @param req - Express Request object with search term in the request body
 * @param res - Express Response object
 * @returns void
 */
export async function searchData(req: Request, res: Response): Promise<void> {
  try {
    // Extract search term from the request body
    const searchTerm: string = req.body.searchTerm;

    // Perform a search in the database based on the search term
    const properties = await Property.findAll({
      where: {
        // Search across all attributes for the given term
        [Op.or]: [
          { address: { [Op.like]: `%${searchTerm}%` } },
          { city: { [Op.like]: `%${searchTerm}%` } },
          { zipCode: { [Op.like]: `%${searchTerm}%` } },
          { county: { [Op.like]: `%${searchTerm}%` } },
          { phone: { [Op.like]: `%${searchTerm}%` } },
          { type: { [Op.like]: `%${searchTerm}%` } },
          { capacity: { [Op.like]: `%${searchTerm}%` } as any as string }, // Fix the type error here
        ],
      },
    });

    // Send the search results as a response
    res.status(200).json({ properties });
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
