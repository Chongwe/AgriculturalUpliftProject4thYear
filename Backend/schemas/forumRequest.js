// document for the requests made by users to create a forum

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
