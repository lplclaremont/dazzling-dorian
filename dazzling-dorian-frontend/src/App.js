import './App.css';
import Soundboard from './components/soundboard/Soundboard'
import Feed from './components/feed/Feed'
import VideoPlaylist from './components/videoPlaylist/VideoPlaylist'

function App() {
  return (
    <div className="App">
      <h1>Dazzling Dorian's Delightful Domain</h1>
      <Soundboard />
      <VideoPlaylist />
      <Feed />
    </div>
  );
}

export default App;
