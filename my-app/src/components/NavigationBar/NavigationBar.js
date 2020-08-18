import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { Styles } from "../../styles/styles";

const NavigationBar = (props) => {
  return (
    <Styles.Navbar>
      <Navbar bg="light" expand="lg">
        <Navbar.Text>Love Dashboard</Navbar.Text>
        <Button onClick={props.toggleSidebar} variant="outline-secondary">
          Add love
        </Button>
      </Navbar>
    </Styles.Navbar>
  );
};

export default NavigationBar;
