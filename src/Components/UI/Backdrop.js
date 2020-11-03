import React from "react";
import "./Backdrop.css";

const Backdrop = ({ classes, overlayHandler }) => {
  return <div className={classes} onClick={overlayHandler}></div>;
};

export default React.memo(Backdrop);
