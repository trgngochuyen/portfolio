import { Avatar, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const styles = makeStyles({
  root: {
    backgroundColor: "#8ee7e6",
    //backgroundColor: "transparent",
  },
  upper: {
    backgroundColor: "#8ee7e6",
    height: "30vh",
  },
  lower: {
    backgroundColor: "#ffffff",
    height: "30vh",
  },
  curveText: {
    font: "70px Copperplate",
    transform: "uppercase",
  },
  icon: {
    "& >div": {
      backgroundColor: "#8ee7e6",
    },
  },
});
const Introduction = () => {
  const classes = styles();
  return (
    <div>
      <div className={clsx(classes.root, "flex justify-center item-center")}>
        <Avatar
          //   className={classes.icon}
          alt="Huyen"
          src="/static/images/avatar/huyenchibi.JPG"
        />
      </div>
      <div className={classes.upper}></div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            id="curve"
            fill="#8ee7e6"
            fill-opacity="1"
            d="M0,160L60,165.3C120,171,240,181,360,165.3C480,149,600,107,720,106.7C840,107,960,149,1080,186.7C1200,224,1320,256,1380,272L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
          <text x="25">
            <textPath
              xlinkHref="#curve"
              fill="#fff"
              className={classes.curveText}
            >
              Hello, I am Huyen.
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Introduction;
