export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userListQuery = `*[_type == "user"] | order(userName asc) {
  userName,
  image,
  _id
}`;

export const messageListQuery = (senderId, receiverId) =>
  `*[_type == "message" && ((sender.sub == "${senderId}" && receiver._id == "${receiverId}") || (sender.sub == "${receiverId}" && receiver._id == "${senderId}")) ] | order(_createdAt asc)`;

export const userCreatedForumsQuery = (userId) => {
  const query = `*[_type == "subforum" && userId == '${userId}'] | order(title asc) {
    _id,
    title,
    description
  }`;
  return query;
};

export const forumQuery = `*[_type == "subforum"] | order(title asc) {
  _id,
  title,
  description
}`;

export const forumDetailsQuery = (forumId) => {
  const query = `*[_type == "subforum" && _id == '${forumId}'] {
    _id,
  title,
  description,
  post[] {
    title,
    content,
    image{
      asset -> {
        url
      }
    },
    _createdAt,
    postedBy->{_id, userName, image},
  }
  }`;
  return query;
};

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

export const postQueryforums = `*[_type == "subforum"] | order(post._createdAt desc) {
  _id,
  title,
post[] {
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
 
}
} `;

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

export const commentCountQuery = (postId) => {
  const query = `*[_type == "post" && _id == '${postId}'][0] {
      "commentCount": count(comments)
    }`;
  return query;
};
