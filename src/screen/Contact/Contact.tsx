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


export default function Contact( props ) {
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
                <div>
                    <h4 style={ { textAlign: "center", paddingTop: 40 } }>TEAM</h4>
                    <hr
                        style={ {
                            color: "#000",
                            backgroundColor: "#000",
                            height: 1
                        } }
                    />
                    <Row style={ { alignItems: "center", textAlign: "center" } }>
                        <Col md="12">
                            <h5 style={ { textDecoration: "underline" } }>
                                LAKADE APPASAHEB
                  </h5>
                            <img
                                style={ { width: 200, height: 200 } }
                                src={ require( "../../assets/images/appasaheb.jpeg" ) }
                            />
                            <h6>ios,react-native and reactweb developer</h6>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h4 style={ { textAlign: "center", paddingTop: 40 } }>
                        CONTACT US
              </h4>
                    <hr
                        style={ {
                            color: "#000",
                            backgroundColor: "#000",
                            height: 1
                        } }
                    />

                    <div style={ itemCenter }>
                        <Row>
                            <Col md="12">
                                <h6>Hadapsar,Pune,India 411013</h6>
                            </Col>
                        </Row>
                    </div>

                    <div style={ itemCenter }>
                        <Row>
                            <Col md="12" style={ { marginTop: 30 } }>
                                <span>Send Message</span>
                                <Col
                                    className="offset-md-4"
                                    md="4"
                                    style={ { marginTop: 10 } }
                                >
                                    <form onSubmit={ () => click_SentMessage }>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email*"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                className="form-control"
                                                placeholder="Message *"
                                                required
                                            />
                                        </div>
                                        <div style={ { textAlign: "center" } }>
                                            <div className="form-group">
                                                <input
                                                    type="submit"
                                                    className="btn btn-primary btn-full btnFull"
                                                    value="Send"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </Col>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <br />
            <div style={ { textAlign: "center" } }>
                <Button
                    style={ { backgroundColor: colors.social_Github, margin: 5 } }
                    onClick={ () => routeChange( "https://github.com/appasaheb4" ) }
                >
                    <FaGithub />
                </Button>
                <Button
                    style={ { backgroundColor: colors.social_Youtube, margin: 5 } }
                    onClick={ () => routeChange( "https://youtube.com/c/USkillShare" ) }
                >
                    <FaYoutube />
                </Button>
                <Button
                    style={ { backgroundColor: colors.social_Facebook, margin: 5 } }
                    onClick={ () =>
                        routeChange(
                            "https://www.facebook.com/Uskill-Share-2262592607346139/?modal=admin_todo_tour"
                        )
                    }
                >
                    <FaFacebook />
                </Button>
                <Button
                    style={ { backgroundColor: colors.social_Messager, margin: 5 } }
                    onClick={ () => routeChange( "http://m.me/2262592607346139" ) }
                >
                    <FaFacebookMessenger />
                </Button>
                <Button
                    style={ { backgroundColor: colors.social_Instagram, margin: 5 } }
                    onClick={ () => {
                        routeChange( "http://www.instagram.com/appasaheblakade" );
                    } }
                >
                    <FaInstagram />
                </Button>
                <Button
                    style={ { backgroundColor: colors.social_Twitter, margin: 5 } }
                    onClick={ () => {
                        routeChange( "https://twitter.com/Appasah73911269" );
                    } }
                >
                    <FaTwitter />
                </Button>
                <Button
                    style={ { backgroundColor: colors.social_Twitter, margin: 5 } }
                    onClick={ () => {
                        routeChange( "https://trello.com/appasaheb1" );
                    } }
                >
                    <FaTrello />
                </Button>
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
