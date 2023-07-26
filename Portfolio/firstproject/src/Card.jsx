import React from "react";
import web from "./images/img.jpeg";

const Card=(props)=>{
    return(<>
        <div className="col-10 mx-auto">
                        <div className="cl-md-4 col-10 mx-auto">
                        <div class="card" >
                            <img src={props.imgsrc} class="card-img-top" alt={props.imgsrc}/>
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">{props.title}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
    </>);
}

export default Card;