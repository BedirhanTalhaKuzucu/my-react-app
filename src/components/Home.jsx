import React from "react";
import Carousel from "./Carousel";
import Services from "./Services";
import Subscribe from "./Subscribe";
import { carouselItem } from "../assets/crouselItems"
import Section from "./Section";
import person1 from "../images/person_1.jpg"
import person2 from "../images/person_2.jpg"
import person3 from "../images/person_3.jpg"
import Footer from "./Footer";

function Home() {


    return (
        <>
            <Section>
                <div className="row mb-5">
                    <div className="col-md-12">
                        <Carousel items={carouselItem.persons} />
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
                <Services />
            </Section>
            <Subscribe />
            <Section>
                <div className="row">
                    <div className="col-md-12">
                        <Carousel items={carouselItem.items} />
                    </div>
                </div>
            </Section>
            <Section>
                <div className="row">
                    <div className="col-md-4">
                        <img src={person1} alt="Free Template by uicookies.com" className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <img src={person2} alt="Free Template by uicookies.com" className="img-fluid" />
                    </div>
                    <div className="col-md-4">
                        <img src={person3} alt="Free Template by uicookies.com" className="img-fluid" />
                    </div>
                </div>
            </Section>
            <Section>
                <div className="row mb-5">
                    <div className="col-md-12">
                        <div className="border p-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <h4>Let's Work Together. Get Started.</h4>
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-7">
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    <p><a href="https://uicookies.com/" target="_blank" className="btn btn-primary">Get In Touch</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    );
}

export default Home;
