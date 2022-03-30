import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image, Transformer } from "react-konva";
import AdImage from "./Image";
import { MDBInput, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";
import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import TextDisplay from "./Text";
import MobileDisplay from "./Mobile";
import EmailDisplay from "./Email";
import WebDisplay from "./Web";
import AdrsDisplay from "./Adrs";
import four from './Image/01.svg'
import second from './Image/02.svg'
import third from './Image/03.svg'
import first from './Image/04.svg'
import fifth from './Image/05.svg'
import useImage from 'use-image';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const FirstImage = () => {
  const [image] = useImage(fifth);
  return <Image image={image} x={30} y={30} width={550} height={550} />;
};
const SecondImage = () => {
  const [image] = useImage(first);
  return <Image image={image} x={30} y={30} width={550} height={550} />;
};
const ThirdImage = () => {
  const [image] = useImage(third);
  return <Image image={image} x={30} y={30} width={550} height={550} />;
};
const FourImage = () => {
  const [image] = useImage(four);
  return <Image image={image} x={30} y={30} width={550} height={550} />;
};
const FifthImage = () => {
  const [image] = useImage(second);
  return <Image image={image} x={30} y={30} width={550} height={550} />;
};

const App = () => {
  const layerRef = React.useRef();
  const itemRef = React.useRef();
  const activeRef = React.useRef();
  const stageRef = React.useRef();
  const stageRef2 = React.useRef();
  const stageRef3 = React.useRef();
  const stageRef4 = React.useRef();
  const stageRef5 = React.useRef();
  const [images, setImages] = React.useState([]);
  const [selectedId, setSelectedId] = React.useState(null);

  const backgroundRef = React.useRef();
  const transformerRef = useRef();
  const transformerRef2 = useRef();
  const [texts, setTexts] = React.useState([]);

  const [img, setImg] = useState([])
  const [mno, setBMno] = useState([]);
  const [email, setEmail] = useState([]);
  const [web, setWeb] = useState([]);
  const [addr, setAddr] = useState([]);
  const [city, setCity] = useState("");


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
          if (child.className === "Text") {
            texts = [...texts, child.attrs];
          }
        });
      });

      setImages(images);
      setTexts(texts);
      setBMno(mno);
      setEmail(email);
      setWeb(web);
      setAddr(addr);
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

  const imgHandler = (e) => {
    //  console.log(e.target.files)
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      console.log(fileArray);
      setImg((prevImages) => prevImages.concat(fileArray))
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))
    }
  }
  const photos = (source) => {
    return source.map((photo) => {
      return <img src={photo} key={photo} width={100} />
    })
  }
  return (
    <Flex h="100vh">
      <Flex flexDir="column">
      
        <Flex justifyContent="space-between">
          <Flex flexGrow={1}>
            <Box>
              <Box p="20px" paddingBottom="0">
                <Box fontSize="20px" fontWeight="bold">
                  Business Details
                </Box>
              </Box>
              <SimpleGrid
                p="20px"
                spacing="3"
                columns={2}
                bgColor="sky"
                
                flexDir="row"
                alignItems="center"
              >

                <MDBInput type="file" id="file" onChange={imgHandler} />
                <div className="result" onClick={(e) => {
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
                }}>
                  {photos(img)}
                </div>
                <div>
                  Business Name
                  <MDBInput name="name" type="text"
                    onChange={(e) => {
                      itemRef.current = {
                        type: "text",
                        text: e.target.value
                      };
                      const hash = btoa(Math.random()).substr(10, 5);
                      stageRef.current.setPointersPositions(e);
                      const item = {
                        ...stageRef.current.getPointerPosition(),
                        ...itemRef.current,
                        hash
                      };
                      if (itemRef.current.type === "text") {
                        setTexts((texts) => [...texts, item]);
                      }
                    }} />
                  <br />
                  Mobile Number
                  <MDBInput name="mno" type="number"
                    onChange={(e) => {
                      itemRef.current = {
                        type: "text",
                        text: e.target.value
                      };
                      const hash = btoa(Math.random()).substr(10, 5);
                      stageRef.current.setPointersPositions(e);
                      const item = {
                        ...stageRef.current.getPointerPosition(),
                        ...itemRef.current,
                        hash
                      };
                      if (itemRef.current.type === "text") {
                        setBMno((mno) => [...mno, item]);
                      }
                    }} />
                  <br />
                  Email
                  <MDBInput name="email" type="text"
                    onChange={(e) => {
                      itemRef.current = {
                        type: "text",
                        text: e.target.value
                      };
                      const hash = btoa(Math.random()).substr(10, 5);
                      stageRef.current.setPointersPositions(e);
                      const item = {
                        ...stageRef.current.getPointerPosition(),
                        ...itemRef.current,
                        hash
                      };
                      if (itemRef.current.type === "text") {
                        setEmail((email) => [...email, item]);
                      }
                    }} />
                  <br />
                  Website

                  <MDBInput name="web" type="text"
                    onChange={(e) => {
                      itemRef.current = {
                        type: "text",
                        text: e.target.value
                      };
                      const hash = btoa(Math.random()).substr(10, 5);
                      stageRef.current.setPointersPositions(e);
                      const item = {
                        ...stageRef.current.getPointerPosition(),
                        ...itemRef.current,
                        hash
                      };
                      if (itemRef.current.type === "text") {
                        setWeb((web) => [...web, item]);
                      }
                    }} />
                  <br />
                  Address
                  <MDBTextArea name="addr" type="text"
                    onChange={(e) => {
                      itemRef.current = {
                        type: "text",
                        text: e.target.value
                      };
                      const hash = btoa(Math.random()).substr(10, 5);
                      stageRef.current.setPointersPositions(e);
                      const item = {
                        ...stageRef.current.getPointerPosition(),
                        ...itemRef.current,
                        hash
                      };
                      if (itemRef.current.type === "text") {
                        setAddr((addr) => [...addr, item]);
                      }
                    }} />
                  <br />
                  City

                  <MDBInput name="ct" type="text"
                    onChange={(e) => { console.log("Name", e.target.value) }} />
                  <br />
                  <div className="col-12">
                    <MDBBtn style={{ marginRight: "60px" }} type="submit">Next </MDBBtn>

                  </div>                </div>
              </SimpleGrid>
            </Box>

          </Flex>
        </Flex>
      </Flex>

      <Flex
        borderLeft="1px solid #CCC"
        width="700px"
        height="700px"
        bgColor="white"
        flexDir="column" >
        <div className="slide-container">
          <Fade>
            <div>
              <Box id="container" >
                <Button
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
                  height={600}
                  width={600}
                  style={{ paddingLeft: "50px" }}
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
                    {texts.map((text, index) => {
                      return (
                        <TextDisplay
                          key={`text-${index}`}
                          text={text}
                          stageRef={stageRef}
                          layerRef={layerRef}
                        />
                      );
                    })}
                    {mno.map((text, index) => {
                      return (
                        <MobileDisplay
                          key={`text-${index}`}
                          text={text}
                          stageRef={stageRef}
                          layerRef={layerRef}
                          name="First"
                        />
                      );
                    })}
                    {email.map((text, index) => {
                      return (
                        <EmailDisplay
                          key={`text-${index}`}
                          text={text}
                          name="First"
                          stageRef={stageRef}
                          layerRef={layerRef}
                        />
                      );
                    })}
                    {web.map((text, index) => {
                      return (
                        <WebDisplay
                          key={`text-${index}`}
                          text={text}
                          name="First"
                          stageRef={stageRef}
                          layerRef={layerRef}
                        />
                      );
                    })}
                    {addr.map((text, index) => {
                      return (
                        <AdrsDisplay
                          key={`text-${index}`}
                          text={text}
                          name="First"
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
                <Button
                  onClick={() => {

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
                  height={600}
                  width={600}
                  style={{ paddingLeft: "50px" }}
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
                    {texts.map((text, index) => {
                      return (
                        <TextDisplay
                          key={`text-${index}`}
                          text={text}
                          stageRef={stageRef2}
                        />
                      );
                    })}
                    {mno.map((text, index) => {
                      return (
                        <MobileDisplay
                          key={`text-${index}`}
                          text={text}
                          stageRef={stageRef2}
                          layerRef={layerRef}
                          name="second"
                        />
                      );
                    })}
                    {email.map((text, index) => {
                      return (
                        <EmailDisplay
                          key={`text-${index}`}
                          text={text}
                          name="second"
                          stageRef={stageRef2}
                          layerRef={layerRef}

                        />
                      );
                    })}
                    {web.map((text, index) => {
                      return (
                        <WebDisplay
                          key={`text-${index}`}
                          text={text}
                          name="second"
                          stageRef={stageRef2}
                          layerRef={layerRef}
                        />
                      );
                    })}
                    {addr.map((text, index) => {
                      return (
                        <AdrsDisplay
                          key={`text-${index}`}
                          text={text}
                          name="second"
                          stageRef={stageRef2}
                          layerRef={layerRef}
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
                <Button
                  onClick={() => {

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
                  height={600}
                  width={600}
                  style={{ paddingLeft: "50px" }}
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
                    {texts.map((text, index) => {
                      return (
                        <TextDisplay
                          key={`text-${index}`}
                          text={text}
                          stageRef={stageRef3}

                        />
                      );
                    })}
                    {mno.map((text, index) => {
                      return (
                        <MobileDisplay
                          key={`text-${index}`}
                          text={text}
                          name="third"
                          stageRef={stageRef3}
                          layerRef={layerRef}
                        />
                      );
                    })}
                    {email.map((text, index) => {
                      return (
                        <EmailDisplay
                          key={`text-${index}`}
                          text={text}
                          name="third"
                          stageRef={stageRef3}
                          layerRef={layerRef}
                        />
                      );
                    })}
                    {web.map((text, index) => {
                      return (
                        <WebDisplay
                          key={`text-${index}`}
                          text={text}
                          name="third"
                          stageRef={stageRef3}
                          layerRef={layerRef}
                        />
                      );
                    })}
                    {addr.map((text, index) => {
                      return (
                        <AdrsDisplay
                          key={`text-${index}`}
                          text={text}
                          name="third"
                          stageRef={stageRef3}
                          layerRef={layerRef}
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
                <Button
                  onClick={() => {

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
                  height={600}
                  width={600}
                  style={{ paddingLeft: "50px" }}
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
                    {texts.map((text, index) => {
                      return (
                        <TextDisplay
                          key={`text-${index}`}
                          text={text}
                          stageRef={stageRef4}

                        />
                      );
                    })}
                    {mno.map((text, index) => {
                      return (
                        <MobileDisplay
                          key={`text-${index}`}
                          text={text}
                          name="four"
                          stageRef={stageRef4}
                          layerRef={layerRef}
                        />
                      );
                    })}
                    {email.map((text, index) => {
                      return (
                        <EmailDisplay
                          key={`text-${index}`}
                          text={text}
                          name="four"
                          stageRef={stageRef4}
                          layerRef={layerRef}
                        />
                      );
                    })}
                    {web.map((text, index) => {
                      return (
                        <WebDisplay
                          key={`text-${index}`}
                          text={text}
                          name="four"
                          stageRef={stageRef4}
                          layerRef={layerRef}
                        />
                      );
                    })}
                    {addr.map((text, index) => {
                      return (
                        <AdrsDisplay
                          key={`text-${index}`}
                          text={text}
                          name="four"
                          stageRef={stageRef4}
                          layerRef={layerRef}
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
                <Button
                  onClick={() => {

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
                  height={600}
                  width={600}
                  style={{ paddingLeft: "50px" }}
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
                    {texts.map((text, index) => {
                      return (
                        <TextDisplay
                          key={`text-${index}`}
                          text={text}
                          stageRef={stageRef5}
                        />
                      );
                    })}
                    {mno.map((text, index) => {
                      return (
                        <MobileDisplay
                          key={`text-${index}`}
                          text={text}
                          name="five"
                          stageRef={stageRef5}
                          layerRef={layerRef}
                        />
                      );
                    })}
                    {email.map((text, index) => {
                      return (
                        <EmailDisplay
                          key={`text-${index}`}
                          text={text}
                          name="five"
                          stageRef={stageRef5}
                          layerRef={layerRef}
                        />
                      );
                    })}
                    {web.map((text, index) => {
                      return (
                        <WebDisplay
                          key={`text-${index}`}
                          text={text}
                          name="five"
                          stageRef={stageRef5}
                          layerRef={layerRef}
                        />
                      );
                    })}
                    {addr.map((text, index) => {
                      return (
                        <AdrsDisplay
                          key={`text-${index}`}
                          text={text}
                          name="five"
                          stageRef={stageRef5}
                          layerRef={layerRef}
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
  );
};

export default App;
