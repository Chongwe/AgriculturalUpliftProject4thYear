/**
 * Represents a subforum within a forum.
 * @typedef {Object} Subforum
 * @property {string} title - The title of the subforum.
 * @property {string} description - The description of the subforum.
 * @property {string} userId - The ID of the user who created the subforum.
 * @property {Post[]} post - The array of posts within the subforum.
 * @property {Like[]} like - The array of likes on the subforum.
 * @property {MemberOf[]} members - The array of members in the subforum.
 */

/**
 * The Sanity schema for the 'subforum' document.
 * Represents a subforum within a forum.
 * @type {Object}
 * @property {string} name - The name of the document.
 * @property {string} type - The type of the document (always "document").
 * @property {string} title - The title of the document.
 * @property {Object[]} fields - The fields of the document.
 * @property {Object} fields.title - The field representing the title of the subforum.
 * @property {string} fields.title.name - The name of the field.
 * @property {string} fields.title.type - The type of the field (always "string").
 * @property {string} fields.title.title - The title of the field.
 * @property {Object} fields.description - The field representing the description of the subforum.
 * @property {string} fields.description.name - The name of the field.
 * @property {string} fields.description.type - The type of the field (always "text").
 * @property {string} fields.description.title - The title of the field.
 * @property {Object} fields.userId - The field representing the ID of the user who created the subforum.
 * @property {string} fields.userId.name - The name of the field.
 * @property {string} fields.userId.type - The type of the field (always "string").
 * @property {string} fields.userId.title - The title of the field.
 * @property {Object} fields.post - The field representing the posts within the subforum.
 * @property {string} fields.post.name - The name of the field.
 * @property {string} fields.post.type - The type of the field (always "array").
 * @property {string} fields.post.title - The title of the field.
 * @property {Object[]} fields.post.of - The array of objects allowed in the field.
 * @property {Object} fields.post.of.type - The type of objects allowed in the field (always "post").
 * @property {Object} fields.like - The field representing the likes on the subforum.
 * @property {string} fields.like.name - The name of the field.
 * @property {string} fields.like.type - The type of the field (always "array").
 * @property {string} fields.like.title - The title of the field.
 * @property {Object[]} fields.like.of - The array of objects allowed in the field.
 * @property {Object} fields.like.of.type - The type of objects allowed in the field (always "like").
 * @property {Object} fields.memberOf - The field representing the members in the subforum.
 * @property {string} fields.memberOf.name - The name of the field.
 * @property {string} fields.memberOf.title - The title of the field.
 * @property {string} fields.memberOf.type - The type of the field (always "array").
 * @property {Object[]} fields.memberOf.of - The array of objects allowed in the field.
 * @property {Object} fields.memberOf.of.type - The type of objects allowed in the field (always "memberOf").
 */
export default {
  name: 'subforum',
  type: 'document',
  title: 'Subforum',
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
      name: 'userId',
      type: 'string',
      title: 'UserID',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'post',
      type: 'array',
      title: 'Post',
      of: [{type: 'post'}],
    },
    {
      name: 'like',
      type: 'array',
      title: 'Like',
      of: [{type: 'like'}],
    },
    {
      name: 'memberOf',
      title: 'Members',
      type: 'array',
      of: [{type: 'memberOf'}],
    },
  ],
}
