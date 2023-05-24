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
