import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const submitURL =
  "https://script.google.com/macros/s/AKfycbwjbT_B94deK2f766IkAEpp2XIkPf83ld1GQ05QNVu_gWCVBMCG/exec";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 60,
    paddingBottom: 60,
    marginTop: 120,
    background: theme.palette.contact.bg
  },
  header: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    textAlign: "center",
    color: theme.palette.txt.title
  },
  body: {
    color: theme.palette.txt.body,
    marginTop: 5,
    textAlign: "center",
    marginBottom: 10,
    fontSize: "1.2rem"
  },
  inputContainer: {
    padding: 20
  },
  input: {
    color: theme.palette.txt.title,
    "& .MuiFormLabel-root": { color: theme.palette.txt.title },
    "& .MuiInputBase-input": { color: theme.palette.txt.body }
  },
  buttonContainer: { textAlign: "center", marginTop: 20 },
  button: {
    color: theme.palette.txt.body,
    borderColor: theme.palette.txt.body,
    "&:hover": {
      color: "#fff",
      background: theme.palette.secondary.main,
      borderColor: "#0000"
    }
  },
  "@media (max-width:  600px)": {
    body: {
      fontSize: "1rem"
    }
  },
  "@media (max-width:  730px)": {
    hide: {
      display: "none"
    }
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const handleMailChange = ({ currentTarget }) => {
    const mail = currentTarget.value;
    setemail(mail);
    console.log(currentTarget.value);
  };

  const handleNameChange = ({ currentTarget }) => {
    const name = currentTarget.value;
    setname(name);
    console.log(currentTarget.value);
  };
  const handleMessageChange = ({ currentTarget }) => {
    const message = currentTarget.value;
    setmessage(message);
    console.log(currentTarget.value);
  };

  const submitForm = () => {
    const url = `${submitURL}?callback=ctrlq&name=${name}&email=${email}&message=${message}&date=${new Date()}`;

    fetch(url, { method: "POST", mode: "no-cors" })
      .then(response => {
        console.log("Success!", response);
      })
      .catch(error => console.error("Error!", error.message));
  };

  return (
    <div id="contact" className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h1" gutterBottom className={classes.header}>
          Get in touch
        </Typography>
        <Typography variant="h2" gutterBottom className={classes.body}>
          I am interested in freelance opportunities, espacially ambitious or
          large projects.
          <span className={classes.hide}>
            <br />
          </span>{" "}
          However, if you have other request or question. don't hesitate to
          contact me.
        </Typography>

        <form action="https://formspree.io/xqkypgqe" method="POST">
          <Grid justify="center" container>
            <Grid className={classes.inputContainer} item xs={12} md={6}>
              <TextField
                value={name}
                onChange={handleNameChange}
                name="Name"
                className={classes.input}
                fullWidth
                label="name"
                placeholder="enter your name"
              />
            </Grid>
            <Grid className={classes.inputContainer} item xs={12} md={6}>
              <TextField
                onChange={handleMailChange}
                value={email}
                name="Email"
                className={classes.input}
                fullWidth
                label="Email"
                placeholder="enter your E-Mail"
              />
            </Grid>
            <Grid className={classes.inputContainer} item xs={12}>
              <TextField
                value={message}
                onChange={handleMessageChange}
                name="message"
                className={classes.input}
                fullWidth
                multiline={true}
                rows={4}
                label="Message"
                placeholder="enter your Message"
              />
            </Grid>
            <Grid className={classes.buttonContainer} item xs={5} lg={3} md={4}>
              <Button
                onClick={submitForm}
                fullWidth
                className={classes.button}
                variant="outlined"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
