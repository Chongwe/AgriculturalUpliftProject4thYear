export default {
  name: 'main_news',
  type: 'document',
  title: 'Main_News',
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
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'General News', value: 'general-news' },
          { title: 'Agribusiness and Markets', value: 'agribusiness-and-markets' },
          { title: 'AgriTechnology', value: 'agritechnology' },
          { title: 'AgriPolicy', value: 'agripolicy' },
        ],
      },
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
      name: 'datetime',
      type: 'datetime',
      title: 'Date and Time',
      validation: (Rule) => Rule.required(),
    },
  ],
};
