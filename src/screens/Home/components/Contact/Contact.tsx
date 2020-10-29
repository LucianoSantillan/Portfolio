import React, { useState } from 'react';
import './Contact.css';
import { Button, Card, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core';
import { grey } from '../../../../common/colors'
import Axios from 'axios';


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


function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail() {
        Axios.post('https://localhost:44367/api/mail/send', {
            Name: name,
            Attachments: null,
            Email: email,
            Message: message,
        },
            {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const classes = useStyles();
    return (
        <div style={{ display: "flex", width: "100%", flexWrap: "wrap", justifyContent: "space-evenly", padding: "50px 0" }}>
            <h2 style={{ width: "100%", justifySelf: "center", textAlign: "center", marginRight: 0 }}>Contact</h2>
            <Card style={{ display: "flex", flexDirection: "column", padding: "15px"}}>
                <TextField
                    label={"Your name"}
                    style={{ margin: 5, width: 400 }}
                    variant="outlined"
                    onChange={(e) => { setName(e.target.value) }}
                />
                <TextField
                    label={"Your email"}
                    style={{ margin: 5, width: 400 }}
                    variant="outlined"
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Your message"
                    multiline
                    rows={8}
                    style={{ margin: 5, width: 400 }}
                    variant="outlined"
                    onChange={(e) => { setMessage(e.target.value) }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<SendIcon />}
                    onClick={sendEmail}
                >
                    Send
                 </Button>
            </Card>
        </div>
    );
}

export default Contact;