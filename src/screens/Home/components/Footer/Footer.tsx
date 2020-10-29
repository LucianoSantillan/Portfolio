import React from 'react';
import './Footer.css';
import { IconButton, Link, makeStyles } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

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
    button: {
        margin: theme.spacing(1),
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <div style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            height: "100px",
            background: "#eeeeee",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: 10
        }}>
            <div style={{ width: "150px", display: "flex", justifyContent: "space-evenly" }}>
                <Link href="https://www.linkedin.com/in/luciano-santill%C3%A1n-b11ab4178/" color="inherit" target={"_blank"}>
                    <IconButton aria-label="delete" color="primary">
                        <LinkedInIcon />
                    </IconButton>
                </Link>
                <Link href="https://www.instagram.com/luciano.santillan.96/" color="inherit" target={"_blank"}>
                    <IconButton aria-label="delete" color="primary">
                        <InstagramIcon />
                    </IconButton>
                </Link>
                <Link href="https://github.com/LucianoSantillan" color="inherit" target={"_blank"}>
                    <IconButton aria-label="delete" color="primary">
                        <GitHubIcon />
                    </IconButton>
                </Link>
            </div>
            <div>© 2020 Luciano Santillán</div>
        </div>
    );
}

export default Footer;