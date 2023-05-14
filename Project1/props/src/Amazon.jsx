import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

function Amazon(){
    return(
        <Card 
        key={Sdata[3].id}
        imgsrc={Sdata[3].imgsrc}  
        sname={Sdata[3].sname} 
        title={Sdata[3].title}
        link={Sdata[3].link} 
        />
      );
}

export default Amazon;