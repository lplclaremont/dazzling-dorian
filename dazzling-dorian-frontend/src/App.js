import './App.css';
import Post from './components/post/Post'
import getPosts from './fetchers/posts'
import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then((postsData) => {
      setPosts(postsData)
    })
  }, []);

  return (
    <div className="App">
      <h1>Dazzling Dorian's Delightful Domain</h1>
      <div className='posts-container'>
        {posts.map((post) => <Post post={post} key={post.id}/>
        )}
      </div>
    </div>
  );
}

export default App;
