import React from "react";

function About(){


    return(
        <div className="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 aboutLeft">
                        <img src="assets/images/about.jpg" alt="aboutimage" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 aboutRight align-self-center">
                        <h1>About <b>Percentech</b></h1>
                        <h5>We are innovators with a passion for creating brilliant ideas and transforming them into smart, well-designed, innovative digital experiences.<br /><br />Our Objective for Percentech is to ensure we provide best in class innovative digital solutions for our clients.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;