import Navbar from "./components/Navbar";
import styled from "styled-components";
import React from "react";
import Main from "./components/Main";
import './App.css';

function App() {
  const [page, setPage] = React.useState("dashboard");

  return (
    <Container>
      <Navbar handleButtonClick={setPage} />
      <Main page={page} />
    </Container>
  );
};

export default App;

  
  const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: black;
  overflow: hidden;

  & > aside {
    width: 336px;
  }

  & > main {
    flex-grow: 1;
    padding: 36px;
  }
`;
