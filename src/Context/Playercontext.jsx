import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";
export const PlayerContext = createContext();

const PlayerContextprovider = (props) => {
  const audioRef = useRef();

  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playstatus, setplaystatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setplaystatus(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setplaystatus(false);
  };

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playstatus,
    setplaystatus,
    time,
    setTime,
    play,
    pause,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextprovider;
