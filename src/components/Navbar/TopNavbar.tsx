import React, { useState } from "react";
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
    DropdownItem,
    NavbarText
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
                        <NavLink style={ { color: colors.white, fontFamily: fonts.OpenSans } } href="/components/">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={ { color: colors.white, fontFamily: fonts.OpenSans } } href="/contact">Contact</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="dropdown-menu-right" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret style={ { color: colors.white, fontFamily: fonts.OpenSans } }>
                            Select
              </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem style={ { fontFamily: fonts.OpenSans } }>
                                Login
                </DropdownItem>
                            <DropdownItem style={ { fontFamily: fonts.OpenSans } }>
                                Sign Up
                </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

