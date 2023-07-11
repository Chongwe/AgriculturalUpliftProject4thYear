/**
 * Represents a post.
 * @typedef {Object} Post
 * @property {string} title - The title of the post.
 * @property {string} content - The content of the post.
 * @property {string} image - The image associated with the post.
 * @property {string} video - The video associated with the post.
 * @property {string} userId - The ID of the user who created the post.
 * @property {PostedBy} postedBy - Information about the user who posted the post.
 * @property {Like[]} like - An array of likes received by the post.
 * @property {Dislike[]} dislike - An array of dislikes received by the post.
 * @property {Comment[]} comments - An array of comments posted on the post.
 * @property {string} forumId - The ID of the forum to which the post belongs.
 */

/**
 * Represents a user who posted a post.
 * @typedef {Object} PostedBy
 * @property {string} _type - The type of the user who posted the post.
 */

/**
 * Represents a like received by a post.
 * @typedef {Object} Like
 */

/**
 * Represents a dislike received by a post.
 * @typedef {Object} Dislike
 */

/**
 * Represents a comment posted on a post.
 * @typedef {Object} Comment
 */

/**
 * The Sanity schema for the 'post' document.
 * Represents a post in the system.
 * @type {Object}
 * @property {string} name - The name of the document type.
 * @property {string} type - The type of the document.
 * @property {string} title - The title of the document.
 * @property {Object[]} fields - The fields in the document.
 */
export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'video',
      type: 'file',
      title: 'Video',
    },
    {
      name: 'userId',
      title: 'UserID',
      type: 'string',
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'like',
      type: 'array',
      title: 'Likes',
      of: [{type: 'like'}],
    },
    {
      name: 'dislike',
      title: 'Dislike',
      type: 'array',
      of: [{type: 'dislike'}],
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{type: 'comment'}],
    },
    {
      name: 'forumId',
      title: 'ForumID',
      type: 'string',
    },
  ],
}
