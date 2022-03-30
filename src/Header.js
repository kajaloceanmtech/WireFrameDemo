import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import FeedIcon from '@mui/icons-material/Feed';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useHistory } from 'react-router';
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,

    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },

    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },

}));


export default function Header() {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: "white" }} >

                    <Typography className={classes.title} variant="h6" noWrap>
                        <img height="50" width="50" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Book-icon-bible.png" />
                    </Typography>
                    <div className={classes.search}>
                        <span style={{ color: "blue" }}> Your Business </span> <br />
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button variant="outlined" size="small" color="primary"{...bindTrigger(popupState)}>
                                        OceanmTech <ArrowDownwardIcon />
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={popupState.close}>OceanmTech </MenuItem>
                                        <MenuItem onClick={popupState.close}>Ambtech Multitrade PVT LTD</MenuItem>
                                        <MenuItem onClick={popupState.close}>Tummy</MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </div>


                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>

                        <Button Icon size="small" style={{ marginRight: "10px", flexDirection: 'column' }} 
                      >
                            <FeedIcon />
                            Brand Feed
                        </Button>

                        <Button Icon size="small" style={{ marginRight: "10px", flexDirection: 'column' }}
                          onClick={()=>history.push('/Custom')} >
                            <FeedIcon />
                            Custom
                        </Button>
                        <Button Icon size="small" style={{ marginRight: "10px", flexDirection: 'column' }} 
                        onClick={()=>history.push('/Price')} >
                            <CloudDownloadIcon />
                            Pricing
                        </Button>
                        <Button Icon size="small" style={{ marginRight: "10px", width: "10px", flexDirection: 'column' }} >
                            <CloudDownloadIcon />
                            Download
                        </Button>
                        <Button Icon size="small" style={{ marginRight: "10px", flexDirection: 'column' }}
                        onClick={()=>history.push('/Account')}  >
                            <AccountCircle />
                            Account
                        </Button>

                    </div>
                    <Button variant="outlined" size="small" color="primary">About</Button>
                </Toolbar>
            </AppBar>

        </div >
    );
}
