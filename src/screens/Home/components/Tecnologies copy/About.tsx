import React from 'react';
import './About.css';
import { makeStyles } from '@material-ui/core';
import {grey} from '../../../../common/colors'

const useStyles = makeStyles(theme => ({
    circularProgress: {
        margin: "auto",
        position: "relative",
        background: "red",
        height: 20, 
        width: 20 
    }
}));

function CircularProgress(){
    const classes = useStyles();
    return(
        <div className={classes.circularProgress}></div>
    )
}

function About() {
    const classes = useStyles();
    return (
        <div style={{ display: "flex", width: "100%", flexWrap: "wrap", justifyContent: "space-evenly", backgroundColor: grey, padding: "50px 0" }}>
            <div style={{width:"100%"}}>
                <h2 style={{ width: "100%", justifySelf: "center", textAlign: "center", marginTop: 0 }}>Technologies</h2>
                <div style={{ display: "flex", flexWrap:"wrap" }}>
                    <div className="circular-progress html"></div>
                    <div className="circular-progress python"></div>
                    <div className="circular-progress js"></div>
                    <div className="circular-progress css"></div>
                    <div className="circular-progress react"></div>
                </div>
            </div>
        </div>
    );
}

export default About;