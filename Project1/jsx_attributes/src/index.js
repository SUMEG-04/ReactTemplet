import React from 'react';
import ReactDom from 'react-dom';

const name="Sumeg";
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300";
const links="https://www.youtube.com";

ReactDom.render(
  <>
    <h1 contentEditable="true">My name is {name}</h1>
    <img src={img1} alt='randomImage'/>
    <a href={links}>
    <img src={img2} alt='randomImage'/>
    </a>
  </>,
  document.getElementById('root')
);