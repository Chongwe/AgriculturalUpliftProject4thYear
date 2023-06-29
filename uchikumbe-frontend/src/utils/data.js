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
    description,
    memberOf[] {
      _id,
      postedBy->{_id, userName, image},
      userId
    }
  }`;
  return query;
};

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

export const postDetailQueryFromForum = (forumId, postId) => {
  const query = `*[_type == "subforum" && _id == '${forumId}' ] {
    _id,
    title,
    post[_id == '${postId}'] {
      _id,
      title,
      image,
      content,
      forumId,  // Include the forumId field here
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

export const mainNewsListQuery = `*[_type == "main_news"] {
  title,
  description,
  content,
<<<<<<< Updated upstream
  image,

=======
  category,
  "imageUrl": image.asset->url
  datetime
>>>>>>> Stashed changes
}`;


