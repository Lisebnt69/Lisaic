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

const Navbare = styled.nav`
background-color: black;
overflow: hidden;

`;
const NavListe = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
display: flex;
justify-content: space-around;
`;
const NavItem = styled.li`
float: left;
`;
const NavLogo = styled.li`
padding: 0;
margin: 0;
width:10%;
`;
const A = styled.a`
display: block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
&:hover {
background-color: cadetblue;
color: white;
border-radius:30%;

};
`;

  
  const Sidebar = (props) => {
    return (
      <Container>
        <User>
          <Img src={photo}></Img>
        </User>
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
  
  export default Sidebar;
  
  const Container = styled.div`
  
    background-color: black;
    overflow: hidden;
    
  `;
  
  
  
  const Bouton = styled.button`
  background-color:white;
  color:black;
  font-size: large;
  border-radius: 14px;
  margin-top:200px;
  margin-left:290px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  -webkit-box-shadow: 8px 14px 32px 5px rgba(0,0,0,0.49); 
  box-shadow: 8px 14px 32px 5px rgba(0,0,0,0.49);
  &:hover {
  color: white;
  background-color: black;
  };
  `;