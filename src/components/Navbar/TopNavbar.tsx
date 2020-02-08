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

    const toggle = () => setIsOpen( !isOpen );
    return (
        <Navbar color="primary" light expand="md">
            <NavbarBrand href="/" style={ { fontFamily: fonts.FiraSansBold, color: colors.white } }>USkill Share</NavbarBrand>
            <NavbarToggler onClick={ toggle } />
            <Collapse isOpen={ isOpen } navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink style={ { color: colors.white, fontFamily: fonts.OpenSans } } href="/about">ReactWeb</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={ { color: colors.white, fontFamily: fonts.OpenSans } } href="/contact">React-Native</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={ { color: colors.white, fontFamily: fonts.OpenSans } } href="/contact">IOS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={ { color: colors.white, fontFamily: fonts.OpenSans } } href="/contact">About</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="dropdown-menu-right" navbar>
                    { props.userDetails != null ? (
                        <UncontrolledDropdown nav inNavbar>
                            < DropdownToggle nav caret style={ { color: colors.white, fontFamily: fonts.OpenSans } }>
                                hi { props.userDetails.name }
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem style={ { fontFamily: fonts.OpenSans } } onClick={ () => props.clickPostNotes() }>
                                    Post Notes
                </DropdownItem>
                                <DropdownItem style={ { fontFamily: fonts.OpenSans } } onClick={ () => props.clickPostVideos() }>
                                    Post Videos
                </DropdownItem>
                                <DropdownItem style={ { fontFamily: fonts.OpenSans } } onClick={ () => props.clickLogout() }>
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
                                    {/* <DropdownItem style={ { fontFamily: fonts.OpenSans } } onClick={ () => props.clickSignUp() }>
                                        Sign Up
                </DropdownItem> */}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

