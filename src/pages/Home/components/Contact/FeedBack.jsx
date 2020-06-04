import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
const useStyles = makeStyles(theme => ({
  success: {
    "& .MuiSnackbarContent-root": {
      background: "#4caf50",
      color: "#fff"
    }
  },
  failed: {
    "& .MuiSnackbarContent-root": {
      background: "#f44336",
      color: "#fff"
    }
  }
}));

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

export default function SimpleSnackbar({ success, userName, setsuccess }) {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  const handleClose = (event, reason) => {
    setsuccess(undefined)
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        onExited={handleClose}
        TransitionComponent={TransitionUp}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        className={success === 1 ? classes.success : classes.failed}
        message={
          success === 1
            ? `I got your message, Thank you  for getting in touch!`
            : success
        }
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
