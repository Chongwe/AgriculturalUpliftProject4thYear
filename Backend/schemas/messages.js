export default {
    name: 'message',
    title: 'Message',
    type: 'document',
    fields: [
      {
        name: 'sender',
        title: 'Sender',
        type: 'reference',
        to: [{ type: 'user' }],
      },
      {
        name: 'receiver',
        title: 'Receiver',
        type: 'reference',
        to: [{ type: 'user' }],
      },
      {
        name: 'content',
        title: 'Content',
        type: 'string',
      },
    ],
  }
  