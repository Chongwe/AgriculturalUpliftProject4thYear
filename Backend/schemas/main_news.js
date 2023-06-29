export default {
  name: 'main_news',
  type: 'document',
  title: 'Main_news',
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
          title: 'Short Description',
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
          }
        }
  ]
}