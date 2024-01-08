import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import "./Navigation.css"
import { PiAirplaneInFlightLight } from "react-icons/pi";
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <>

            <Navbar
                className="myNavbar p-3"
            >
                <NavbarBrand className='d-flex align-items-center mx-auto'>
                    <Link to={"/"}>
                        <h2 className='myTitle'>Track Your Flight <PiAirplaneInFlightLight className='myIcon' />
                        </h2>
                    </Link>
                </NavbarBrand>
            </Navbar>

        </>
    )
}

export default Navigation