/**
 * Represents a Dislike document in the database.
 *
 * @typedef {object} Dislike
 * @property {string} name - The name of the dislike schema.
 * @property {string} title - The title of the dislike document.
 * @property {string} type - The type of the dislike document.
 * @property {Field[]} fields - The fields of the dislike document.
 */

/**
 * Represents a field in the Dislike document.
 *
 * @typedef {object} Field
 * @property {string} name - The name of the field.
 * @property {string} title - The title of the field.
 * @property {string} type - The type of the field.
 */

/**
 * The Dislike schema.
 */
export default {
  name: 'dislike',
  title: 'Dislike',
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
