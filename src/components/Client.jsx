import React from "react";

function Client(){

    var clientStyle = {
        background: "url('assets/images/new-pattern-light.jpg') no-repeat",
        // backgroundSize: "100% 100%"
        backgroundSize: "cover"
    }

    return(
        <div className="client" style={clientStyle}>
            <h1>Our Clients</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <center>
                        <img src="assets/images/cc1.png" alt="" />
                        </center>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <center>
                        <img src="assets/images/cc2.png" alt="" />
                        </center>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <center>
                        <img src="assets/images/cc3.png" alt="" />
                        </center>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <center>
                        <img src="assets/images/cc4.png" alt="" />
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client;