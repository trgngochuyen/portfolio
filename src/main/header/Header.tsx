import { Avatar, Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <div className="flex flex-row justify-between">
      <Avatar alt="Natacha" src="/static/images/avatar/huyenchibi.JPG" />
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button onClick={() => history.push("/")}>Home</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
};

export default Header;
