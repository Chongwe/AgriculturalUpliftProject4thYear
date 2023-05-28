import React from 'react'
import { useNavigate, useParams } from "react-router-dom";

function CommentPage() {
  const navigate = useNavigate();
  const { postId } = useParams();
  return (
    <div className='h-screen'>
      CommentPage
    </div>
  )
}

export default CommentPage