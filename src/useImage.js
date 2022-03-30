import { useEffect, useState } from "react";
const defaultState = { image: undefined, status: "loading" };

const useImage = (url, crossOrigin) => {
  const res = useState(defaultState);
  const image = res[0].image;
  const status = res[0].status;

  const setState = res[1];

  useEffect(() => {
    if (!url) return;
    const img = new Image();

    const onload = () => {
      setState({ image: img, status: "loaded" });
    };

    const onerror = () => {
      setState({ image: undefined, status: "failed" });
    };

    img.addEventListener("load", onload);
    img.addEventListener("error", onerror);
    crossOrigin && (img.crossOrigin = crossOrigin);
    img.src = url;

    return function cleanup() {
      img.removeEventListener("load", onload);
      img.removeEventListener("error", onerror);
      setState(defaultState);
    };
  }, [url, crossOrigin]);

  return [image, status];
};

export default useImage;
