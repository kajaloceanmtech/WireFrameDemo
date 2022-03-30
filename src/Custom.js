import React, { Fragment } from "react";
import { Chip } from '@mui/material';
import { Stack } from "@mui/material";
import { FormLabel } from "@material-ui/core";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import bir1 from "./Image/bir1.jpg"
import bir2 from "./Image/bir2.jpg"
import bir3 from "./Image/bir3.jpg"
import bir4 from "./Image/bir4.jpg"
import bir5 from "./Image/bir5.jpg"
import rep1 from "./Image/rep1.jpg"
import rep2 from "./Image/rep2.jpg"
import rep3 from "./Image/rep3.jpg"
import rep4 from "./Image/rep4.jpg"
import rep5 from "./Image/rep5.jpg"
import pro1 from "./Image/pro1.jpg"
import pro2 from "./Image/pro2.jpg"
import pro3 from "./Image/pro3.jpg"
import pro4 from "./Image/pro4.jpg"


const Custom = () => {
    const handleClick = () => {

    }
    const properties2 = {
        duration: 3000,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: false,
        indicators: true,
    };
    return (
        <div style={{ paddingTop: "15px", margingLeft: "50px", marginLeft: "50px" }}>
            <div >
                <Stack direction="row" spacing={2}>
                    <Chip label="Republic Day Special" component="a" href="#basic-chip" clickable color="primary" variant="outlined" />
                    <Chip label="Birthday Wishes" component="a" href="#basic-chip" clickable color="primary" variant="outlined" />
                    <Chip label="Product" component="a" href="#basic-chip" clickable color="primary" variant="outlined" />
                    <Chip label="New Arrivals" component="a" href="#basic-chip" clickable color="primary" variant="outlined" />
                    <Chip label="Product(Story)- A4" component="a" href="#basic-chip" clickable color="primary" variant="outlined" />
                    <Chip label="New Arrival(Story)-A4" component="a" href="#basic-chip" clickable color="primary" variant="outlined" />
                </Stack>
            </div>
            <div style={{ paddingTop: "25px", paddingLeft: "20px" }}>
                <FormLabel style={{ fontSize: "25" }}><strong>Republic Day Special</strong></FormLabel>
                <FormLabel style={{ fontSize: "25", paddingLeft: "1000px" }}><strong>See all</strong></FormLabel>

                <div style={{ paddingTop: "15px", paddingRight: "50px" }}>
                    <Slide{...properties2}>
                        <img src={rep1} height={150} width={230} />
                        <img src={rep2} height={150} width={230} />
                        <img src={rep3} height={150} width={230} />
                        <img src={rep4} height={150} width={230} />
                        <img src={rep5} height={150} width={230} />

                    </Slide>
                </div>
            </div>
            <div style={{ paddingTop: "25px", paddingLeft: "20px" }}>
                <FormLabel style={{ fontSize: "25" }}><strong>BirthDay Wishes</strong></FormLabel>
                <FormLabel style={{ fontSize: "25", paddingLeft: "1000px" }}><strong>See all</strong></FormLabel>
                <div style={{ paddingTop: "15px", paddingRight: "50px" }}>
                    <Slide{...properties2}>
                        <img src={bir5} height={150} width={230} />
                        <img src={bir4} height={150} width={230} />
                        <img src={bir3} height={150} width={230} />
                        <img src={bir2} height={150} width={230} />
                        <img src={bir1} height={150} width={230} />

                    </Slide>
                </div>
            </div>
            <div style={{ paddingTop: "25px", paddingLeft: "20px" }}>
                <FormLabel style={{ fontSize: "25" }}><strong>Product</strong></FormLabel>
                <FormLabel style={{ fontSize: "25", paddingLeft: "1000px" }}><strong>See all</strong></FormLabel>
                <div style={{ paddingTop: "15px", paddingRight: "50px" }}>
                    <Slide{...properties2}>
                        <img src={pro4} height={150} width={230} />
                        <img src={pro3} height={150} width={230} />
                        <img src={pro2} height={150} width={230} />
                        <img src={pro1} height={150} width={230} />

                    </Slide>
                </div>
            </div>
            <div style={{ paddingTop: "25px", paddingLeft: "20px" }}>
                <FormLabel style={{ fontSize: "25" }}><strong>New Arrivals</strong></FormLabel>
                <FormLabel style={{ fontSize: "25", paddingLeft: "1000px" }}><strong>See all</strong></FormLabel>
                <div style={{ paddingTop: "15px", paddingRight: "50px" }}>
                    <Slide{...properties2}>
                        <img src={bir5} height={150} width={230} />
                        <img src={bir4} height={150} width={230} />
                        <img src={bir3} height={150} width={230} />
                        <img src={bir2} height={150} width={230} />
                        <img src={bir1} height={150} width={230} />

                    </Slide>
                </div>
            </div>
        </div>

    )
}

export default Custom;