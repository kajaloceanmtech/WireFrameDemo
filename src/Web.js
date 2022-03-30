import React, { Fragment, useEffect, useRef, useState } from "react";
import { Text } from "react-konva";

const WebDisplay = ({ name, text }) => {
    const textRef = useRef();

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
            {nn === "five" ? (
                <Text
                    ref={textRef}
                    text={text.text}
                    x={80}
                    y={535}
                    fontSize={15}
                    type={text.type}
                    width={text.width || 300}
                    minWidth={200}
                    hash={text.hash}

                />) : (<></>)}
            {nn === "four" ? (
                <Text
                    ref={textRef}
                    text={text.text}
                    x={100}
                    y={520}
                    fontSize={13}
                    type={text.type}
                    width={text.width || 300}
                    minWidth={200}
                    hash={text.hash}

                />) : (<></>)}
            {nn === "third" ? (
                <Text
                    ref={textRef}
                    text={text.text}
                    x={400}
                    y={530}
                    fontSize={15}
                    type={text.type}
                    width={text.width || 300}
                    minWidth={200}
                    hash={text.hash}

                />) : (<></>)}
            {nn === "second" ? (
                <Text
                    ref={textRef}
                    text={text.text}
                    x={70}
                    y={540}
                    fontSize={15}
                    type={text.type}
                    width={text.width || 300}
                    minWidth={200}
                    hash={text.hash}

                />) : (<></>)}
            {nn === "First" ? (
                <Text
                    ref={textRef}
                    text={text.text}
                    x={400}
                    y={530}
                    fontSize={15}
                    type={text.type}
                    width={text.width || 300}
                    minWidth={200}
                    hash={text.hash}

                />) : (<></>)}

        </Fragment>
    );
};

export default WebDisplay;
