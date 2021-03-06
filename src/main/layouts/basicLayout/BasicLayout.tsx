import { makeStyles } from "@material-ui/core";
import React from "react";
import BasicLayoutHeaderNav from "./BasicLayoutHeaderNav";
import BasicLayoutSkillsSection from "./BasicLayoutSkillsSection";

const headerNavBarHeight = "50px";
const styles = makeStyles({
  headerNavBar: {
    borderBottom: "1px black solid",
    height: headerNavBarHeight,
  },
  introduction: {
    borderBottom: "1px black solid",
    height: `calc(100vh - ${headerNavBarHeight})`,
  },
  skills: {
    borderBottom: "1px black solid",
    height: "100vh",
  },
  projects: {
    borderBottom: "1px black solid",
    height: "100vh",
  },
  socialMedia: {
    borderBottom: "1px black solid",
    height: "100vh",
  },
});

const BasicLayout = () => {
  const classes = styles();

  return (
    <div>
      <div className={classes.headerNavBar} id="headerNavBar">
        <BasicLayoutHeaderNav />
      </div>
      <div className={classes.introduction} id="introduction">
        This is introduction
      </div>
      <div className={classes.skills} id="skills">
        <BasicLayoutSkillsSection />
      </div>
      <div className={classes.projects} id="projects">
        This is projects section
      </div>
      <div className={classes.socialMedia} id="socialMedia">
        This is social media section
      </div>
    </div>
  );
};

export default BasicLayout;
