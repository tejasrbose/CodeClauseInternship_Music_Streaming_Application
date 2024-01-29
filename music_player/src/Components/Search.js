import React, { useEffect, useState } from "react";
import { TextField} from "@mui/material";
import axios from "axios";
import base_url from "../api/bootapi";

import SongView from "./SongView";

const Search = ({playSong}) => {

    const [text, setText] = useState("");
    

    const handleChange = (event) => {
      setText(event.target.value);
      console.log(text);
    };
    const[songs, setSongs]=useState([]);
    useEffect(()=>{
            axios.get(`${base_url}/getSongBySearch/${text}`).then(
                (response)=>{
                    setSongs(response.data);
                },
                (error)=>{
                    //toast.error("Something Went Wrong !!",{position:"top-center"});
                }
            )
    })
  return (
    <div className="searchbar">
      <h1>Search Songs(By Artist,Name,Genre,id)</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          value={text}
          onChange={handleChange}
        />
      </div>
      <div className="mainInner">
      <div className="playlistPageSongs"> 
            {songs.length > 0 ? (
            <ul className="songList">
              {songs.map((sng) => (
                <SongView key={sng.id} song={sng} playSong={playSong} />
              ))}
            </ul>
          ) : (
            <div class="Nosong">
              <h1> No Songs are found</h1>
            </div>
          )}

          </div>
          </div>
    </div>
  );
};

export default Search;
