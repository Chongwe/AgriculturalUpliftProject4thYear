/* The code is exporting an object that represents a comment document in a JavaScript module. The
object has properties such as `name`, `title`, `type`, and `fields`, which define the structure and
properties of the comment document. The `name` property specifies the name of the comment document,
the `title` property specifies the title of the comment document, and the `type` property specifies
the type of the comment document. The `fields` property is an array of objects that define the
fields of the comment document. Each field object has properties such as `name`, `title`, and
`type`, which define the name, title, and type of the field respectively. In this case, the comment
document has fields such as `postedBy`, `content`, and `like`. The `postedBy` field is of type
`postedBy`, the `content` field is of type `string`, and the `like` field is an array of objects of
type `like`. */
export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'postedBy',
      type: 'postedBy',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },
    {
      name: 'like',
      title: 'Like',
      type: 'array',
      of: [{type: 'like'}],
    },
  ],
}
