export default {
  name: 'equipment',
  title: 'Equipment',
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
      name: 'manufacturer',
      title: 'Manufacturer',
      type: 'string',
    },
    {
      name: 'model',
      title: 'Model',
      type: 'string',
    },
    {
      name: 'purchaseDate',
      title: 'PurchaseDate',
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
