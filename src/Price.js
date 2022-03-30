import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Button } from "@mui/material";
import { Divider } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "lightblue"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    rootb: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const useStyles1 = makeStyles((theme) => ({
    root: {
        maxWidth: 645,
    },

}));

const Price = () => {
    const classes = useStyles();
    const classes1 = useStyles1();
    return (
        <div style={{ paddingTop: "50px", paddingLeft: "30px" }}>

            <Grid container spacing={3} style={{ marginLeft: "10px" }}>
                <Grid item xs={3} style={{ height: window.height }}>
                    <Paper className={classes.paper} sx={{ minWidth: 275 }} >
                        <Typography style={{ lineHeight: "1.5" }}>
                            <Button variant="text" size="large">Annual</Button>
                        </Typography>
                        <Typography variant="h5" component="div" style={{ lineHeight: "1.5" }}>
                            <CurrencyRupeeIcon/>2500
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ lineHeight: "2.5" }}>
                            <p>
                                <font color="red">
                                    Including GST (18% Discount)
                                    <br />
                                    Special 50% flat discount applied.
                                </font>
                            </p>

                        </Typography>
                        <Divider />
                        <Typography variant="body2" style={{ lineHeight: "2.5", textAlign:"left" }}>
                          <DoneIcon style={{color:"blue" ,width:"30"}}/>  2 video pre festival
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/> 1 Video Per Day from daily Catagory
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/>  10 images per day from daily category
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/>   unlimited Custom Templates
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/> 10 Images from each festivals
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/> Daily 5 Business related images
                        </Typography>
                        <br />              
                        <Button variant="contained">Choose Plan</Button>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} sx={{ minWidth: 275 }} >
                        <Typography style={{ lineHeight: "1.5" }}>
                            <Button variant="text" size="large">Monthly</Button>
                        </Typography>
                        <Typography variant="h5" component="div" style={{ lineHeight: "1.5" }}>
                        <CurrencyRupeeIcon/>699/Month
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ lineHeight: "2.5" }}>
                            Video Features is included
                        </Typography>
                        <Divider />
                        <Typography variant="body2" style={{ lineHeight: "2.5" , textAlign:"left"}}>
                        <DoneIcon style={{color:"blue" ,width:"30"}}/>     1 video pre festival
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/>   1 Video Per Day from daily Catagory
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/>   Daily Images
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/>   Custom Templates
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/>  5 Images from each festivals
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/> 10 Images per Day from daily category
                        </Typography>
                        <br />
                        <Button variant="contained">Choose Plan</Button>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper} sx={{ minWidth: 275 }} >
                        <Typography style={{ lineHeight: "1.5" }}>
                            <Button variant="text" size="large">Monthly</Button>
                        </Typography>
                        <Typography variant="h5" component="div" style={{ lineHeight: "1.5" }}>
                        <CurrencyRupeeIcon/>399/Month
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ lineHeight: "2.5" }}>
                            Video Features is included
                        </Typography>
                        <Divider />
                        <Typography variant="body2" style={{ lineHeight: "2.5" , textAlign:"left" }}>
                        <DoneIcon style={{color:"blue" ,width:"30"}}/>   1 video pre festival
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/>     1 Video Per Day from daily Catagory
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/>   Daily Images
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/>    Custom Templates
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/>   5 Images from each festivals
                            <br />
                            <DoneIcon style={{color:"blue" ,width:"30"}}/> 10 Images per Day from daily category
                        </Typography>
                        <br />
                        <Button variant="contained">Choose Plan</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Price