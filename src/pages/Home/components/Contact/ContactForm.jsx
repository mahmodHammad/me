import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FeedBack from "./FeedBack";

const submitURL =
  "https://script.google.com/macros/s/AKfycbwjbT_B94deK2f766IkAEpp2XIkPf83ld1GQ05QNVu_gWCVBMCG/exec";

const useStyles = makeStyles(theme => ({
  inputContainer: {
    padding: 20
  },
  input: {
    color: theme.palette.txt.title,
    "& .MuiFormLabel-root": { color: theme.palette.txt.title },
    "& .MuiInputBase-input": {
      color: theme.palette.txt.body
    },
    "& .MuiInput-underline:before": {
      borderBottom: `1px solid ${theme.palette.div.default}`
    }
  },
  buttonContainer: { textAlign: "center", marginTop: 20 },
  button: {
    color: theme.palette.txt.body,
    borderColor: theme.palette.txt.body,
    "&:hover": {
      color: "#000",
      fontWeight: "bold",
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
  const [errors, seterrors] = useState({});
  const [submitLoading, setsubmitLoading] = useState(0);
  const [success, setsuccess] = useState(undefined);

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validation = !re.test(String(email).toLowerCase());
    let err = { ...errors };
    err.Email = validation;
    seterrors(err);
  }
  function validateString(input, inputName) {
    const validation = String(input).trim().length < 2;
    let err = { ...errors };
    err[inputName] = validation;
    seterrors(err);
  }

  const handleMailChange = ({ currentTarget }) => {
    const mail = currentTarget.value;
    validateEmail(mail);
    setemail(mail);
  };

  const handleNameChange = ({ currentTarget }) => {
    const name = currentTarget.value;
    validateString(name, "Name");
    setname(name);
  };
  const handleMessageChange = ({ currentTarget }) => {
    const message = currentTarget.value;
    validateString(message, "Message");
    setmessage(message);
  };

  const validateSubmit = () => {
    let error = { status: false, message: "" };
    const AllErrors = Object.keys(errors);

    // check clicking on all fields
    if (AllErrors.length < 2) {
      error = { status: true, message: "Please fill All input fields" };
    } else {
      const RealErrors = AllErrors.filter(e => errors[e] === true);
      if (RealErrors.length > 0) {
        error = {
          status: true,
          message: `${String(AllErrors)} fields are not valid`
        };
      }
    }
    return error;
  };

  const submitForm = () => {
    const url = `${submitURL}?callback=ctrlq&name=${userName}&email=${email}&message=${message}&date=${new Date()}`;
    const validation = validateSubmit();
    if (validation.status === false) {
      setsubmitLoading(1);
      fetch(url, { method: "POST", mode: "no-cors" })
        .then(response => {
          setname("");
          setemail("");
          setmessage("");
          setsubmitLoading(0);
          setsuccess(1);
        })
        .catch(error => {
          setsuccess(
            "An error occured, please try again or contact me usgin other method"
          );
        });
    } else {
      setsuccess(validation.message);
    }
  };
  return (
    <form>
      <Grid justify="center" container>
        <Grid className={classes.inputContainer} item xs={12} md={6}>
          <TextField
            value={userName}
            onFocus={handleNameChange}
            onChange={handleNameChange}
            name="Name"
            className={classes.input}
            fullWidth
            label="Name"
            error={errors.Name}
            placeholder="Enter your name"
          />
        </Grid>
        <Grid className={classes.inputContainer} item xs={12} md={6}>
          <TextField
            value={email}
            onFocus={handleMailChange}
            onChange={handleMailChange}
            name="Email"
            className={classes.input}
            fullWidth
            label="Email"
            error={errors.Email}
            placeholder="Enter your Email"
          />
        </Grid>
        <Grid className={classes.inputContainer} item xs={12}>
          <TextField
            value={message}
            onFocus={handleMessageChange}
            onChange={handleMessageChange}
            name="message"
            className={classes.input}
            fullWidth
            multiline={true}
            rows={3}
            error={errors.Message}
            label="Message"
            placeholder="Enter your Message"
          />
        </Grid>
        <Grid className={classes.buttonContainer} item xs={5} lg={3} md={4}>
          <Button
            onClick={submitForm}
            fullWidth
            className={classes.button}
            variant="outlined"
            disabled={false}
          >
            {submitLoading ? "pending..." : "Submit"}
          </Button>
        </Grid>
        {success !== undefined ? (
          <FeedBack success={success} userName={userName} setsuccess={setsuccess} />
        ) : (
          <span></span>
        )}
      </Grid>
    </form>
  );
}
