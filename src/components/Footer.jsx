import React, { useEffect, useState } from "react";
import validator from "validator";
import axios from "axios";

function Footer(){

    var [email, setEmail] = useState("");
    var [warning, setWarning] = useState("");
    var [year, setYear] = useState("");

    var date = new Date();

    useEffect(() => {
        setYear(date.getFullYear());
    });

    function subscribe(){
        console.log("I got clicked");
        
        if(email===""){
            setWarning("* warning: This field cannot be empty.");
        }
        else if(!(validator.isEmail(email))){
            setWarning("* warning: Invalid Email");
        }
        else if(validator.isEmail(email)){
            axios.post("http://localhost:5000/newletter", email)
            .then(function (response) {
            // handle success
            console.log(response);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .then(function () {
            // always executed
            });
        }
    }

    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 footerLeft">
                        <center>
                            <img src="assets/images/logo-white.jpg" alt="footerLogo" />
                            <p>Vestibulum sagittis, nisl nec pellentesque suscipit, arcu nisi maximus neque, vitae finibus erat odio eu lacus. Curabitur malesuada erat eros, quis dignissim dui accumsan id. Cras non imperdiet metus. Sed nec turpis nec.</p>
                        </center>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 footerRight">
                        <div className="container">
                            <div className="row newsletter">
                                <div className="col-lg-6 col-md-12 col-sm-12 newsHead">
                                    <h5>SIGN UP FOR OUR NEWSLETTER!</h5>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-7 newsIn">
                                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value); setWarning("")}} placeholder="Hello@percentech.com" />
                                    <sub style={{color: "#ff2b2b"}}>{warning}</sub>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-5 newsBut">
                                    <button onClick={subscribe}>Subscribe</button>
                                </div>
                            </div>
                            <div className="row footerBot">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <h5>INFORMATION</h5>
                                    <a href="#"><i className="fas fa-caret-right"></i>  SITEMAP</a><br />
                                    <a href="#"><i className="fas fa-caret-right"></i>  SHIPPING & RETURNS</a><br />
                                    <a href="#"><i className="fas fa-caret-right"></i>  PRIVAY NOTICE</a><br />
                                    <a href="#"><i className="fas fa-caret-right"></i>  CONDITION OF USE</a>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <h5>CUSTOMER CARE</h5>
                                    <a href="#"><i className="fas fa-caret-right"></i>  SITEMAP</a><br />
                                    <a href="#"><i className="fas fa-caret-right"></i>  SHIPPING & RETURNS</a><br />
                                    <a href="#"><i className="fas fa-caret-right"></i>  PRIVAY NOTICE</a><br />
                                    <a href="#"><i className="fas fa-caret-right"></i>  CONDITION OF USE</a>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12 footerContact">
                                    <p><i className="fas fa-map-marker-alt"></i> Gulshan E Iqbal, Karachi, Pakistan<br />
                                    <i className="fas fa-envelope"></i> percentech@outlook.com<br />
                                    <i className="fas fa-phone-alt"></i> +9233333333<br /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <p>© {year} Percentech Ltd. All Rights Reserved</p>
        </div>
    );
}

export default Footer;