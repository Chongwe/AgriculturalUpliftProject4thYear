// subforum.js

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
      name: 'user_id',
      type: 'string',
      title: 'User ID',
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
