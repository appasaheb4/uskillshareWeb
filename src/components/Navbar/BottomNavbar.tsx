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
    DropdownItem
} from 'reactstrap';

import fonts from "../../common/Fonts";
import colors from "../../common/Colors";

export default function BottomNavbarComp( props ) {
    return (
        <footer style={ { position: "relative", bottom: 0, width: "100%", backgroundColor: colors.primary } }>
            <h1 style={ { fontFamily: fonts.FiraSansMediumItalic, textAlign: "center" } }>commin soon</h1>
        </footer>
    )
}
