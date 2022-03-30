import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image, Transformer } from "react-konva";
import four from './Image/01.svg'
import second from './Image/02.svg'
import third from './Image/03.svg'
import first from './Image/04.svg'
import fifth from './Image/05.svg'
import { ImageList, ImageListItem } from "@mui/material";
import useImage from 'use-image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import AdImage from "./ImageBack";
import white from "./Image/white.jpg"
import TranslateIcon from '@mui/icons-material/Translate';
import pink from "./Image/pink.jpg"

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/react";

const FirstImage = () => {
    const [image] = useImage(fifth);
    return <Image image={image} x={30} y={30} width={480} height={480} />;
};
const SecondImage = () => {
    const [image] = useImage(first);
    return <Image image={image} x={30} y={30} width={480} height={480} />;
};
const ThirdImage = () => {
    const [image] = useImage(third);
    return <Image image={image} x={30} y={30} width={480} height={480} />;
};
const FourImage = () => {
    const [image] = useImage(four);
    return <Image image={image} x={30} y={30} width={480} height={480} />;
};
const FifthImage = () => {
    const [image] = useImage(second);
    return <Image image={image} x={30} y={30} width={480} height={480} />;
};
const itemData = [
    {
        img: white,
        title: "white"
    },

    {
        img: pink,
        title: "pink"
    }
    , {
        img: "https://tse1.mm.bing.net/th?id=OIP.K5uPcWiKHIXjDgp4A-YVfAHaEo&pid=Api&P=0&w=264&h=165",
        title: "red"
    },
    , {
        img: "https://tse1.mm.bing.net/th?id=OIP.Z1JYXd9_T7AvCea1EHRg2wHaE9&pid=Api&P=0&w=247&h=165",
        title: "red"
    }
    , {
        img: "https://tse1.mm.bing.net/th?id=OIP.cWxs8WqW5KatpeSdH4lgnQHaFR&pid=Api&P=0&w=231&h=164",
        title: "red"
    }
    , {
        img: "https://tse3.mm.bing.net/th?id=OIP.oU2mZpK6cjT2M_Nw34VkHQHaE7&pid=Api&P=0&w=275&h=183",
        title: "red"
    }
]
const BannerImage = () => {
    const layerRef = React.useRef();
    const itemRef = React.useRef();
    const activeRef = React.useRef();
    const stageRef = React.useRef();
    const stageRef2 = React.useRef();
    const stageRef3 = React.useRef();
    const stageRef4 = React.useRef();
    const stageRef5 = React.useRef();
    const transformerRef = useRef();
    const [images, setImages] = React.useState([]);
    useEffect(() => {
        const json = localStorage.getItem("designer");

        if (json) {
            const state = JSON.parse(json);
            const elements = JSON.parse(state);
            let images = [];
            let texts = [];

            elements.children.forEach((child) => {
                const layer = child.children;
                layer.forEach((child) => {
                    console.log(child);
                    if (child.className === "Image") {
                        const image = {
                            ...child.attrs,
                            src: child.attrs.imageUrl
                        };
                        images = [...images, image];
                    }

                });
            });

            setImages(images);

        }

    }, []);

    const downloadURI = (uri, name) => {
        const link = document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <Flex style={{ height: "700px", width: "1200px", marginLeft: "80px", marginTop: "10px" }} justifyContent="space-between">
                <Flex flexDir="column">
                    <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        bgColor="white"
                    >
                        <Box paddingLeft="80px">
                            <h2>Nana Fadnavis Punyatithi</h2>

                        </Box>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button variant="contained" {...bindTrigger(popupState)}>
                                       <TranslateIcon/>
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={popupState.close}>All </MenuItem>
                                        <MenuItem onClick={popupState.close}>English</MenuItem>
                                        <MenuItem onClick={popupState.close}>Hindi</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Flex flexGrow={1}>
                            <Box>

                                <SimpleGrid
                                    spacing="5"
                                    columns={2}
                                    flexDir="row"
                                    alignItems="center"
                                >
                                    <ImageList sx={{ width: 500, height: 350 }} cols={3} rowHeight={164}>
                                        {itemData.map((item) => (
                                            <ImageListItem key={item.img}>
                                                <img
                                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                    alt={item.title}
                                                    loading="lazy"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        itemRef.current = {
                                                            type: "image",
                                                            src: e.target.src
                                                        };
                                                        const hash = btoa(Math.random()).substr(10, 5);
                                                        stageRef.current.setPointersPositions(e);
                                                        const item = {
                                                            ...stageRef.current.getPointerPosition(),
                                                            ...itemRef.current,
                                                            hash
                                                        };
                                                        if (itemRef.current.type === "image") {
                                                            setImages((images) => [...images, item]);
                                                        }
                                                    }}
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>

                                </SimpleGrid>
                                <Box> <Center><Button style={{ color: "blue" }}>Load More</Button></Center></Box>
                            </Box>

                        </Flex>
                    </Flex>
                </Flex>

                <Flex

                    width="600px"
                    height="600px"
                    bgColor="white"
                    flexDir="column" >
                    <div className="slide-container">
                    <Center><h3><strong>Download Your Image</strong></h3></Center>
                        <Fade>
                            <div style={{ contentAlign: "center" }}>
                                <Box id="container">
                                   
                                    <Button style={{ marginLeft: "230px" }}
                                        onClick={() => {
                                            if (activeRef.current) {
                                                activeRef.current.setStroke("transparent");
                                                layerRef.current.draw();
                                            }
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
                                        Download
                                    </Button>
                                    <br />
                                    <Stage
                                        height={550}
                                        width={550}
                                        style={{ paddingLeft: "35px" }}
                                        ref={stageRef}
                                        onClick={(event) => {
                                            if (event.target === stageRef.current) {
                                                transformerRef.current.nodes([]);
                                            }
                                        }}
                                    >
                                        <Layer ref={layerRef}>
                                            {images.map((image, index) => {
                                                return (
                                                    <AdImage
                                                        key={`image-${index}`}
                                                        image={image}
                                                        stageRef={stageRef}
                                                        layerRef={layerRef}

                                                    />
                                                );
                                            })}
                                            <Transformer ref={transformerRef} />
                                            <FirstImage />
                                        </Layer>
                                    </Stage>
                                </Box>
                            </div><div>
                                <Box

                                    id="container"
                                >  
                                    <Button style={{ marginLeft: "230px" }} onClick={() => {

                                        setTimeout(() => {
                                            const dataURL = stageRef2.current.toDataURL({
                                                quality: 1,
                                                pixelRatio: 1,
                                                mimeType: "image/jpeg"
                                            });
                                            downloadURI(dataURL, "Down.jpg");
                                        }, 1000);
                                    }}
                                    >
                                        Download
                                    </Button>
                                    <br />
                                    <Stage
                                        height={550}
                                        width={550}
                                        style={{ paddingLeft: "35px" }}
                                        ref={stageRef2}
                                        onClick={(event) => {
                                            if (event.target === stageRef2.current) {
                                                transformerRef.current.nodes([]);
                                            }
                                        }}
                                    >
                                        <Layer ref={layerRef}>
                                            {images.map((image, index) => {
                                                return (
                                                    <AdImage
                                                        key={`image-${index}`}
                                                        image={image}
                                                        stageRef={stageRef2}
                                                    />
                                                );
                                            })}
                                            <Transformer ref={transformerRef} />
                                            <SecondImage />
                                        </Layer>
                                    </Stage>
                                </Box>
                            </div>
                            <div>
                                <Box

                                    id="container"
                                >  
                                    <Button style={{ marginLeft: "230px" }} onClick={() => {

                                        setTimeout(() => {
                                            const dataURL = stageRef3.current.toDataURL({
                                                quality: 1,
                                                pixelRatio: 1,
                                                mimeType: "image/jpeg"
                                            });
                                            downloadURI(dataURL, "Down.jpg");
                                        }, 1000);
                                    }}
                                    >
                                        Download
                                    </Button>
                                    <br />
                                    <Stage
                                        height={550}
                                        width={550}
                                        style={{ paddingLeft: "35px" }}
                                        ref={stageRef3}
                                        onClick={(event) => {
                                            if (event.target === stageRef3.current) {
                                                transformerRef.current.nodes([]);
                                            }
                                        }}
                                    >
                                        <Layer ref={layerRef}>
                                            {images.map((image, index) => {
                                                return (
                                                    <AdImage
                                                        key={`image-${index}`}
                                                        image={image}
                                                        stageRef={stageRef3}
                                                    />
                                                );
                                            })}
                                            <Transformer ref={transformerRef} />
                                            <ThirdImage />
                                        </Layer>
                                    </Stage>
                                </Box>
                            </div>
                            <div>
                                <Box

                                    id="container"
                                >  
                                    <Button style={{ marginLeft: "230px" }} onClick={() => {

                                        setTimeout(() => {
                                            const dataURL = stageRef4.current.toDataURL({
                                                quality: 1,
                                                pixelRatio: 1,
                                                mimeType: "image/jpeg"
                                            });
                                            downloadURI(dataURL, "Down.jpg");
                                        }, 1000);
                                    }}
                                    >
                                        Download
                                    </Button>
                                    <br />
                                    <Stage
                                        height={550}
                                        width={550}
                                        style={{ paddingLeft: "35px" }}
                                        ref={stageRef4}
                                        onClick={(event) => {
                                            if (event.target === stageRef4.current) {
                                                transformerRef.current.nodes([]);
                                            }
                                        }}
                                    >
                                        <Layer ref={layerRef}>
                                            {images.map((image, index) => {
                                                return (
                                                    <AdImage
                                                        key={`image-${index}`}
                                                        image={image}
                                                        stageRef={stageRef4}
                                                    />
                                                );
                                            })}
                                            <Transformer ref={transformerRef} />
                                            <FourImage />
                                        </Layer>
                                    </Stage>
                                </Box>
                            </div>
                            <div>
                                <Box

                                    id="container"
                                >  
                                    <Button style={{ marginLeft: "230px" }} onClick={() => {

                                        setTimeout(() => {
                                            const dataURL = stageRef5.current.toDataURL({
                                                quality: 1,
                                                pixelRatio: 1,
                                                mimeType: "image/jpeg"
                                            });
                                            downloadURI(dataURL, "Down.jpg");
                                        }, 1000);
                                    }}
                                    >
                                        Download
                                    </Button>
                                    <br />
                                    <Stage
                                        height={550}
                                        width={550}
                                        style={{ paddingLeft: "35px" }}
                                        ref={stageRef5}
                                        onClick={(event) => {
                                            if (event.target === stageRef5.current) {
                                                transformerRef.current.nodes([]);
                                            }
                                        }}
                                    >
                                        <Layer ref={layerRef}>
                                            {images.map((image, index) => {
                                                return (
                                                    <AdImage
                                                        key={`image-${index}`}
                                                        image={image}
                                                        stageRef={stageRef5}
                                                    />
                                                );
                                            })}
                                            <Transformer ref={transformerRef} />
                                            <FifthImage />
                                        </Layer>
                                    </Stage>
                                </Box>
                            </div>
                        </Fade>
                    </div>
                </Flex>
            </Flex>

        </>
    )
}
export default BannerImage;