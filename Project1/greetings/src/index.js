import React from 'react';
import ReactDom from 'react-dom';
import "./App.css"

let currTime=new Date();
currTime=currTime.getHours();
let greeting='';
const cssStyle={
  
};
if(currTime>=1 && currTime<12){
  greeting='Good Morning';
  cssStyle.color='green';

} 
else if(currTime>=12 && currTime<19){
  greeting='Good Afternoon';
  cssStyle.color='orange';
}
else{
  greeting='Good Night';
  cssStyle.color='black';
}
ReactDom.render(
  <>
  <div>
  <h1>
  Hello! <span style={cssStyle}>{greeting}</span> 
  </h1>
  </div>
  </>,
  document.getElementById('root')
);