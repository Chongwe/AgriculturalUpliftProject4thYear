import React, { useEffect, useState } from "react";
import { postDetailQuery, userQuery } from '../utils/data';
import Spinner from '../components/Spinner';
import { fetchUser } from "../utils/fetchUser";
import { useNavigate, useParams } from "react-router-dom";
import { urlFor, client } from "../client";
import UserContext from '../Layout/UserContext';
import { v4 as uuidv4 } from 'uuid';

const CommentPage = () => {
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState(null);
  const [addingComment, setAddingComment] = useState(false);
  const userInfo = fetchUser();
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  const fetchPostData = async () => {
    try {
      const query = postDetailQuery(postId);
      const postData = await client.fetch(query);
      setPost(postData[0]);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  const addComment = () => {
    if (comment) {
      setAddingComment(true);
      client
        .patch(postId)
        .setIfMissing({ comments: [] })
        .insert('after', 'comments[-1]', [{
          comment,
          _key: uuidv4(),
          postedBy: {
            _type: 'postedBy',
            _ref: user._id
          } 
        }])
        .commit()
        .then(() => {
          fetchPostData();
          setComment('');
          setAddingComment(false);
        });
    }
  };

  useEffect(() => {
    fetchPostData();
  }, [postId]);

  if (!post) {
    return <Spinner message="Loading Post" />;
  }

  return (
    <UserContext.Provider value={user}>
      <div className="flex flex-col justify-center items-center h-full mt-5 lg:h-4/5">
        <div className="flex lg:flex-row flex-col justify-center rounded-lg bg-green-100 lg:p-5 p-3 lg:w-4/5 w-full">
          <div className=" p-3 flex-0.7 rounded-2xl w-full">
            <img src={post?.image && urlFor(post.image).url()} className="flex rounded-b-2xl rounded-t-sm w-full mt-2" />
          </div>

          <div className="flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full">
            <div className='flex flex-row'>
              <img
                src={post.postedBy.image}
                alt='user-profile'
                className='w-10 h-10 rounded-full'
              />
              <h1 className="text-green-900 ml-2 justify-normal text-2xl">
                {post.postedBy?.userName}
              </h1>
            </div>

            <h3 className="text-green-900 justify-normal text-2xl">{post.title}</h3>
            <p className="border-l duration-75 p-2 border-spacing-2 border-goldenrod">
              {post.content}
            </p>

            <h1 className="text-uchiGreen text-4xl">Comments</h1>
            <hr className="my-2 border-goldenrod" />
            <div className='max-h-370 overflow-y-auto '>
              {post?.comments?.map((comment, i) => (
                <div key={i} className='flex gap-2 mt-5 rounded-lg items-center'>
                  <img
                    src={comment?.postedBy?.image}
                    alt='user-profile'
                    className='w-10 h-10 rounded-full'
                  />
                  <div className='flex flex-col'>
                    <p className='font-bold'>{comment.postedBy.userName}</p>
                    <p>{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex flex-wrap gap-3 '>
              <img src={post.postedBy.image} className='w-10 h-10 p-2 rounded-full' />
              <input
                className='flex-1 transition-all duration-500 hover:scale-95 border-2 p-2 focus:border-green-300 rounded-2xl border-green-100 outline-none'
                type='text'
                value={comment}
                placeholder='Type Comment'
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                type="button"
                onClick={addComment}
                className="bg-green-900 hover:bg-goldenrod transition-all duration-500 hover:scale-95 text-white  p-2 rounded-xl w-28 outline-none"
              >
                {addingComment ? 'Commenting...' : ' Comment'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default CommentPage;
