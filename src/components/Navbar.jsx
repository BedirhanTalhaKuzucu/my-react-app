import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark probootstrap-navabr-dark">
            <div className="container">
                {/* <a className="navbar-brand" href="index.html">
                    Initial
                </a> */}
                <NavLink to="/" className="navbar-brand"   >
                    Initial
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#probootstrap-nav"
                    aria-controls="probootstrap-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="probootstrap-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <NavLink to="/" className="nav-link"   >
                                Home
                            </NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link"   >
                                About
                            </NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className="nav-link"   >
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="contact.html" class="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar