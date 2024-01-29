import React,{useState,useEffect} from "react";
import { ReactComponent as NoteIcon } from '../img/note.svg';
import { ReactComponent as PlayIcon } from  '../img/play-circle (1).svg';
import { Link } from "react-router-dom";
import axios from "axios";
import base_url from "../api/bootapi";
import {toast} from 'react-toastify';

const SongView=({song,playSong})=>{

  const [songImage, setSongImage] = useState(null);
 
  const handleSongClick = () => {
    // Call the playSong function with the song data
    playSong(song);
  };



  useEffect(()=>{ 
     
    const fetchPlaylistImage =()=>{
      axios.get(`${base_url}/imageobject/${song.img}`,{responseType:'blob'}).then(
        (response)=>{
          const blob = new Blob([response.data],{type: response.headers['Content-Type']});
          const imageUrl = URL.createObjectURL(blob);
          setSongImage(imageUrl);
        },
        (error)=>{
          toast.error("Something Went Wrong !!",{position:'top-center'});
          console.log(error);
        }
      );
    }
   
   fetchPlaylistImage();

   return ()=>{
    if(songImage){
      URL.revokeObjectURL(songImage);
    }
};
});




return(
  <div onClick={handleSongClick} >
     {/* <Link className="linkStyle" to={'/playSong/'+song.id}> */}
          <li>
                <div className="songIcon">
                  <NoteIcon className="noteI" />
                  <PlayIcon className="playI" />
                </div>
                <div className="songImage">
                <img src={songImage} alt="img"/>
                </div>
                <div className="songDetails">
                  <h3>{song.title}</h3>
                  <span>{song.artist}</span>
                  <h3>{song.id}</h3>
                </div>
               
          </li>
    {/* </Link>    */}
  </div>

);
};
export default SongView;