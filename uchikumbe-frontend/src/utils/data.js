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
  const query = `*[_type == "subforum" && _id == '${forumId}']`;
  return query;
};

export const postDetailQuery =(postId) => {
  const query = `*[_type =="post" && _id == '${postId}']`;
  return query;
};

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
}`;
