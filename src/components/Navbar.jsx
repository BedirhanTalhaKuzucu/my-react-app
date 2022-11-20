import React from 'react'
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark probootstrap-navabr-dark">
            <div className="container">
                {/* <a className="navbar-brand" href="index.html">
                    Initial
                </a> */}
                <NavLink to="/" className="navbar-brand"   >
                    Initial
                </NavLink>

                <Button
                    variant="dark"
                    size="sm"
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-controls="probootstrap-nav"
                    aria-expanded={open}
                    data-toggle="collapse"
                    data-target="#probootstrap-nav"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>

                </Button>

                <Collapse in={open}>
                    <div className="collapse navbar-collapse" id="probootstrap-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <NavLink to="/" className="nav-link" onClick={() => setOpen(false)}   >
                                    Home
                                </NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" onClick={() => setOpen(false)}   >
                                    About
                                </NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link" onClick={() => setOpen(false)}   >
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link" onClick={() => setOpen(false)}   >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Collapse>

            </div>
        </nav>
    )
}

export default Navbar