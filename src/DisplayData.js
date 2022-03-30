
import React from "react";
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

import four from './Image/pink.jpg'
import fifth from './Image/fifth.jpg'
const URLImage = ({ image }) => {

    const [img] = useImage(image.src);

    return (
        <Image
            image={img}
            x={600}
            y={600}
            // I will use offset to set origin to the center of the image
            offsetX={img ? 600 : 0}
            offsetY={img ? 600 : 0}
        />
    );
};
const downloadURI = (uri, name) => {
    const link = document.createElement("a")
    link.download = name
    link.href = uri
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
const DisplayApiData = () => {
    const [selectedId, setSelectedId] = React.useState(null);
    const activeRef = React.useRef();
    const backgroundRef = React.useRef();
    const transformerRef = React.useRef();

    const checkDeselect = (e) => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            setSelectedId(null);
        }
    };
    const dragUrl = React.useRef();
    const stageRef = React.useRef();
    const [images, setImages] = React.useState([]);
    const [downloadClicked, setDownloadClicked] = React.useState(false)

    return (
        <div style={{ marginRight: "550px", marginLeft: "250px" }}>
            <h1>Image Frame</h1>
            <div>
                <img
                    alt="four"
                    height="120px"
                    width="120px"
                    src={four}
                    draggable="true"
                    onDragStart={(e) => {
                        dragUrl.current = e.target.src;
                    }}
                />
                <img
                    alt="fifth"
                    height="120px"
                    width="120px"
                    src={fifth}
                    draggable="true"
                    onDragStart={(e) => {
                        dragUrl.current = e.target.src;
                    }}
                />
            </div>            <div
                onDrop={(e) => {
                    e.preventDefault();
                    const hash = btoa(Math.random()).substr(10, 5);
                    // register event position
                    stageRef.current.setPointersPositions(e);
                    // add image
                    setImages(
                        images.concat([
                            {
                                ...stageRef.current.getPointerPosition(),
                                src: dragUrl.current,
                                hash
                            },
                        ])
                    );
                }}
                onDragOver={(e) => e.preventDefault()}
            >
                <button
                    className="inline-flex items-center px-4 py-2  "
                    onClick={() => {
                        setDownloadClicked(true)
                        setTimeout(() => {
                            const dataURL = stageRef.current.toDataURL({
                                quality: 1,
                                pixelRatio: 1,
                                mimeType: "image/jpeg"
                            });
                            downloadURI(dataURL, "Down.jpg");
                        }, 1000);

                    }}
                >
                    Download Image
                </button>
                <Stage
                    width={600}
                    height={500}
                    style={{ border: '5px solid grey' }}
                    ref={stageRef}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                    onClick={(event) => {
                        if (event.target === stageRef.current) {
                            transformerRef.current.nodes([]);
                        }
                    }}
                >
                    <Layer style={{ innerWidth: "-50" }}>
                        {images.map((image) => {
                            return <URLImage image={image} />;
                        })}
                    </Layer>
                </Stage>
            </div>
        </div>
    )
}

export default DisplayApiData;