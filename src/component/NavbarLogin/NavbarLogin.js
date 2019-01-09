import React from 'react';
import logoWhite from '../../assets/images/logoWhite.png';
import './NavbarLogin.css';
import {Navbar, NavbarBrand } from 'reactstrap';

const navbarLogin = () => (

    <Navbar color="light" light expand="md">
        <NavbarBrand className="navLogo" href="/">
            <img src={logoWhite} alt="MyBurger" />
        </NavbarBrand>
    </Navbar>
)

export default navbarLogin;