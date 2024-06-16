import React from 'react';
import photo from './cafe.jpg'
import styled from 'styled-components';

const Home = () => {
  return (
    <section id="home" className="home">
      <h1>Bienvenue chez Lisaic</h1>
      <p>Le meilleur café de Lyon</p>
      <Img src={photo}></Img>
    </section>
  );
};


const Img = styled.img`
width: 25%;
border-radius:50%;
border:2px solid white;
margin:5%;
margin-left:40%

`;
export default Home;
