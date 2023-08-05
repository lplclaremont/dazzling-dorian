import React from 'react'

function Post({post}) {
  return (
    <div className='post' data-cy="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  )
}

export default Post
