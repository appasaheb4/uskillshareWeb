import React, { useState, useEffect } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import fonts from "../../common/Fonts";
import colors from "../../common/Colors";

export default function TopNavbarComp( props ) {
    const [ isOpen, setIsOpen ] = useState( false );
    const [ userDetails, setUserDetails ] = useState( {} );
    useEffect( () => {
        let userDetails = JSON.parse( window.localStorage.getItem( "userDetails" ) );
        setUserDetails( userDetails );
    } );

    const toggle = () => setIsOpen( !isOpen );

    const clickLogout = () => {
        alert( 'hi' )
        window.localStorage.removeItem( "userDetails" );
    }

    return (
        <Navbar color="primary" light expand="md">
            <NavbarBrand href="/" style={ { fontFamily: fonts.FiraSansBold, color: colors.white } }>USkill Share</NavbarBrand>
            <NavbarToggler onClick={ toggle } />
            <Collapse isOpen={ isOpen } navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink style={ { color: colors.white, fontFamily: fonts.OpenSans } } href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={ { color: colors.white, fontFamily: fonts.OpenSans } } href="/contact">Contact</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="dropdown-menu-right" navbar>
                    { userDetails != {} ? (
                        <UncontrolledDropdown nav inNavbar>
                            < DropdownToggle nav caret style={ { color: colors.white, fontFamily: fonts.OpenSans } }>
                                hi { userDetails.name }
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem style={ { fontFamily: fonts.OpenSans } } onClick={ () => clickLogout() }>
                                    Logout
                </DropdownItem>
                            </DropdownMenu>

                        </UncontrolledDropdown>
                    ) : (
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret style={ { color: colors.white, fontFamily: fonts.OpenSans } }>
                                    Select
              </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem style={ { fontFamily: fonts.OpenSans } } onClick={ () => props.clickLogin() }>
                                        Login
                </DropdownItem>
                                    <DropdownItem style={ { fontFamily: fonts.OpenSans } } onClick={ () => props.clickSignUp() }>
                                        Sign Up
                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

