import React from "react";
import Sdata from '../Sdata';
import Card from "../Card";

const Services=(props)=>{
    return(<>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
            <div className="container-fluid mb-5">
                <div className="row gy-4">
                    {
                        Sdata.map((val,ind)=>{
                            return <Card key={ind}
                                imgsrc={val.imgsrc}
                                title={ind.title}
                             />
                        })
                    }
                </div>
            </div>
        </div>
    </>);
}

export default Services;