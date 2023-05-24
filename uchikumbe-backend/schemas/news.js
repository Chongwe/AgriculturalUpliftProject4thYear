export default {
    name: 'news',
    type: 'document',
    title: 'News',
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
    }
    ],
}