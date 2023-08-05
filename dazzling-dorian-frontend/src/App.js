import './App.css';
import Post from './components/post/Post'
import { useState, useEffect } from 'react'

const API_URL = 'http://localhost:3000/api/v1/posts'

function getAPIData() {
  return fetch(API_URL)
  .then((response) => response.json())
}

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAPIData().then((postsData) => {
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
