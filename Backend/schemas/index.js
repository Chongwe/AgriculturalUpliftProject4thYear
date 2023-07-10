import user from './user'
import postedBy from './postedBy'
import memberOf from './memberOf'
import comment from './comment'
import dislike from './dislike'
import like from './like'
import subforum from './subforum'
import posts from './post'
import animals from './animals'
import crops from './crops'
import news from './news'
import equipment from './equipment'
import farms from './farms'
import pests from './pests'
import animalchoice from './animalChoice'
import cropChoice from './cropChoice'
import pestsChoice from './pestsChoice'
import equipmentChoice from './equipmentChoice'
import messages from './messages'
import forumRequest from './forumRequest'

/**
 * An array containing all the schema types.
 * @type {object[]}
 */
export const schemaTypes = [
  animalchoice,
  animals,
  comment,
  crops,
  cropChoice,
  dislike,
  equipment,
  equipmentChoice,
  farms,
  forumRequest,
  like,
  memberOf,
  messages,
  news,
  pests,
  pestsChoice,
  postedBy,
  posts,
  subforum,
  user,
]
