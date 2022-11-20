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

function Services() {

    const [title, settitle] = useState("A Good Services")

    return (
        <>
            <HeaderSection title={title} />
            <Section>
                <div className="row mb-5">
                    <div className="col-md-4">
                        <h2 className="h1 mb-5 mt-0">The Services <span className="text-primary">Images</span></h2>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-6">
                        <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-12">
                        <Carousel items={carouselItem.services} />
                    </div>
                </div>

                <div className="row mb-5 pt-5">
                    <div className="col-md-4">
                        <h2 className="h1 mb-5 mt-0">The Services <span className="text-primary">Icons</span></h2>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-6">
                        <p className="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <Facilities />
            </Section>
            <Subscribe />
            <Section>
                <TogetherWork />
            </Section>
            <Footer />
        </>
    )
}

export default Services