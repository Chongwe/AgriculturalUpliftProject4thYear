export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userListQuery = `*[_type == "user"] | order(userName asc) {
  userName,
  image
}`;

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
}`
