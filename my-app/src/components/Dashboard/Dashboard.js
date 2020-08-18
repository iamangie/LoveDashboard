import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Styles } from "../../styles/styles";
import NodeElement from "./NodeElement/NodeElement";

const getBoundingClientRect = (element) => {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    width: rect.width,
    height: rect.height,
    x: rect.x,
    y: rect.y,
  };
};

const Dashboard = (props) => {
  const mainContentRef = React.createRef();

  const [nodes, setNodes] = useState([]);

  const [boxWidth, setBoxWidth] = useState(null);

  const [boxHeight, setBoxHeight] = useState(null);

  useEffect(() => {
    const boundingBox = getBoundingClientRect(mainContentRef.current);

    const { width, height } = boundingBox;

    setBoxWidth(width);
    setBoxHeight(height);
  }, [mainContentRef]);

  function placeNode() {
    const maxX = boxWidth - 100;
    const maxY = boxHeight - 100;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    if (!nodeIsOverlap(x, y)) {
      setNodes([...nodes, { x, y, id: +new Date() }]);
    }
  }

  function nodeIsOverlap(x, y) {
    const div = { x: 100, y: 100 };

    for (const node of nodes) {
      if (
        x > node.x - div.x &&
        x < node.x + div.x &&
        y > node.y - div.y &&
        y < node.y + div.y
      )
        return true;
    }
    return false;
  }

  const saveNodes = () => {
    localStorage.setItem("nodes", JSON.stringify(nodes));
  };

  useEffect(() => {
    const saved = localStorage.getItem("nodes") || [];
    setNodes(saved !== "" ? JSON.parse(saved) : "");
  }, []);

  const deleteNodes = () => {
    localStorage.removeItem("nodes");
    setNodes([]);
    localStorage.setItem("nodes", JSON.stringify(nodes));
    localStorage.getItem("nodes");
  };

  return (
    <Styles.Dashboard>
      <Container fluid>
        <Row>
          <Col ref={mainContentRef} className="cont">
            <div>
              {nodes.map((node) => {
                return <NodeElement key={node.id} x={node.x} y={node.y} />;
              })}
            </div>
          </Col>
          {props.showSidebar && (
            <Col className="col-sidebar" lg="2">
              <Sidebar
                placeNode={placeNode}
                saveNodes={saveNodes}
                deleteNodes={deleteNodes}
              />
            </Col>
          )}
        </Row>
      </Container>
    </Styles.Dashboard>
  );
};

export default Dashboard;
