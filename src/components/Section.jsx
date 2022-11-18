import React from "react";
import OwlCarousel from 'react-owl-carousel2';
// import 'react-owl-carousel2/style.css';
import person1 from "../images/person_1.jpg"
import person2 from "../images/person_2.jpg"
import person3 from "../images/person_3.jpg"



function Section() {
    

    return (
        <section className="probootstrap-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <OwlCarousel className="owl-carousel probootstrap-owl" >
                            <div className="item">
                                <img src={person1} className="img-fluid" alt="Free Template by uicookies.com" />
                            </div>
                            <div className="item">
                                <img src={person2} className="img-fluid" alt="Free Template by uicookies.com" />
                            </div>
                            <div className="item">
                                <img src={person3} className="img-fluid" alt="Free Template by uicookies.com" />
                            </div>
                            <div className="item">
                                <img src={person1} className="img-fluid" alt="Free Template by uicookies.com" />
                            </div>
                            <div className="item">
                                <img src={person2} className="img-fluid" alt="Free Template by uicookies.com" />
                            </div>
                        </OwlCarousel>
                        
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4">
                        <h4>Move Forward. Create Beautiful Templates.</h4>
                    </div>
                    <div className="col-md-8">
                        <p>
                            Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts. Separated
                            they live in Bookmarksgrove right at the coast of the Semantics, a
                            large language ocean.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="media d-block mb-4 text-left probootstrap-media p-md-5 p-4">
                            <div className="probootstrap-icon mb-3">
                                <span className="oi oi-thumb-up display-4"></span>
                            </div>
                            <div className="media-body">
                                <h5 className="mt-0">Free Bootstrap 4</h5>
                                <p>
                                    Far far away, behind the word mountains, far from the
                                    countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="media d-block mb-4 text-left probootstrap-media p-md-5 p-4">
                            <div className="probootstrap-icon mb-3">
                                <span className="oi oi-wrench display-4"></span>
                            </div>
                            <div className="media-body">
                                <h5 className="mt-0">Web Development</h5>
                                <p>
                                    Far far away, behind the word mountains, far from the
                                    countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="media d-block mb-4 text-left probootstrap-media p-md-5 p-4">
                            <div className="probootstrap-icon mb-3">
                                <span className="oi oi-person display-4"></span>
                            </div>
                            <div className="media-body">
                                <h5 className="mt-0">For People Like You</h5>
                                <p>
                                    Far far away, behind the word mountains, far from the
                                    countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="media d-block mb-4 text-left probootstrap-media p-md-5 p-4">
                            <div className="probootstrap-icon mb-3">
                                <span className="oi oi-location display-4"></span>
                            </div>
                            <div className="media-body">
                                <h5 className="mt-0">Free Bootstrap 4</h5>
                                <p>
                                    Far far away, behind the word mountains, far from the
                                    countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="media d-block mb-4 text-left probootstrap-media p-md-5 p-4">
                            <div className="probootstrap-icon mb-3">
                                <span className="oi oi-monitor display-4"></span>
                            </div>
                            <div className="media-body">
                                <h5 className="mt-0">Web Development</h5>
                                <p>
                                    Far far away, behind the word mountains, far from the
                                    countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="media d-block mb-4 text-left probootstrap-media p-md-5 p-4">
                            <div className="probootstrap-icon mb-3">
                                <span className="oi oi-pencil display-4"></span>
                            </div>
                            <div className="media-body">
                                <h5 className="mt-0">For People Like You</h5>
                                <p>
                                    Far far away, behind the word mountains, far from the
                                    countries Vokalia and Consonantia, there live the blind texts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;
