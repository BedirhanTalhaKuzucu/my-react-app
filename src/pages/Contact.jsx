import React from "react";
import Carousel from "../components/Carousel";
import Facilities from "../components/Facilities";
import Subscribe from "../components/Subscribe";
import { carouselItem } from "../assets/crouselItems"
import Section from "../components/Section";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import { useState } from "react";
import TogetherWork from "../components/TogetherWork";

function Contact() {

    const [title, settitle] = useState("A Good Contact")


    return (
        <>
            <HeaderSection title={title} />
            <Section>
                <div className="row mb-5">
                    <div className="col-md-4">
                        <h2 className="h1 mb-5 mt-0">Get In Touch</h2>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-6">
                        <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-12">
                        <form action="#" method="post" className="probootstrap-form mb-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="fname">First Name</label>
                                        <input type="text" className="form-control" id="fname" name="fname" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="lname">Last Name</label>
                                        <input type="text" className="form-control" id="lname" name="lname" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" />
                            </div>
                            <div className="form-group mb-4">
                                <label for="message">Message</label>
                                <textarea cols="30" rows="10" className="form-control" id="message" name="message"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-primary" id="submit" name="submit" value="Send Message" />
                            </div>
                        </form>
                    </div>
                </div>

            </Section>
            <Subscribe />
            <Section>
                <TogetherWork />
            </Section>
            <Footer />
        </>

    )
}

export default Contact