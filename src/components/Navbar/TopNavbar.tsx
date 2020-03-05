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
                        <NavLink style={ { color: colors.white, fontFamily: fonts.OpenSans } } href="/">React</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={ { color: colors.white, fontFamily: fonts.OpenSans } } href="/">IOS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={ { color: colors.white, fontFamily: fonts.OpenSans } } href="/">NodeJs</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="dropdown-menu-right" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <NavItem>
                            <NavLink style={ { color: colors.white, fontFamily: fonts.OpenSans } } href="/about">About</NavLink>
                        </NavItem>

                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

