/**
 * Represents a message.
 * @typedef {Object} Message
 * @property {User} sender - The sender of the message.
 * @property {User} receiver - The receiver of the message.
 * @property {string} content - The content of the message.
 */

/**
 * The Sanity schema for the 'message' document.
 * Represents a message in the system.
 * @type {Object}
 * @property {string} name - The name of the document type.
 * @property {string} title - The title of the document.
 * @property {string} type - The type of the document.
 * @property {Object[]} fields - The fields in the document.
 */
export default {
  name: 'message',
  title: 'Message',
  type: 'document',
  fields: [
    {
      name: 'sender',
      title: 'Sender',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      name: 'receiver',
      title: 'Receiver',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },
  ],
}
