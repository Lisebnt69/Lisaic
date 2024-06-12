import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import React from "react";
import Main from "./components/Main";

import './App.css';

function App() {
  const [page, setPage] = React.useState("dashboard");

  return (
    <Container>
      <aside>
        <Sidebar handleButtonClick={setPage} />
      </aside>
      <Main page={page} />
    </Container>
  );
}

export default App;
