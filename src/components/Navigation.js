import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
       <div className="container NavbarContainer">
        <div className="Navbar">
        <nav className="navbar navbar-expand-sm navbar-light fixed-top" id="myNavbar">
            <a className="navbar-brand" href={'#homeSection'}>ERICADA</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbarToggler" className="collapse navbar-collapse justify-content-end">
                <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href={'#homeSection'}>Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={'#aboutSection'}>About <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href={'#portfolioSection'}>Portfolio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href={'#contactSection'}>Contact <span className="sr-only">(current)</span></a>
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