import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
       <div className="container NavbarContainer">
        <div className="Navbar">
        <nav className="navbar navbar-expand-sm navbar-light fixed-top" id="myNavbar">
            <NavLink className="navbar-brand" to="/">ERICADA</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end">
                <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/portfolio">Portfolio <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact <span className="sr-only">(current)</span></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
        </div>

    );
  }
}

export default Navigation;