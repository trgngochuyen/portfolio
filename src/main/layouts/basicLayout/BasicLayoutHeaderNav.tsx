import { makeStyles } from "@material-ui/core";
import React from "react";

const headerNavBarHeight = "50px";
const styles = makeStyles({
  root: {},
  logo: {
    border: "1px black solid",
    height: headerNavBarHeight,
    minWidth: "50px",
    margin: "0 20px",
  },
  menu: {
    border: "1px black solid",
    height: headerNavBarHeight,
    margin: "0 20px",
    minWidth: "200px",
  },
});

const BasicLayoutHeaderNav = () => {
  const classes = styles();

  return (
    <div className={"flex justify-between"}>
      <div className={classes.logo} id="logo"></div>
      <div className={classes.menu} id="menu"></div>
    </div>
  );
};

export default BasicLayoutHeaderNav;
