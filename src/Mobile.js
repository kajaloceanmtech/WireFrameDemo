import React, { Fragment, useEffect, useRef, useState } from "react";
import { Text } from "react-konva";

const MobileDisplay = ({ name, text }) => {
    const textRef = useRef();
    // console.log("key", name)

    useEffect(() => {
        if (textRef.current) {
            textRef.current.moveToTop();
            //  setSelectedId(text.hash);

        }
    }, []);
    const [nn, setNn] = useState(name);
    useEffect(() => {
        if (name)
            setNn(name);
        // console.log("use",nn)
    }, [name]);

    return (
        <Fragment>
            {nn === "five" ? (<Text
                ref={textRef}
                text={text.text}
                x={80}
                y={480}
                fontSize={15}
                type={text.type}
                width={text.width || 200}
                minWidth={200}
                hash={text.hash}
            />) : (<></>)}
            {nn === "four" ? (<Text
                ref={textRef}
                text={text.text}
                x={390}
                y={530}
                fontSize={20}
                type={text.type}
                width={text.width || 200}
                minWidth={200}
                hash={text.hash}
            />) : (<></>)}
             {nn === "third" ? (<Text
                ref={textRef}
                text={text.text}
                x={250}
                y={520}
                fontSize={19}
                type={text.type}
                width={text.width || 200}
                minWidth={200}
                hash={text.hash}
            />) : (<></>)}
                {nn === "second" ? (<Text
                ref={textRef}
                text={text.text}
                x={70}
                y={560}
                fontSize={17}
                 type={text.type}
                width={text.width || 200}
                minWidth={200}
                hash={text.hash}
            />) : (<></>)}
               {nn === "First" ? (<Text
                ref={textRef}
                text={text.text}
                x={260}
                y={530}
                fontSize={17}
                type={text.type}
                width={text.width || 200}
                minWidth={200}
                hash={text.hash}
            />) : (<></>)}

        </Fragment>
    );
};

export default MobileDisplay;
