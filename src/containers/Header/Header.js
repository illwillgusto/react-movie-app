import React from "react";
import { NavLink } from "react-router-dom";

import Navbar from "./Navbar"

import "./Header.scss"

const Header = (props) => {
    return (
        <header className="m-header">
            <NavLink className="m-header__logo" to="/">
                Track Those Movies
            </NavLink>
            <Navbar {...props} />
        </header>
    );
};

export default Header;