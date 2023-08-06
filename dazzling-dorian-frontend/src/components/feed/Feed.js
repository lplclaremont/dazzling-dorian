import React, { useState, useEffect } from 'react'
import Post from '../post/Post'
import getPosts from '../../fetchers/posts'

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then((postsData) => {
      setPosts(postsData)
    })
  }, []);

  return (
    <div className="feed">
      <div className="posts-container">
        {posts.map((post) => <Post post={post} key={post.id}/>
        )}
      </div>   
    </div>
  )
}

export default Feed
