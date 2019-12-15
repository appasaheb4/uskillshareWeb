import React, { useState } from "react";
import ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import {
    Button, Container, Row, Col
} from 'reactstrap';

import {
    FaGithub,
    FaFacebook,
    FaFacebookMessenger,
    FaInstagram,
    FaTwitter,
    FaTrello,
    FaYoutube
} from "react-icons/fa";


//TODO: Custome Object
import { apiary } from "../../common/constants/Constants";
const Slider = require( "react-styled-carousel" ).default;
var nodemailer = require( "nodemailer" );

import TopNavbarComp from "../../components/Navbar/TopNavbar";
import BottomNavbarComp from "../../components/Navbar/BottomNavbar";

import fonts from "../../common/Fonts";
import colors from "../../common/Colors";


export default function About( props ) {




    return (
        <div>
            <div>
                <TopNavbarComp />
            </div>

            <div>
                <h1 style={ { textAlign: "center" } }>comming soon</h1>
            </div>
        </div>



    );
}


const itemCenter = {
    alignItems: "center",
    textAlign: "center"
} as React.CSSProperties;
