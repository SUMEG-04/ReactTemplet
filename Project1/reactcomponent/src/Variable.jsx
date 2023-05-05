import React from 'react';


function Variable(){
    var greetings="";
let currTime=new Date();
currTime=currTime.getHours();
const cssStyle={};

if(currTime>=1 && currTime<12){
    greetings="Good Morning";
    cssStyle.color='green';
}
else if(currTime>=13 && currTime<7){
    greetings="Good Afternoon";
    cssStyle.color='orange';
}
else{
    greetings="Good Night";
    cssStyle.color='blue';
}
return(
    <>
    <div>
    <h1>
    Hello! <span style={cssStyle}>{greetings}</span> 
    </h1>
    </div>
    </>
);
}

export default Variable;