import React, { useState } from "react";
import validator from "validator";
import axios from "axios";

function Contact(){

    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [message, setMessage] = useState("");
    var [warning, setWarning] = useState("");
    var [success, setSuccess] = useState("");

    function contact(){
        if(name===""){
            setWarning("* warning: Name field cannot be empty.");
        }
        else if(email===""){
            setWarning("* warning: Email field cannot be empty.");
        }
        else if(message===""){
            setWarning("* warning: Message field cannot be empty.");
        }
        else if(!(validator.isEmail(email))){
            setWarning("* warning: Invalid Email address");
        }
        else{
            setMessage("");
            setName("");
            setEmail("");
            setSuccess("Message Sent!")
        }
    }

    return(
        <div className="contact">
            <h1>Contact Us</h1>
            <h4>{success}</h4>
            <div className="contactForm">
                <input type="text" onChange={(e)=>{setName(e.target.value); setSuccess(""); setWarning("")}} value={name} placeholder="Your name" /><br />
                <input type="text" onChange={(e)=>{setEmail(e.target.value); setSuccess(""); setWarning("")}} value={email} placeholder="Your Email Address" /><br />
                <textarea rows="5" onChange={(e)=>{setMessage(e.target.value); setSuccess(""); setWarning("")}} value={message} placeholder="Your message"></textarea><br />
                <div  className="contactWarning">
                    <sub>{warning}</sub>
                </div>
                <button onClick={contact}>Send</button>
            </div>
        </div>
    );
}

export default Contact;