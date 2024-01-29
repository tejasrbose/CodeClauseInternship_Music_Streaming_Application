import React, { useState } from "react";

import back from '../img/back.png';
import playpause from '../img/play.png';
import pause from '../img/pause.png'
import forward from '../img/next.png';
import demo from '../img/Ae dil hai mushkil.jpg'
function MusicPlayer({song,imgSrc}){
    
    const [isPlaying, setPlaying]=useState(false);

    const changPlayPause=()=>{
        setPlaying(!isPlaying)
    }
    

    return(
          <div className="musicPlayer">
             <div className="songImage">
                <img src={demo} alt="img"/>
             </div>
             <div className="songAttribute">

                <audio src={song} preload='metadata' />
                <div className="top">
                   <div className="left">
                   </div>
                   <div className="middle">
                    <div className="back">
                    <img src={back} alt="img"></img>
                    </div>
                    <div className="playpause" onClick={changPlayPause}>
                        {/* <img src={playpause}></img> */}
                        {isPlaying ?<img src={pause} alt="img"/>:<img src={playpause} alt="img"/>}
                    </div>
                    <div className="forward">
                        <img src={forward} alt="img"></img>
                    </div>
                   </div>
                   <div className="right"></div>
                </div>
                <div className="bottom">
                    <div className="currentTime">00:00</div>
                    <input type="range" className="progressBar"/>
                    <div className="duration">00:00</div>
                </div>
             </div>
          </div>
    );
}

export default MusicPlayer;