import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FeedBack from "./FeedBack"

const submitURL =
  "https://script.google.com/macros/s/AKfycbwjbT_B94deK2f766IkAEpp2XIkPf83ld1GQ05QNVu_gWCVBMCG/exec";

const useStyles = makeStyles(theme => ({
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
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const [userName, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [submitLoading, setsubmitLoading] = useState(0);
  const [success, setsuccess] = useState(undefined);

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
    const url = `${submitURL}?callback=ctrlq&name=${userName}&email=${email}&message=${message}&date=${new Date()}`;
    setsubmitLoading(1);
    fetch(url, { method: "POST", mode: "no-cors" })
      .then(response => {
        setname("");
        setemail("");
        setmessage("");
        setsubmitLoading(0);
        setsuccess(1);
        console.log("Success!", response);
      })
      .catch(error => {
        setsuccess(0);
        console.error("Error!", error.message);
      });
  };

  return (
    <form action="https://formspree.io/xqkypgqe" method="POST">
      <Grid justify="center" container>
        <Grid className={classes.inputContainer} item xs={12} md={6}>
          <TextField
            value={userName}
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
            {submitLoading ? "pending..." : "submit"}
          </Button>
          {console.log("name is" , userName)}
        </Grid>
        {success !== undefined ? (
          <FeedBack success={success} userName={userName}/>
        ) : (
          <span></span>
        )}
      </Grid>
    </form>
  );
}