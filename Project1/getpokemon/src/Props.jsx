import React from "react";
import CompA from "./CompA";
import CompB from "./CompB";

const Props=()=>{
    return(
        <>
            <div className="main_div">
            <div className="header">
                <div className="center_div">
                <CompA/>
                </div>
            </div>
            <div className="footer">
                <CompB/>
            </div>
            </div>
        </>
    )
}

export default Props;