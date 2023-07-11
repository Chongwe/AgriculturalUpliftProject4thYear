/**
 * Represents a forum request.
 * @typedef {Object} ForumRequest
 * @property {string} title - The title of the forum request.
 * @property {string} description - The description of the forum request.
 * @property {PostedBy} postedBy - The user who posted the forum request.
 * @property {string} userId - The ID of the user who posted the forum request.
 * @property {boolean} isViewed - Indicates if the forum request has been viewed.
 * @property {boolean} isApproved - Indicates if the forum request has been approved.
 */

/**
 * The Sanity schema for the 'forumRequest' document.
 * Represents a forum request in the system.
 * @type {Object}
 * @property {string} name - The name of the document type.
 * @property {string} title - The title of the document.
 * @property {string} type - The type of the document.
 * @property {Object[]} fields - The fields in the document.
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
