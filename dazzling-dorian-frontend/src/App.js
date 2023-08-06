import './App.css';
import Soundboard from './components/soundboard/Soundboard'
import Feed from './components/feed/Feed'
import getPosts from './fetchers/posts'
import { useState, useEffect } from 'react'

function App() {
  return (
    <div className="App">
      <h1>Dazzling Dorian's Delightful Domain</h1>
      <Soundboard />
      <Feed />
    </div>
  );
}

export default App;
