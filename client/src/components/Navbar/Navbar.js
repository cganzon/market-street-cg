import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import "./Navbar.css";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";

class Navbar extends Component {
    state = {
        search: ""
    };

    render() {
        return (
            <Router>
                <nav>
                    <Link to="/" id="navbar-title">Market Street</Link>
                    <div id="user-interface">
                        <Link to="/login" id="login">Log in</Link>
                        <form id="search-form">
                            <input type="text" id="search-input" />
                            <button type="submit" id="search">Search</button>
                        </form>
                    </div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                </nav>
            </Router>
        );
    };
};

export default Navbar;