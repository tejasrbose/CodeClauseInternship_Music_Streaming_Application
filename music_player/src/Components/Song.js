import React, { useEffect ,useState} from "react";
import { ReactComponent as Playit } from  '../img/play-circle (1).svg';

import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Song=({list,c_obj})=>
{
  const [playlistImage, setPlaylistImage] = useState(null);


    useEffect(()=>{ 
     
    const fetchPlaylistImage =()=>{
      axios.get(`${base_url}/imageobject/${list.img}`,{responseType:'blob'}).then(
        (response)=>{
          const blob = new Blob([response.data],{type: response.headers['Content-Type']});
          const imageUrl = URL.createObjectURL(blob);
          setPlaylistImage(imageUrl);
        },
        (error)=>{
          toast.error("Something Went Wrong !!",{position:'top-center'});
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
});

    return(
    <div className="cardWrap">
      <div className="card">
         <div className="cardImg">
         <img src={playlistImage} alt="img" loading="lazy"  />
         </div>
         <div className="cardContent">
          <h3>{list.playlistName}</h3>
          <span>
            {list.playlistGenre}
          </span>
         </div>
         <span className="playicon">
         <Playit/>
         </span>
      </div>
      </div>
    );
};
export default Song;