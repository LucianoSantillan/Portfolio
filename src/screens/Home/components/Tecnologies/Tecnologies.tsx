import React from 'react';
import './Tecnologies.css';
//FRONTEND LOGOS
import html5Logo from '../../../../assets/images/html5.png'
import reactNativeLogo from '../../../../assets/images/react-native.png'
import css3Logo from '../../../../assets/images/css3-logo.png'
import reactLogo from '../../../../assets/images/react-logo.png'
import javascriptLogo from '../../../../assets/images/javascript-logo.png'
//BACKEND LOGOS
import gitLogo from '../../../../assets/images/git-logo.png'
import netCoreLogo from '../../../../assets/images/net-core-logo.png'
import cSharpLogo from '../../../../assets/images/cSharp-logo.png'
import sqlServerLogo from '../../../../assets/images/sql-server-logo.png'
import {grey} from '../../../../common/colors'

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    img: {
        width: 50,
        height: 50,
        objectFit: "cover",
        padding: 15
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    imagesContainer: { 
        padding: 10, 
        display: "flex", 
        justifyContent: "center", 
        flexWrap: "wrap"
    },
    title:{ 
        background: "#311b92", 
        textAlign: 'center', 
        padding: 5,
        fontWeight: 500
    },
    imagesAndTitleContainer:{
        width: '31%',
        margin: "0 10px", 
        borderRadius: "10px", 
        overflow: "hidden", 
        backgroundColor: "white" 
    }
}));

function Tecnologies() {
    const classes = useStyles();
    return (
        <div style={{ display: "flex", width: "100%", flexWrap: "wrap", justifyContent: "space-evenly", backgroundColor: grey, padding:"50px 0" }}>
            <h2 style={{ width: "100%", justifySelf: "center", textAlign: "center", marginTop: 0}}>Technologies</h2>
            <div className={classes.imagesAndTitleContainer}>
                <div className={classes.title}>Frontend</div>
                <div className={classes.imagesContainer}>
                    <img src={html5Logo} alt="" className={classes.img} />
                    <img src={reactNativeLogo} alt="" className={classes.img} />
                    <img src={css3Logo} alt="" className={classes.img} />
                    <img src={reactLogo} alt="" className={classes.img} />
                    <img src={javascriptLogo} alt="" className={classes.img} />
                </div>
            </div>
            <div className={classes.imagesAndTitleContainer}>
                <div className={classes.title}>Backend</div>
                <div className={classes.imagesContainer}>
                    <img src={netCoreLogo} alt="" className={classes.img} />
                    <img src={cSharpLogo} alt="" className={classes.img} />
                    <img src={sqlServerLogo} alt="" className={classes.img} />
                </div>
            </div>
            <div className={classes.imagesAndTitleContainer}>
                <div className={classes.title}>Others</div>
                <div className={classes.imagesContainer}>
                    <img src={gitLogo} alt="" className={classes.img} />
                </div>
            </div>
        </div>
    );
}

export default Tecnologies;