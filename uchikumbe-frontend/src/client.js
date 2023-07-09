// Import the required packages from the "@sanity" namespace.
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Create a Sanity client instance.
export const client = sanityClient({
  // The project ID for your Sanity backend.
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,

  // The dataset to be used (e.g., "production").
  dataset: "production",

  // The API version to use (e.g., "2023-05-03").
  apiVersion: "2023-05-03",

  // Determine whether to use the Content Delivery Network (CDN) for fetching data.
  useCdn: false,

  // The token for authentication (if required).
  token: process.env.REACT_APP_SANITY_TOKEN,
});

// Create an image URL builder using the Sanity client instance.
const builder = imageUrlBuilder(client);

/**
 * Generate a URL for an image from the Sanity backend.
 *
 * @param {string} source - The source of the image (e.g., Sanity image asset reference).
 * @returns {string} - The URL of the image.
 */
export const urlFor = (source) => builder.image(source);
