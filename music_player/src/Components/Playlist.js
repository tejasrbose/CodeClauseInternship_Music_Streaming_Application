import React, { useEffect,useState } from "react";
import Song from "./Song";
import { Link } from "react-router-dom";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import Player from "./Player";

const Playlist=({cat_obj})=>{

  const [playlist, setPlaylist] = useState([]);
   
  useEffect(()=>{
     axios.get(`${base_url}/getalllists`).then(
        (responce)=>{
         toast.loading();
            setPlaylist(responce.data);
        },
        (error)=>{
            console.log(error);
            toast.error("Something Went wrong",{position:'top-center'});
        }
     )
  },[]);

  const matchPlaylist = playlist.filter(
    (playlist)=>playlist.catId === cat_obj.id
    )
    
    return( 
    
        <div className="cardWrapInner">
        {
             matchPlaylist.map((playlist)=>(
              <Link to={'/playlist/'+playlist.playlistId} className="linkStyle"><Song list={playlist}  c_obj={cat_obj} /></Link>
             ))

        }


        
         </div>



    );
};

export default Playlist;