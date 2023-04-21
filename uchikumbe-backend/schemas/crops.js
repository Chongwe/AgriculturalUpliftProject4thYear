export default {
  name: 'crop',
  title: 'Crop',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'plantingDate',
      title: 'PlantingDate',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD', // set the date format
        timeFormat: 'HH:mm', // set the time format
        timeStep: 15, // set the time step in minutes
        // set the max value to the current date
        max: () => new Date().toISOString().split('T')[0],
      },
    },
    {
      name: 'harvestDate',
      title: 'HarvestDate',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD', // set the date format
        timeFormat: 'HH:mm', // set the time format
        timeStep: 15, // set the time step in minutes
        // set the max value to the current date
        max: () => new Date().toISOString().split('T')[0],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
