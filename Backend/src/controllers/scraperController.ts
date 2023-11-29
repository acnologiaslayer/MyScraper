// src/controllers/scraperController.ts
import { Request, Response } from 'express';
import puppeteer from 'puppeteer';
import { Property } from '../models/PropertyModel';

/**
 * Scrapes data from a website and stores it in a MySQL database.
 * @param req - Express Request object
 * @param res - Express Response object
 * @returns void
 */
export async function scrapeAndStore(req: Request, res: Response): Promise<void> {
  try {
    // Launch a headless browser
    const browser = await puppeteer.launch();

    // Create a new page
    const page = await browser.newPage();

    // Define the sites to scrape (add more as needed)
    const sites = [
      {
        url: 'https://site1.com',
        selectors: {
          address: '#address-selector',
          city: '#city-selector',
          zipCode: '#zipCode-selector',
          county: '#county-selector',
          phone: '#phone-selector',
          type: '#type-selector',
          capacity: '#capacity-selector',
        },
      },
    //   {
    //     url: 'https://site2.com',
    //     selectors: {
          // Add selectors for site2 attributes
    //     },
    //   },
      // Add more sites...
    ];

    // Iterate through sites and scrape data
    for (const site of sites) {
      // Navigate to the site
      await page.goto(site.url);

      // Scraping logic...
      const addressElement = await page.$(site.selectors.address);
      const addressValue = addressElement ? await addressElement.evaluate(element => element.textContent?.trim()) : '';
      const address = addressValue ? addressValue.replace(/(\r\n|\n|\r)/gm, '') : '';
    
      const cityElement = await page.$(site.selectors.city);
      const cityValue = cityElement ? await cityElement.evaluate(element => element.textContent?.trim()) : '';
      const city = cityValue ? cityValue.replace(/(\r\n|\n|\r)/gm, '') : '';
    
      const zipCodeElement = await page.$(site.selectors.zipCode);
      const zipCode = zipCodeElement ? await zipCodeElement.evaluate(element => element.textContent?.trim()) : '';
    
      const countyElement = await page.$(site.selectors.county);
      const county = countyElement ? await countyElement.evaluate(element => element.textContent?.trim()) : '';
    
      const phoneElement = await page.$(site.selectors.phone);
      const phone = phoneElement ? await phoneElement.evaluate(element => element.textContent?.trim()) : '';
    
      const typeElement = await page.$(site.selectors.type);
      const propertyType = typeElement ? await typeElement.evaluate(element => element.textContent?.trim()) : '';
    
      const capacityElement = await page.$(site.selectors.capacity);
      const capacityValue = capacityElement ? await capacityElement.evaluate(element => element.textContent?.trim()) : '0';
      const capacity = capacityValue ? capacityValue.replace(/(\r\n|\n|\r)/gm, '') : '0';

      // Store the scraped data in the database
      await Property.create({
        id: 0,
        address: address,
        city: city,
        zipCode: zipCode,
        county: county,
        phone: phone,
        type: propertyType,
        capacity: parseInt(capacity, 10), // Assuming capacity is a number
      });
    }

    // Close the browser
    await browser.close();

    // Send a success response
    res.status(200).json({ message: 'Scraped data and stored successfully' });
  } catch (error) {
    console.error('Error during scraping:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
