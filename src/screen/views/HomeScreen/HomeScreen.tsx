import React, { Component } from "react";
import ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button, Container, Row, Col } from "reactstrap";
import {
  FaGithub,
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaTwitter,
  FaTrello,
  FaYoutube
} from "react-icons/fa";
import axios from "axios";

import GoogleMapReact from "google-map-react";
import { GithubLoginButton } from "react-social-login-buttons";
import "./HomeScreen.css";

//TODO: Custome Object
import { colors, apiary } from "../../../app/constants/Constants";
const Slider = require( "react-styled-carousel" ).default;
var nodemailer = require( "nodemailer" );

export default class HomeScreen extends Component<any, any> {
  constructor ( props: any ) {
    super( props );

    this.state = {
      center: {
        lat: 18.516726,
        lng: 73.856255
      },
      zoom: 4,
      repoList: []
    };
    this.routeChange = this.routeChange.bind( this );
  }

  componentWillMount() {
    axios
      .get( apiary.repo )
      .then( response => {
        let data = response.data;
        console.log( { data } );
        this.setState( {
          repoList: data
        } );
      } )
      .catch( function ( error ) {
        console.log( error );
      } );
  }

  ///
  routeChange( url: any ) {
    var win = window.open( url, "_blank" );
    if ( win ) {
      win.focus();
    } else {
      alert( "Please allow popups for this website" );
    }
  }

  renderMarker = ( map: any, maps: any ) => {
    new maps.Marker( {
      map: map,
      position: new maps.LatLng( 18.516726, 73.856255 ),
      title: "Appasaheb Lakade"
    } );
  };

  //TODO: func click_SentMessage

  click_SentMessage( e: any ) {
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

  //slider Menu
  onSelect = ( key: any ) => {
    this.setState( { selected: key } );
  };

  render() {
    const images = [
      {
        original: require( "../../../assets/images/developer.png" )
      }
    ];

    const repolist = this.state.repoList.map( ( item: any ) => (
      <Col md="4">
        <GithubLoginButton
          style={ btnGithub }
          onClick={ () => this.routeChange( item.html_url ) }
        >
          <span>{ item.name }</span>
        </GithubLoginButton>
      </Col>
    ) );
    const responsive = [ { breakPoint: 1280, cardsToShow: 3 } ];
    return (
      <div>
        <div
          style={ {
            textAlign: "center",
            position: "absolute",
            width: 200,
            height: 200,
            left: 80,
            top: 400,
            zindex: 1
          } }
        >
          <span style={ { fontSize: 30 } }>USKILL SHARE</span>
          <br />
          <span style={ { fontSize: 14 } }>Share your skill </span>
        </div>
        <div>
          <ImageGallery
            items={ images }
            lazyLoad={ false }
            infinite={ true }
            showPlayButton={ false }
            showFullscreenButton={ false }
            autoPlay={ true }
            disableThumbnailScroll={ true }
            showThumbnails={ false }
          />
        </div>

        <Container fluid>
          <div>
            <h4 style={ { paddingTop: 40 } }>
              Github Repository ({ this.state.repoList.length })
            </h4>
            <hr
              style={ {
                color: "#000",
                backgroundColor: "#000",
                height: 1
              } }
            />
          </div>
          <div>
            <Row>
              { repolist }
            </Row>

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
                    src={ require( "../../../assets/images/appasaheb.jpeg" ) }
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
                      <form onSubmit={ this.click_SentMessage.bind( this ) }>
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
              onClick={ () => this.routeChange( "https://github.com/appasaheb4" ) }
            >
              <FaGithub />
            </Button>
            <Button
              style={ { backgroundColor: colors.social_Youtube, margin: 5 } }
              onClick={ () => this.routeChange( "https://youtube.com/c/USkillShare" ) }
            >
              <FaYoutube />
            </Button>
            <Button
              style={ { backgroundColor: colors.social_Facebook, margin: 5 } }
              onClick={ () =>
                this.routeChange(
                  "https://www.facebook.com/Uskill-Share-2262592607346139/?modal=admin_todo_tour"
                )
              }
            >
              <FaFacebook />
            </Button>
            <Button
              style={ { backgroundColor: colors.social_Messager, margin: 5 } }
              onClick={ () => this.routeChange( "http://m.me/2262592607346139" ) }
            >
              <FaFacebookMessenger />
            </Button>
            <Button
              style={ { backgroundColor: colors.social_Instagram, margin: 5 } }
              onClick={ () => {
                this.routeChange( "http://www.instagram.com/appasaheblakade" );
              } }
            >
              <FaInstagram />
            </Button>
            <Button
              style={ { backgroundColor: colors.social_Twitter, margin: 5 } }
              onClick={ () => {
                this.routeChange( "https://twitter.com/Appasah73911269" );
              } }
            >
              <FaTwitter />
            </Button>
            <Button
              style={ { backgroundColor: colors.social_Twitter, margin: 5 } }
              onClick={ () => {
                this.routeChange( "https://trello.com/appasaheb1" );
              } }
            >
              <FaTrello />
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

const btnGithub = {
  fontSize: 15
} as React.CSSProperties;

const itemCenter = {
  alignItems: "center",
  textAlign: "center"
} as React.CSSProperties;
