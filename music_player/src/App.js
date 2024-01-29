  
  import './App.scss';
  import React from 'react';
  import axios from 'axios';
  import base_url from './api/bootapi';
  import { ToastContainer } from 'react-toastify';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Nav from './Components/Navbar';
  import Content from './Components/Content';
  import Playlistsong from './Components/Playlistsong';
  import Search from './Components/Search';
  import Mylibrary from './Components/Mylibrary';
  import About from './Components/About'
  import Contact from './Components/ContactUs';
  import Admin from './Components/Admin';
  import Player from './Components/Player';
  import CreateNewSongs from './Components/CreateNewSongs';
  import CreatePlayList from './Components/CreatePlayList';
import MusicPlayer from './Components/MusicPlayer';
import SignInUp from './Components/SignInUp';
import CategoryForm from './Components/Categoryform';
import { useState } from 'react';


  

  function App() {
    
    const [currentSong, setCurrentSong] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);
    
    const playSong = (song) => {
      setCurrentSong(song);
      // Fetch the song's audio URL here and update the state
      // For now, let's assume the song object has a property `audioSrc`
      axios.get(`${base_url}/songobject/${song.fileId}`, { responseType: "blob" }).then(
        (response) => {
          const blob = new Blob([response.data], { type: response.headers["Content-Type"] });
          const audioUrl = URL.createObjectURL(blob);
          setAudioUrl(audioUrl);
        },
        (error) => {
          console.log(error);
          // toast.error("Something Went Wrong !!", { position: "top-center" });
        }
      );
      // setAudioUrl(song.audioSrc);
    };


    return (
    
      <div className='outerWrap'>
        <Router>
          <ToastContainer/>
      <div className='App'>
        <Nav/>
        <Routes>
        <Route path='/' Component={Content}/>
        <Route path='/search' element={<Search playSong={playSong}/>}>Search Bar</Route>
        <Route path='/library' Component={SignInUp}>library</Route>
        <Route path='/playlist/:id' element={<Playlistsong playSong={playSong}/>}></Route>
        <Route path='/about' Component={About}>About</Route>
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/admin' Component={Admin}/>
        <Route path='/makeSong' Component={CreateNewSongs}/>
        <Route path='/makelist' Component={CreatePlayList} />
        <Route path='/makecategory'  Component={CategoryForm}/>
        </Routes>
      </div>
      <div> 
    {currentSong && <Player song={currentSong} songUrl={audioUrl} />}
      </div>
      </Router>
      </div>
      
    );
  }

  export default App;
