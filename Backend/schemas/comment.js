/**
 * Represents a comment on a post or subforum.
 * @typedef {Object} Comment
 * @property {PostedBy} postedBy - The user who posted the comment.
 * @property {string} content - The content of the comment.
 * @property {Like[]} like - The array of likes on the comment.
 */

/**
 * The Sanity schema for the 'comment' document.
 * Represents a comment on a post or subforum.
 * @type {Object}
 * @property {string} name - The name of the document.
 * @property {string} title - The title of the document.
 * @property {string} type - The type of the document (always "document").
 * @property {Object[]} fields - The fields of the document.
 * @property {Object} fields.postedBy - The field representing the user who posted the comment.
 * @property {string} fields.postedBy.name - The name of the field.
 * @property {string} fields.postedBy.title - The title of the field.
 * @property {string} fields.postedBy.type - The type of the field (always "postedBy").
 * @property {Object} fields.content - The field representing the content of the comment.
 * @property {string} fields.content.name - The name of the field.
 * @property {string} fields.content.title - The title of the field.
 * @property {string} fields.content.type - The type of the field (always "string").
 * @property {Object} fields.like - The field representing the likes on the comment.
 * @property {string} fields.like.name - The name of the field.
 * @property {string} fields.like.title - The title of the field.
 * @property {string} fields.like.type - The type of the field (always "array").
 * @property {Object[]} fields.like.of - The array of objects allowed in the field.
 * @property {Object} fields.like.of.type - The type of objects allowed in the field (always "like").
 */
export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'postedBy',
      type: 'postedBy',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },
    {
      name: 'like',
      title: 'Like',
      type: 'array',
      of: [{type: 'like'}],
    },
  ],
}
