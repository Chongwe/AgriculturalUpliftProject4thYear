export default {
  name: 'farm',
  title: 'Farm',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'animals',
      title: 'Animals',
      type: 'array',
      of: [{type: 'animalchoice'}],
    },
    {
      name: 'crops',
      title: 'Crops',
      type: 'array',
      of: [{type: 'cropChoice'}],
    },
    {
      name: 'equipment',
      title: 'Equipment',
      type: 'array',
      of: [{type: 'equipmentChoice'}],
    },
    {
      name: 'pests',
      title: 'Pests',
      type: 'array',
      of: [{type: 'pestsChoice'}],
    },
    {
      name: 'establishedDate',
      title: 'EstablishedDate',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD', // set the date format
        timeFormat: 'HH:mm', // set the time format
        timeStep: 15, // set the time step in minutes
        // set the max value to the current date
        max: () => new Date().toISOString().split('T')[0],
      },
    },
  ],
}
