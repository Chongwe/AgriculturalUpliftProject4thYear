/**
 * Represents a membership of a user in a forum.
 * @typedef {Object} MemberOf
 * @property {PostedBy} postedBy - The reference to the user who is a member.
 * @property {string} userId - The ID of the user who is a member.
 */

/**
 * The Sanity schema for the 'memberOf' document.
 * Represents a membership of a user in a forum.
 * @type {Object}
 * @property {string} name - The name of the document.
 * @property {string} title - The title of the document.
 * @property {string} type - The type of the document (always "document").
 * @property {Object[]} fields - The fields of the document.
 * @property {Object} fields.postedBy - The field representing the user who is a member.
 * @property {string} fields.postedBy.name - The name of the field.
 * @property {string} fields.postedBy.title - The title of the field.
 * @property {string} fields.postedBy.type - The type of the field (always "postedBy").
 * @property {Object} fields.userId - The field representing the ID of the user who is a member.
 * @property {string} fields.userId.name - The name of the field.
 * @property {string} fields.userId.title - The title of the field.
 * @property {string} fields.userId.type - The type of the field (always "string").
 */
export default {
  name: 'memberOf',
  title: 'MemberOf',
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
