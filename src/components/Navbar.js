import React from 'react';
import styled from "styled-components";
import photo from "./lisaic.jpg"
import LinkButton from './LinkButton';


const Img = styled.img`
width: 50%;
border-radius:100%;
border:2px solid white;
margin:5%;

`;

  
  const Navbar = (props) => {
    return (
      <Container>
          <Img src={photo}></Img>
        <LinkButton maSuperFunction={() => props.handleButtonClick("home")}>
          Accueil
        </LinkButton>
  
        <LinkButton maSuperFunction={() => props.handleButtonClick("histoire")}>
          Notre Histoire
        </LinkButton>
  
        <LinkButton maSuperFunction={() => props.handleButtonClick("menu")}>
          Menu
        </LinkButton>
        <LinkButton maSuperFunction={() => props.handleButtonClick("contact")}>
          Contact
        </LinkButton>
      </Container>
    );
  };
  
  export default Navbar;
  
  const Container = styled.div`
    width:30%;
    background-color: white;
    overflow: hidden;
    
  `;
  
  
  