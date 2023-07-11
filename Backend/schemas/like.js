/**
 * Represents a like.
 * @typedef {Object} Like
 * @property {PostedBy} postedBy - The user who posted the like.
 * @property {string} userId - The ID of the user who posted the like.
 */

/**
 * The Sanity schema for the 'like' document.
 * Represents a like in the system.
 * @type {Object}
 * @property {string} name - The name of the document type.
 * @property {string} title - The title of the document.
 * @property {string} type - The type of the document.
 * @property {Object[]} fields - The fields in the document.
 */
export default {
  name: 'like',
  title: 'Like',
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'userId',
      title: 'UserID',
      type: 'string',
    },
  ],
}
