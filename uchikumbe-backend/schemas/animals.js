export default {
  name: 'animals',
  title: 'Animals',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'species',
      title: 'Species',
      type: 'string',
    },
    {
      name: 'breed',
      title: 'Breed',
      type: 'string',
    },
    {
      name: 'birthDate',
      title: 'BirthDate',
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
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          {title: 'Male', value: 'male'},
          {title: 'Female', value: 'female'},
        ],
      },
    },
  ],
}
