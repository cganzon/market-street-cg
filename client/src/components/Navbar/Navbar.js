import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    state = {
        search: ""
    };

    render() {
        return (
            <nav>
                <a href="" id="navbar-title">Market Street</a>
                <div id="user-interface">
                    <a href="" id="login">Log in</a>
                    <form id="search-form">
                        <input type="text" id="search-input" />
                        <button type="submit" id="search">Search</button>
                    </form>
                </div>
            </nav>
        );
    };
};

export default Navbar;