import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  color: #ffffff;
  width: 500px;
  height: 500px;
`;

function App() {
  return (
    <>
      <body>
        <div className="container">
          <div className="status-container">
            <div className="group-bullet">
              <div className="bullet"></div>
              <p className="bullet-text">Test1</p>
            </div>
            <div className="group-bullet">
              <div className="bullet"></div>
              <p className="bullet-text">Test2</p>
            </div>
            <div className="group-bullet">
              <div className="bullet"></div>
              <p className="bullet-text">Test3</p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
