import { makeStyles } from "@material-ui/core";
import React from "react";

const headerNavBarHeight = "50px";
const styles = makeStyles({
  root: { flex: "1 1 0px" },
  col: {
    border: "1px solid gray",
    flex: "1 1 0px",
  },
});

const BasicLayoutSkillsSection = () => {
  const classes = styles();

  return (
    <div className={"flex flex-col md:flex-row"}>
      <div className={classes.col} id="firstCol">
        Content
      </div>
      <div className={classes.col} id="secondCol">
        Content
      </div>
      <div className={classes.col} id="thirdCol">
        Content
      </div>
    </div>
  );
};

export default BasicLayoutSkillsSection;
