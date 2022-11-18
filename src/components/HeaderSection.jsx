import React from 'react'
import backroundImg from "../images/bg_1.jpg"
 
function HeaderSection() {
    return (
        <section className="probootstrap-cover overlay" style={{ backgroundImage: `url(${backroundImg })` }}>
            <div className="container">
                <div className="row align-items-center justify-content-center text-center probootstrap-vh-100">
                    <div className="col-md-8">
                        <h1 className="probootstrap-heading">Create Good Free Templates</h1>
                        <h2 className="h3 probootstrap-subheading mb-5">
                            A free template by <a href="#">uicookies.com</a>
                        </h2>
                        <p>
                            <a href="https://uicookies.com/" target="_blank" className="btn btn-primary" >
                                Get Started
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderSection