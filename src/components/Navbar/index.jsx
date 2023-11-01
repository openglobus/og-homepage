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
                    <NavLink className="navbar-link" to="https://www.openglobus.org/examples/examples/">
                        examples
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink className="navbar-link" to="/about">
                        about
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;