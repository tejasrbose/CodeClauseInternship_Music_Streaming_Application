import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "./Slider";
import ControlPanel from "./ControlPanel";
import axios from "axios";
import { toast } from 'react-toastify';
import base_url from "../api/bootapi";

const Player = ({song, songUrl}) => {
  // const { id } = useParams();
  const [songData, setSongData] = useState({});
  const [audioUrl, setAudioUrl] = useState(null);
  const [songImage, setSongImage] = useState(null);

  useEffect(() => {
    axios.get(`${base_url}/getSong/${song.id}`).then(
      (response) => {
        toast.loading();
        setSongData(response.data);
      },
      (error) => {
        console.log(error);
         toast.error("Something Went wrong", { position: "top-center" });
      }
    );
  }, [song.id]);

  useEffect(() => {
    const getAudioFromServer = () => {
      axios.get(`${base_url}/songobject/${songData.fileId}`, { responseType: "blob" }).then(
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
    };

    getAudioFromServer();

    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [songData]);

  useEffect(() => {
    const fetchPlaylistImage = () => {
      axios.get(`${base_url}/imageobject/${songData.img}`, { responseType: 'blob' }).then(
        (response) => {
          const blob = new Blob([response.data], { type: response.headers['Content-Type'] });
          const imageUrl = URL.createObjectURL(blob);
          setSongImage(imageUrl);
        },
        (error) => {
          // toast.error("Something Went Wrong !!", { position: 'top-center' });
          console.log(error);
        }
      );
    };

    fetchPlaylistImage();

    return () => {
      if (songImage) {
        URL.revokeObjectURL(songImage);
      }
    };
  }, [songData, songImage]);

  const audioRef = useRef();

  useEffect(() => {
    const audio = audioRef.current;

    if (audioUrl) {
      audio.volume = 0.5;
      audio.play();
    }

    return () => {
      if (audioUrl) {
        audio.pause();
      }
    };
  }, [audioUrl]);

  const [percentage, setPercentage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Set to true for auto-play
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentage(e.target.value);
  };

  const play = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / (e.currentTarget.duration || 1)) * 100).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentage(+percent);
    setCurrentTime(time.toFixed(2));
  };

  return (
    <div className="musicControls">
      <div className="songImage">
        <img src={songImage} alt="img" />
      </div>
      <h3>{songData.title}</h3>
      <Slider percentage={percentage} onChange={onChange} />
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        src={audioUrl}
      />
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />
    </div>
  );
};

export default Player;
