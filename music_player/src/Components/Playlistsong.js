import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as PlayIcon } from  '../img/play-circle (1).svg';
import { ReactComponent as HeartIcon } from '../img/heart.svg';
import SongView from "./SongView";
import axios from "axios";
import {toast} from 'react-toastify';
import base_url from "../api/bootapi";
import Player from "./Player";
import MusicPlayer from "./MusicPlayer";
const Playlistsong=({ playSong })=>{

    const {id}=useParams();
    const [playlist, setPlaylist] = useState({});
    const [songs, setSongs] = useState([]);


     useEffect(()=>{
      axios.get(`${base_url}/getSongs/${id}`).then(
        (response)=>{
          toast.success("Succesfully Loaded all Songs",{position:'top-center'});
          setSongs(response.data);
        },(error)=>{
          // toast.error("Something Went wrong");
          console.log(error);
        }
      )
     },[id]);

    useEffect(()=>{
      axios.get(`${base_url}/getplaylist/${id}`).then(
         (responce)=>{
          toast.loading();
             setPlaylist(responce.data);
         },
         (error)=>{
             console.log(error);
             toast.error("Something Went wrong");
         }
      )
   },[id]);

   const [playlistImage, setPlaylistImage] = useState(null);
   


    useEffect(()=>{  
    const fetchPlaylistImage =()=>{
      axios.get(`${base_url}/imageobject/${playlist.img}`,{responseType:'blob'}).then(
        (response)=>{
          const blob = new Blob([response.data],{type: response.headers['Content-Type']});
          const imageUrl = URL.createObjectURL(blob);
          console.log(playlist.img);
          setPlaylistImage(imageUrl);
        },
        (error)=>{
          // toast.error("Some Error !!");
          console.log(error);
        }
      );
    }
   
   fetchPlaylistImage();

   return ()=>{
    if(playlistImage){
      URL.revokeObjectURL(playlistImage);
    }
};
},[playlist.img, playlistImage]);
   
    return (
      <div className="playlistPage">
        <div className="mainInner">
          <div className="playlistPageInfo">
            <div className="playlistPageImage">
              <img
              src={playlistImage}
                alt="pic"
              />
            </div>
            <div className="playlistPageContent">
              <p className="smallText uppercase bold">Playlist</p>
              <h1>{playlist.playlistName}</h1>
  
              <p className="tagline">
                {playlist.playlistGenre}
              </p>
              <div className="playlistPageDesc">
                {/* <p className="spotify">Spotify</p>
                <span>699,428 likes</span>
                <span>4hr 35 min</span> */}
                <h3>{songs.length}</h3>
              </div>
            </div>
          </div>
          <div className="playlistPageSongs">
            <div className="playlistButtons">
              <span className="playIcon">
                <PlayIcon />
              </span>
              <div className="icons">
                <div className="icon iconsHeart">
                  <HeartIcon />
                </div>
                <div className="icon iconsDots"></div>
              </div>
            </div>
  
            {songs.length > 0 ? (
            <ul className="songList">
              {songs.map((sng) => (
                <SongView  key={sng.id} song={sng} playSong={playSong}/>
              ))}
            </ul>
          ) : (
            <div class="Nosong">
              <h1> No Songs are in the PlayList</h1>
            </div>
          )}

          </div>
        </div>
       
      </div>
    )
};
export default Playlistsong;