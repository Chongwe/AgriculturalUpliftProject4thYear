/**
 * Generate a Sanity query to fetch a user based on their ID.
 *
 * @param {string} userId - The ID of the user to fetch.
 * @returns {string} - The generated Sanity query.
 */
export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

/**
 * Generate a Sanity query to fetch detailed information about a user based on their ID.
 *
 * @param {string} userId - The ID of the user to fetch detailed information about.
 * @returns {string} - The generated Sanity query.
 */
export const userDetailQuery = (userId) => {
  const query = `*[_type == "user" && _id == $userId] {
    firstName,
    lastName,
    bio,
    location
  }`;
  return query;
};

/**
 * The query to fetch a list of users.
 */
export const userListQuery = `*[_type == "user"] | order(userName asc) {
  userName,
  image,
  _id
}`;

/**
 * The query to fetch a list of forum requests.
 */
export const submitForumRequestQuery = `*[_type == "forumRequest"] | order(_createdAtdesc) {
  _id,
  title,
  description,
  userId,
  postedBy->{_id, userName},
  isViewed,
  isApproved
}`;

/**
 * Generate a Sanity query to fetch a list of messages between two users.
 *
 * @param {string} senderId - The ID of the sender user.
 * @param {string} receiverId - The ID of the receiver user.
 * @returns {string} - The generated Sanity query.
 */
export const messageListQuery = (senderId, receiverId) =>
  `*[_type == "message" && ((sender.sub == "${senderId}" && receiver._id == "${receiverId}") || (sender.sub == "${receiverId}" && receiver._id == "${senderId}")) ] | order(_createdAt asc)`;

/**
 * Generate a Sanity query to fetch a list of subforums created by a user.
 *
 * @param {string} userId - The ID of the user who created the subforums.
 * @returns {string} - The generated Sanity query.
 */
export const userCreatedForumsQuery = (userId) => {
  const query = `*[_type == "subforum" && userId == '${userId}'] | order(title asc) {
    _id,
    title,
    description,
    memberOf[] {
      _id,
      postedBy->{_id, userName, image},
      userId
    }
  }`;
  return query;
};

/**
 * The query to fetch a list of all subforums.
 */
export const forumQuery = `*[_type == "subforum"] | order(title asc) {
  _id,
  title,
  description,
  memberOf[] {
    _id,
    postedBy->{_id, userName, image},
    userId
  }
}`;

/**
 * Generate a Sanity query to fetch detailed information about a subforum.
 *
 * @param {string} forumId - The ID of the subforum to fetch detailed information about.
 * @returns {string} - The generated Sanity query.
 */
export const forumDetailsQuery = (forumId) => {
  const query = `*[_type == "subforum" && _id == '${forumId}'] {
    _id,
    title,
    description,
    post[] {
      _id,
      title,
      forumId, 
      content,
      image{
        asset -> {
          url
        }
      },
      _createdAt,
      postedBy->{_id, userName, image},
    },
    memberOf[] {
      _id,
      postedBy->{_id, userName, image},
      userId
    }
  }`;
  return query;
};

/**
 * Generate a Sanity query to fetch detailed information about a post in a subforum.
 *
 * @param {string} forumId - The ID of the subforum containing the post.
 * @param {string} postId - The ID of the post to fetch detailed information about.
 * @returns {string} - The generated Sanity query.
 */
export const postDetailQueryFromForum = (forumId, postId) => {
  const query = `*[_type == "subforum" && _id == '${forumId}' ] {
    _id,
    title,
    post[_id == '${postId}'] {
      _id,
      title,
      image,
      content,
      forumId, 
      postedBy -> {
        _id,
        userName,
        image
      },
      like[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        _key,
        content,
        postedBy->{
          _id,
          userName,
          image,
        },
        commentCount
      },
    }
  }[0]`;

  return query;
};

/**
 * Generate a Sanity query to fetch detailed information about a post.
 *
 * @param {string} postId - The ID of the post to fetch detailed information about.
 * @returns {string} - The generated Sanity query.
 */
export const postDetailQuery = (postId) => {
  const query = `*[_type =="post" && _id == '${postId}'] {
    image{
      asset -> {
        url
      }
    },
    _id,
    _createdAt,
    title,
    content,
    postedBy -> {
      _id,
      userName,
      image
    },
    like[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

/**
 * The query to fetch a list of subforums with their associated posts.
 */
export const postQueryforums = `*[_type == "subforum"] {
  _id,
  title,
  post[] | order(_createdAt desc) {
    image{
      asset -> {
        url
      }
    },
    _id,
    _createdAt,
    title,
    content,
    forumId,
    postedBy -> {
      _id,
      userName,
      image
    },
    like[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
      commentCount
    },
  }
}`;

/**
 * The query to fetch a list of all posts.
 */
export const postsQuery = `*[_type == "post"] | order(_createdAt desc) {
  image{
    asset -> {
      url
    }
  },
  _id,
  _createdAt,
  title,
  content,
  postedBy -> {
    _id,
    userName,
    image
  },
  like[]{
    _key,
    postedBy->{
      _id,
      userName,
      image
    },
  },
  comment[]{
    _key,
    postedBy->{
      _id,
      userName,
      image
    },
    commentCount
  },
}`;

/**
 * Generate a Sanity query to count the number of comments for a post.
 *
 * @param {string} postId - The ID of the post to count comments for.
 * @returns {string} - The generated Sanity query.
 */
export const commentCountQuery = (postId) => {
  const query = `*[_type == "post" && _id == '${postId}'][0] {
      "commentCount": count(comments)
    }`;
  return query;
};

/**
 * The query to fetch a list of main news items.
 */
export const mainNewsListQuery = `*[_type == "main_news"] {
  title,
  description,
  content,
  "imageUrl": image.asset->url,
}`;
