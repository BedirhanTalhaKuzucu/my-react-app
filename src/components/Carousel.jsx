import React from 'react'
import OwlCarousel from 'react-owl-carousel2';



function Carousel({ items }) {


    return (
        <OwlCarousel className="owl-carousel probootstrap-owl"  >
            {items?.map((item) =>
            (
                <div className="item"> {item} </div>
            ))}


        </OwlCarousel>
    )
}

export default Carousel