import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import NavigationBar from "./components/NavigationBar/NavigationBar";

function App(props) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="app-wrapper">
      <NavigationBar toggleSidebar={toggleSidebar} />
      <Dashboard showSidebar={showSidebar} />
    </div>
  );
}

export default App;
