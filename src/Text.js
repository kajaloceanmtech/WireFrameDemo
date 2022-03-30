import React, { Fragment, useEffect, useRef } from "react";
import { Text} from "react-konva";

const TextDisplay = ({
  text,
 }) => {
  const textRef = useRef();
  
  useEffect(() => {
    if (textRef.current) {
      textRef.current.moveToTop();
    //  setSelectedId(text.hash);
    }
  }, []);
  return (
    <Fragment>
      <Text       
        ref={textRef}
        text={text.text}
        x={230}
        y={150}
        fontSize={22}
        type={text.type}
        width={text.width || 200}
        minWidth={200}
        hash={text.hash}
        
      />
    
    </Fragment>
  );
};

export default TextDisplay;
