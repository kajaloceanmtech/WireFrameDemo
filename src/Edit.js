import React, { useState, useEffect, useRef } from "react";
import Grid from '@material-ui/core/Grid';
import { MDBInput, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from "@material-ui/core";
import FilledInput from '@material-ui/core/FilledInput';
import { FormLabel } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Stage, Layer, Image, Transformer } from "react-konva";
import AdImage from "./Image";
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
import { TextareaAutosize } from "@mui/material";
//import TextField from "material-ui/TextField/TextField";
import 'react-slideshow-image/dist/styles.css'

//import MDBInput from ""
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
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.primary,
        backgroundColor: 'sky'
    },
    rootb: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    inputfile: {
        /* visibility: hidden etc. wont work */
        width: '0.1px',
        height: '0.1px',
        opacity: '0',
        overflow: 'hidden',
        position: 'absolute',
        zIndex: '-1',

    },

}));

const Edit = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
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
            return <img src={photo} key={photo} width={60} height={60} />
        })
    }

    return (
        <div className={classes.root} style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}>

            <Grid container spacing={2} style={{ marginLeft: "10px", marginRight: "10px" }}>
                <Grid item xs={6} >
                    <Paper className={classes.paper} style={{ paddingLeft: "10px" }}>
                        <div>
                            <FormLabel><strong>Business Detail</strong></FormLabel>
                            <Card style={{ width: "610px", height: "80px", backgroundColor: "lightgrey", paddingBottom: "10px" }}>
                                <CardHeader
                                    avatar={
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
                                        }}>   {img.length > 0 ? photos(img) : (<img height="60" width="60"
                                            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Book-icon-bible.png" />)}
                                        </div>
                                    }

                                    title={<><input type="file" name="file" id="file" onChange={imgHandler} class={classes.inputfile} />
                                        <label for="file" style={{ marginBottom: "100px" }}>Change Logo</label>
                                    </>}
                                />

                            </Card>
                            <br />
                            <FormLabel>Business Name</FormLabel>
                            <FilledInput backgroundColor="skyblue" type="text" fullWidth="true"
                                name="name" onChange={(e) => {
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
                                }}></FilledInput>
                            <br /><br />
                            <FormLabel>Mobile Number</FormLabel>
                            <FilledInput color="primary" type="number" fullWidth="true" name="mno"
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
                                }} ></FilledInput>
                            <br /><br />
                            <FormLabel>Email Address</FormLabel>
                            <FilledInput color="primary" type="email" name="email" fullWidth="true"
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
                                }} ></FilledInput>
                            <br /><br />
                            <FormLabel>Website</FormLabel>
                            <FilledInput color="primary" name="web" type="text" fullWidth="true"
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
                                }}></FilledInput>
                            <br /><br />
                            <FormLabel>Address</FormLabel><br />
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={6}
                                style={{ width: "690px", backgroundColor: "lightblue" }}
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
                                }}

                            />

                            <br /><br />
                            <FormLabel>City</FormLabel>
                            <FilledInput color="primary" type="text" fullWidth="true" ></FilledInput>
                            <br /><br /><br />
                            <div style={{ color: "blue" }}>
                                <Button variant="contained" >Next</Button>
                            </div>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper} style={{ paddingLeft: "10px" }}>

                        <Stage
                            height={600}
                            width={600}
                            style={{ paddingTop: "-100px" }}
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
                        <div style={{ paddingLeft: "20px" }}>
                            <FormLabel style={{ fontSize: "25px" }}><strong>We Recommanded for you</strong></FormLabel><br />
                            <FormLabel>You can select upto 5 frames</FormLabel>
                            <div style={{ paddingTop: "20px", justifyContent: "space-around" }}>

                                <label for="myCheckbox1">
                                    <img src={first}
                                        width="80px" height="80px" />
                                </label>
                                <input type="checkbox" id="myCheckbox1" />

                                <label for="myCheckbox5">
                                    <img src={fifth}
                                        width="80px" height="80px" />
                                </label>
                                <input type="checkbox" id="myCheckbox5" />

                                <label for="myCheckbox4">
                                    <img src={second}
                                        width="80px" height="80px" />
                                </label>
                                <input type="checkbox" id="myCheckbox4" />

                                <label for="myCheckbox3">
                                    <img src={third}
                                        width="80px" height="80px" />
                                </label>
                                <input type="checkbox" id="myCheckbox3" />

                                <label for="myCheckbox2">
                                    <img src={four}
                                        width="80px" height="80px" />
                                </label>
                                <input type="checkbox" id="myCheckbox2" />
                            </div>
                        </div>
                        <div style={{ color: "blue", paddingTop: "20px", paddingLeft: "10px" }}>
                            <Button variant="contained" >Submit</Button>
                        </div>             </Paper>
                </Grid></Grid>

        </div>
    )
}

export default Edit;