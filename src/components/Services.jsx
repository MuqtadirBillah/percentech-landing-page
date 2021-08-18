import React from "react";

function  Services(){
    var serviceStyle = {
        background: "url('assets/images/new-pattern-dark.jpg') no-repeat",
        // backgroundSize: "100% 100%"
        backgroundSize: "cover"
    }

    return(
        <div className="services" style={serviceStyle}>
            <div className="filter">
                    <h1 className="heading">Services</h1>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 coll">
                            <div className="card">
                                <img src="assets/images/web-dev.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Web Design & Developement</h5>
                                    <p className="card-text">From prototype to full scale platform, our web development team will create, a state of art.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 coll">
                            <div className="card">
                                <img src="assets/images/graphic.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Graphic Design</h5>
                                    <p className="card-text">Infuse a breath of fresh air. A touch of creativity will give you the edge over other.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 coll">
                            <div className="card">
                                <img src="assets/images/seo.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">SEO</h5>
                                    <p className="card-text">We provide SEO services to help you reach customers and prospects across the entire web.</p>
                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;