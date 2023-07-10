/**
 * Represents a User document in the database.
 *
 * @typedef {object} User
 * @property {string} name - The name of the user schema.
 * @property {string} title - The title of the user document.
 * @property {string} type - The type of the user document.
 * @property {Field[]} fields - The fields of the user document.
 */

/**
 * Represents a field in the User document.
 *
 * @typedef {object} Field
 * @property {string} name - The name of the field.
 * @property {string} title - The title of the field.
 * @property {string} type - The type of the field.
 * @property {Validation} [validation] - The validation rules for the field.
 */

/**
 * Represents a validation rule for a field.
 *
 * @typedef {function} Validation
 * @param {object} Rule - The validation rule object.
 * @returns {object} - The modified validation rule object.
 */

/**
 * The User schema.
 */
export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'userName',
      title: 'UserName',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
    {
      name: 'firstName',
      title: 'FirstName',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'LastName',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'isAdmin',
      title: 'IsAdmin',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
  ],
}
