/**
 * Represents a ForumRequest document in the database.
 *
 * @typedef {object} ForumRequest
 * @property {string} name - The name of the forum request schema.
 * @property {string} title - The title of the forum request document.
 * @property {string} type - The type of the forum request document.
 * @property {Field[]} fields - The fields of the forum request document.
 */

/**
 * Represents a field in the ForumRequest document.
 *
 * @typedef {object} Field
 * @property {string} name - The name of the field.
 * @property {string} title - The title of the field.
 * @property {string} type - The type of the field.
 * @property {Validation} validation - The validation rules for the field.
 */

/**
 * Represents the validation rules for a field.
 *
 * @typedef {Function} Validation
 * @param {object} Rule - The validation rule object.
 */

/**
 * The ForumRequest schema.
 */
export default {
  name: 'forumRequest',
  title: 'ForumRequest',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'userId',
      type: 'string',
      title: 'UserID',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isViewed',
      type: 'boolean',
      title: 'IsViewed',
    },
    {
      name: 'isApproved',
      type: 'boolean',
      title: 'IsApproved',
    },
  ],
}
