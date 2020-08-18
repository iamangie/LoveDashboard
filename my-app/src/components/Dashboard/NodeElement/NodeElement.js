import React from "react";
import { Styles } from "../../../styles/styles";

const NodeElement = ({ x, y }) => {
  return (
    <Styles.Node>
      <div
        className="node"
        style={{
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
        }}
      ></div>
    </Styles.Node>
  );
};

export default NodeElement;
