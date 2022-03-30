import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "lightblue"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
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
export default function Account() {
    const classes = useStyles();
    const history = useHistory();
    const classes1 = useStyles1();
    return (
        <div className={classes.root} style={{ marginTop: "50px", marginLeft: "20px", marginRight: "20px" }}>

            <Grid container spacing={3} style={{ marginLeft: "10px" }}>
                <Grid item xs style={{ height: window.height }}>
                    <Paper className={classes.paper} style={{ height: "700px", paddingLeft: "10px" }}>

                        <div className={classes.rootb} style={{ paddingLeft: "20px" }}>

                            <ButtonGroup
                                orientation="vertical"
                                color="skyblue"
                                aria-label="vertical contained primary button group"
                                variant="text"

                            >
                                <Button style={{ color: "blue", height: "50px", width: "200px" }}>
                                    <BusinessCenterIcon />
                                    My Business</Button>
                                <Button style={{ color: "red" }}>Logout<ExitToAppOutlinedIcon /></Button>

                            </ButtonGroup>
                        </div>
                    </Paper>

                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Card className={classes1.root}>
                            <CardHeader
                                avatar={
                                    <img height="100" width="100"
                                        src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Book-icon-bible.png" />
                                }
                                action={
                                    <IconButton aria-label="settings" onClick={() => history.push('/Edit')} >
                                        Edit
                                    </IconButton>
                                }
                                title="OceanmTech"
                                subheader={<><Typography color="textSecondary" >
                                    Marketing & Advertising
                                </Typography>
                                    <Typography color="textSecondary" >
                                        <FmdGoodIcon />    4012,The Palladium Mall,Near Dhiraj Sons,Yogichowk,Punagam ,Surat-395010"
                                    </Typography></>}
                            />

                        </Card><br />
                        <Card className={classes1.root} style={{ textAlign: "center", backgroundColor: "lightgrey" }}>
                            <CardActionArea>
                                <CardContent>

                                    <Typography variant="body2" component="p" >
                                        <span style={{ color: "red" }}> You haven't selected any plan yet!</span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ marginLeft: "200px", marginBottom: "10px", marginTop: "-10px" }}>
                                <Button variant="contained" color="primary">
                                    Choose Plan
                                </Button>
                            </CardActions>
                        </Card>
                    </Paper><br />
                    <Paper className={classes.paper}>
                        <Card className={classes1.root}>
                            <CardHeader
                                avatar={
                                    <img height="100" width="100"
                                        src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Book-icon-bible.png" />
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        Edit
                                    </IconButton>
                                }
                                title="Ambtech Mutlitrade PVT LTD"
                                subheader={<><Typography color="textSecondary" >
                                    Advocate
                                </Typography>
                                    <Typography color="textSecondary" >
                                        <FmdGoodIcon />  </Typography></>}
                            />

                        </Card><br />
                        <Card className={classes1.root} style={{ textAlign: "center", backgroundColor: "lightgrey" }}>
                            <CardActionArea>
                                <CardContent>

                                    <Typography variant="body2" component="p" >
                                        <span style={{ color: "red" }}> You haven't selected any plan yet!</span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ marginLeft: "200px", marginBottom: "10px", marginTop: "-10px" }}>
                                <Button variant="contained" color="primary">
                                    Choose Plan
                                </Button>
                            </CardActions>
                        </Card>
                    </Paper><br />
                    <Paper className={classes.paper}>
                        <Card className={classes1.root}>
                            <CardHeader
                                avatar={
                                    <img height="100" width="100"
                                        src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Book-icon-bible.png" />
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        Edit
                                    </IconButton>
                                }
                                title="OceanmTech"
                                subheader={<><Typography color="textSecondary" >
                                    Marketing & Advertising
                                </Typography>
                                    <Typography color="textSecondary" >
                                        <FmdGoodIcon />   4012,The Palladium Mall,Near Dhiraj Sons,Yogichowk,Punagam ,Surat-395010"
                                    </Typography></>}
                            />

                        </Card><br />
                        <Card className={classes1.root} style={{ textAlign: "center", backgroundColor: "lightgrey" }}>
                            <CardActionArea>
                                <CardContent>

                                    <Typography variant="body2" component="p" >
                                        <span style={{ color: "red" }}> You haven't selected any plan yet!</span>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ marginLeft: "200px", marginBottom: "10px", marginTop: "-10px" }}>
                                <Button variant="contained" color="primary">
                                    Choose Plan
                                </Button>
                            </CardActions>
                        </Card></Paper><br />

                </Grid>
                <Grid item xs>

                </Grid>
            </Grid>
        </div >
    );
}
