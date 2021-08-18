import React from "react";

function Carousel(){

    var slide1 = {
        background: "url('assets/images/img1.jpg') no-repeat",
        backgroundSize: "100% 100%"
    }
    

    return(
        <div className="mainCarousel">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner" style={slide1}>
                    <div className="carousel-item active">
                        <div className="slide">
                            <div className="filter">
                                <h1>Web Design</h1>
                                <h5>Our innovative team will entrust you with the finest vision in town to create your dream web design.</h5>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="slide">
                            <div className="filter">
                                <h1>Web Developement</h1>
                                <h5>From prototype to full scale platform, our web development team will create, a state of art, cutting edge innovative developments.</h5>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="slide">
                            <div className="filter">
                                <h1>Graphic Design</h1>
                                <h5>Whether you're looking for a spectacular new logo or some stunning, the talented designers at Percentech can make it happen.</h5>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="slide">
                            <div className="filter">
                                <h1>SEO</h1>
                                <h5>We provide SEO services to help you reach customers and prospects across the entire web.</h5>
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;