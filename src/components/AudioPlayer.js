import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioPlayer = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audioElement.currentTime);
    };

    const updateDuration = () => {
      setDuration(audioElement.duration);
    };

    audioElement.addEventListener("timeupdate", updateTime);
    audioElement.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audioElement.removeEventListener("timeupdate", updateTime);
      audioElement.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (event) => {
    const audioElement = audioRef.current;
    const time = parseFloat(event.target.value);
    audioElement.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900">
      <div className="py-4 px-6 flex items-center justify-between gap-5">
        <button
          onClick={togglePlay}
          className="bg-white rounded-full text-gray-900 p-5 flex items-center justify-center focus:outline-none"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <div className="mx-6">
          <audio ref={audioRef} src={audioUrl} />
        </div>
        <div className="text-white">{formatTime(currentTime)}</div>

        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSliderChange}
          className="w-full appearance-none bg-goldenhover h-1 rounded-full outline-none custom-slider"
          style={{ direction: "ltr" }}
        />

        <div className="text-white">{formatTime(duration)}</div>
      </div>
    </div>
  );
};

export default AudioPlayer;
