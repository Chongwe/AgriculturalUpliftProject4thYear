export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userListQuery = `*[_type == "user"] | order(userName asc) {
  userName,
  image
}`;
