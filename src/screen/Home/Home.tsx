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
import "./Home.css";

//TODO: Custome Object
import { apiary } from "../../common/constants/Constants";
var nodemailer = require( "nodemailer" );

import TopNavbarComp from "../../components/Navbar/TopNavbar";
import BottomNavbarComp from "../../components/Navbar/BottomNavbar";

import fonts from "../../common/Fonts";
import colors from "../../common/Colors";

export default function Home( props ) {

  const routeChange = ( url: any ) => {
    var win = window.open( url, "_blank" );
    if ( win ) {
      win.focus();
    } else {
      alert( "Please allow popups for this website" );
    }
  }


  //TODO: func click_SentMessage

  const click_SentMessage = ( e: any ) => {
    e.preventDefault();

    var transporter = nodemailer.createTransport( {
      service: "gmail",
      auth: {
        user: "onlyappasaheb4@gmail.com",
        pass: ""
      }
    } );
    var mailOptions = {
      from: "onlyappasaheb4@gmail.com",
      to: "onlyappasaheb4@gmail.com",
      subject: "Sending Email using Node.js",
      text: "That was easy!"
    };
    transporter.sendMail( mailOptions, function ( error: any, info: any ) {
      if ( error ) {
        console.log( error );
      } else {
        console.log( "Email sent: " + info.response );
      }
    } );
    alert( "working.." );
  }


  return (
    <div>
      <div>
        <TopNavbarComp />
      </div>
      <div>
        <h4 style={ { textAlign: "center", paddingTop: 40 } }>TEAM</h4>
      </div>
      <div>
        <BottomNavbarComp />
      </div>

    </div>
  );
}


const itemCenter = {
  alignItems: "center",
  textAlign: "center"
} as React.CSSProperties;
