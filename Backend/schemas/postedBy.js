/**
 * Represents a reference to the user who posted a document.
 * @typedef {Object} PostedBy
 * @property {string} _type - The type of the reference (always "postedBy").
 * @property {string} _ref - The ID of the user who posted the document.
 */

/**
 * The Sanity schema for the 'postedBy' reference field.
 * Represents a reference to the user who posted a document.
 * @type {Object}
 * @property {string} name - The name of the field.
 * @property {string} title - The title of the field.
 * @property {string} type - The type of the field (always "reference").
 * @property {Object[]} to - The reference types that are allowed (in this case, only "user").
 */
export default {
  name: 'postedBy',
  title: 'PostedBy',
  type: 'reference',
  to: [{type: 'user'}],
}
