import React from "react";
import { useState } from "react";

const Contact=()=>{

    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""
    })

    const inputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preval)=>{
            return{
                ...preval,
                [name]:value,
            }
        })
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(
            `My name is ${data.fullname}. My mobile number is ${data.phone}. My email is ${data.email},Here is small I wnat to say ${data.msg}`
        )
    }





    return(<>
        <div className="my-5">
            <h1 className="text-center">Contact US</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                   <div class="mb-3">
                        <label for="exampleInput1" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="exampleInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your name" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInput1" class="form-label">Phome</label>
                        <input type="text" class="form-control" id="exampleInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter phone no." aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={data.email} onChange={inputEvent} placeholder="Enter email" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={inputEvent}></textarea>
                    </div>
                    <button type="submit" class="btn btn-outline-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>
    </>);
}

export default Contact;