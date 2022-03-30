import React, { useEffect, useRef,useState } from "react";
import ScrollStage from "./modules/setup";
// import { startAnimationLoop ,requestID} from "./Animate";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btnContainer:{

  },
  body:{
    overflow:"hidden",
    height:"100vh",
    width:"100vw",
    border:"1px solid red",
    background:"#555",
    display:"flex",
    alignItems:"center",
  }
}))
        

export default function Cat( ) {
  const classes = useStyles();
  const textInput = useRef(null);
  useEffect(() => {
    const canvasTarget = textInput.current;
    ScrollStage(canvasTarget)
    //   sceneSetup(canvasTarget);
    return () => {
      // Anything in here is fired on component unmount.
    //   window.cancelAnimationFrame(requestID);
          // controls.dispose();
  }
  },[]
    // window.cancelAnimationFrame(requestID)
  
  );

  return ( 
      <div ref={textInput} className={classes.btnContainer}>
      </div>  
     
  );
}