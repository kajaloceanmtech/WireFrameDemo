import React, { Fragment, useEffect, useRef } from "react";
import { Image, Transformer } from "react-konva";
import useImage from "./useImage";

const AdImage = ({
  image,
  isSelected,
}) => {
  const [img] = useImage(image.src, "anonymous");
  const imageRef = useRef();
  const trRef = useRef();



  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.moveToTop();
     // setSelectedId(image.hash);
    }
  }, []);


  return (
    <Fragment>
      <Image       
       
        ref={imageRef}
        image={img}
        imageUrl={image.src}
        hash={image.hash}
        x={45}
        y={45}
        height={410}
        width={450}
        imageId={image.id}
        offsetX={0}
        offsetY={0}      
        type={image.type}
        strokeWidth={1}
      />    
    </Fragment>
  );
};

export default AdImage;
