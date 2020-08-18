import styled from "styled-components";

const Dashboard = styled.div`
  .row {
    height: 100vh;
  }
  .col-sidebar {
    display: flex;
    justify-content: center;
    border-left: 2px solid #efefef;
  }
`;

const Navbar = styled.div`
  .navbar {
    background-color: #efefef;
    display: flex;
    justify-content: space-between;
  }

  .navbar-text {
    color: #7d7a77;
    margin: auto;

    &:hover {
      color: #565554;
    }
  }
`;

const Sidebar = styled.div`
  .sidebar {
    padding: 10px;
  }
  .btn-secondary,
  .save-btn,
  .delete-btn {
    margin-top: 25px;
    width: 100px;
  }
`;

const Node = styled.div`
  .node {
    width: 50px;
    height: 50px;
    background-color: red;
    transform: rotate(-45deg);
  }

  .node::before,
  .node::after {
    content: "";
    background-color: red;
    border-radius: 50%;
    height: 50px;
    position: absolute;
    width: 50px;
  }

  .node::before {
    top: -27px;
    left: 0;
  }

  .node::after {
    top: 0px;
    left: 27px;
  }
`;

export const Styles = {
  Dashboard,
  Navbar,
  Sidebar,
  Node,
};
