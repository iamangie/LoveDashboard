import React from "react";
import { Button } from "react-bootstrap";
import { Styles } from "../../../styles/styles";

const Sidebar = (props) => {
  return (
    <Styles.Sidebar>
      <div className="sidebar">
        <Button onClick={props.placeNode} variant="secondary">
          Heart
        </Button>
        <div>
          <Button
            onClick={props.deleteNodes}
            className="delete-btn"
            variant="outline-danger"
          >
            DELETE
          </Button>
        </div>
        <div>
          <Button
            onClick={props.saveNodes}
            className="save-btn"
            variant="outline-success"
          >
            SAVE
          </Button>
        </div>
      </div>
    </Styles.Sidebar>
  );
};

export default Sidebar;
