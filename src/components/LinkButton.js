import styled from "styled-components";
import React from "react";

const LinkButton = (props) => {
  return (
    <Bouton onClick={props.maSuperFunction}>{props.children}</Bouton>
  );
};

export default LinkButton;


const Bouton = styled.button`color: white;
display: block;
background-color: gray;
width: 90%;
margin:40px;
margin-left:10px;
padding: 20px;
font-size: large;
border-radius: 14px;
border: none;
cursor: pointer;
transition: all 0.2s ease;
-webkit-box-shadow: 8px 14px 32px 5px rgba(0,0,0,0.49); 
box-shadow: 8px 14px 32px 5px rgba(0,0,0,0.49);

&:hover {
  background-color: rgb(0, 0, 0);
  font-weight: bolder;
};

`;
