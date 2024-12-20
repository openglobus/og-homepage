import "./Navbar.css";

import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink className="navbar-brand" to="/">
                OPENGLOBUS
            </NavLink>
            <ul className="navbar-ul">
                <li className="navbar-li">
                    <NavLink className="navbar-link" to="/">
                        home
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <a className="navbar-link" href="https://sandbox.openglobus.org/">
                        examples
                    </a>
                </li>
                <li className="navbar-li">
                    <a className="navbar-link" href="/contacts">
                        contacts
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;