import React, {
  Fragment,
  useEffect,
  useState,
  useRef,
  useMemo,
  createRef
} from "react";
import Konva from "konva";
import { Image } from "react-konva";
const shaka = require("shaka-player/dist/shaka-player.ui.js");

const Video = ({ src, isSelected, onDragStart, onDragEnd }) => {
  const mpdFile =
    "https://d15g9rfyumupfi.cloudfront.net/resources/1639058248809_1639034843878_galaxy-note20_highlights_kv_video.mp4.webm";
  const videoThumbnail =
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Big_Buck_Bunny_thumbnail_vlc.png";

  const videoRef = createRef(null);
  const [size, setSize] = useState({ width: 50, height: 50 });
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually

      trRef.current.moveToTop();
      trRef.current.nodes([videoRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  // we need to use "useMemo" here, so we don't create new video elment on any render
  const videoElement = useMemo(() => {
    const element = document.createElement("video");
    element.autoplay = true;
    element.muted = true;
    element.poster = videoThumbnail;
    element.src = mpdFile;
    element.loop = true;
    return element;
  }, [src]);

  // // when video is loaded, we should read it size
  useEffect(() => {
    const onload = function (event) {
      console.log(videoElement.videoWidth, videoElement.videoHeight);
      setSize({
        width: videoElement.videoWidth,
        height: videoElement.videoHeight
      });
      // videoRef.current.moveToTop();
    };

    videoElement.addEventListener("loadedmetadata", onload);
    return () => {
      videoElement.removeEventListener("loadedmetadata", onload);
    };
  }, [videoElement]);

  useEffect(() => {
    setTimeout(() => {
      videoElement.load();
    }, 1000);
  }, [videoElement]);

  // use Konva.Animation to redraw a layer
  /*useEffect(() => {
    // videoElement.play();
    const layer = videoRef.current?.getLayer();
    const anim = new Konva.Animation(() => {}, layer);
    anim.start();
    return () => anim.stop();
  }, [videoElement]);
*/
  return (
    <Image
      ref={videoRef}
      image={videoElement}
      x={20}
      y={20}
      stroke="red"
      width={200}
      height={200}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      strokeWidth={5}
    />
  );
};

export default Video;
