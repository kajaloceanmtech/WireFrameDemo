import React, { createRef, useEffect, useRef } from "react";
import shaka from "shaka-player/dist/shaka-player.ui.js";

const ShakaPlayer = ({ manifestUrl, posterUrl, width, height }) => {
  const videoRef = createRef();

  useEffect(() => {
    const video = videoRef.current;
    const player = new shaka.Player(video);

    const onError = (error) => {
      // Log the error.
      console.error("Error code", error.code, "object", error);
    };

    player
      .load(manifestUrl)
      .then(() => {
        // This runs if the asynchronous load is successful.
        console.log("The video has now been loaded!");
        console.log("event", video);

        //  setTimeout(() => {
        //     video.play()
        //  }, 1000);
      })
      .catch(onError); // onError is executed if the asynchronous load fails.
  }, []);

  return (
    <video
      autoPlay
      width={width}
      height={height}
      id="video"
      ref={videoRef}
      poster={posterUrl}
    />
  );
};

export default ShakaPlayer;
