import React, { Component } from "react";
import ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Button, Container, Row, Col } from "reactstrap";
import { FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";

import GoogleMapReact from "google-map-react";
import { GithubLoginButton } from "react-social-login-buttons";
import "./HomeScreen.css";

//TODO: Custome Object
import { colors } from "../../../app/constants/Constants";

export default class HomeScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      center: {
        lat: 18.516726,
        lng: 73.856255
      },
      zoom: 4
    };

    this.routeChange = this.routeChange.bind(this);
  }

  routeChange(url: any) {
    var win = window.open(url, "_blank");
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert("Please allow popups for this website");
    }
  }

  renderMarker = (map: any, maps: any) => {
    new maps.Marker({
      map: map,
      position: new maps.LatLng(18.516726, 73.856255),
      title: "Appasaheb Lakade"
    });
  };
  render() {
    const images = [
      {
        original: require("../../../assets/images/developer.png")
      }
    ];
    return (
      <Container fluid>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <span style={{ fontSize: 30 }}>USKILL SHARE</span>
          <br />
          <span style={{ fontSize: 14 }}>Share your skill </span>
          <br />
        </div>
        <div>
          <ImageGallery
            items={images}
            lazyLoad={false}
            infinite={true}
            showPlayButton={true}
            autoPlay={true}
            disableThumbnailScroll={true}
            showThumbnails={false}
          />
        </div>

        <div>
          <h4 style={{ paddingTop: 40 }}>Github Repository</h4>
          <hr
            style={{
              color: "#000",
              backgroundColor: "#000",
              height: 1
            }}
          />
        </div>
        <div>
          <Row>
            <Col md="4">
              <GithubLoginButton
                onClick={() =>
                  this.routeChange(
                    "https://github.com/appasaheb4/Tutorial-How-to-nodejs-and-database-connect-in-live-server-heroku-in-reactweb-"
                  )
                }
              >
                <span>
                  ReactWeb: Nodejs and database connect in live server-heroku
                </span>
              </GithubLoginButton>
            </Col>
            <Col md="4">
              <GithubLoginButton
                onClick={() =>
                  this.routeChange(
                    "https://github.com/appasaheb4/Tutorial_How-to-create-nodejs-and-database-connection-in-local-in-reactWeb"
                  )
                }
              >
                <span>ReactWeb: Nodejs and database connection local </span>
              </GithubLoginButton>
            </Col>
            <Col md="4">
              <GithubLoginButton
                onClick={() =>
                  this.routeChange(
                    "https://github.com/appasaheb4/StMichaelSchoolApp"
                  )
                }
              >
                <span>React-Native: StMichaelSchoolApp</span>
              </GithubLoginButton>
            </Col>
            <Col md="4">
              <GithubLoginButton
                onClick={() =>
                  this.routeChange("https://github.com/appasaheb4/SliderApp")
                }
              >
                <span>React-Native: SliderApp</span>
              </GithubLoginButton>
            </Col>
            <Col md="4">
              <GithubLoginButton
                onClick={() =>
                  this.routeChange("https://github.com/appasaheb4/SliderWeb")
                }
              >
                <span>ReactWeb: SliderWeb</span>
              </GithubLoginButton>
            </Col>
          </Row>
          <div>
            <h4 style={{ textAlign: "center", paddingTop: 40 }}>TEAM</h4>
            <hr
              style={{
                color: "#000",
                backgroundColor: "#000",
                height: 1
              }}
            />
            <Row style={{ alignItems: "center", textAlign: "center" }}>
              <Col md="12">
                <h5 style={{ textDecoration: "underline" }}>
                  LAKADE APPASAHEB
                </h5>
                <img
                  style={{ width: 200, height: 200 }}
                  src={require("../../../assets/images/appasaheb.jpeg")}
                />
                <h6>ios,react-native and reactweb developer</h6>
              </Col>
            </Row>
          </div>
          <div>
            <h4 style={{ textAlign: "center", paddingTop: 40 }}>CONTACT US</h4>
            <hr
              style={{
                color: "#000",
                backgroundColor: "#000",
                height: 1
              }}
            />
            <Row style={{ alignItems: "center", textAlign: "center" }}>
              <Col md="12">
                <h6>Hadapsar,Pune,India 411013</h6>
                <h6>onlyappasaheb4@gmail.com</h6>
              </Col>
              <div style={{ height: "400px", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyDAsEi0ofGCstGVAj4wwj1BlwU0gTOu-xw"
                  }}
                  defaultCenter={this.state.center}
                  defaultZoom={this.state.zoom}
                  yesIWantToUseGoogleMapApiInternals={true}
                  onGoogleApiLoaded={({ map, maps }) =>
                    this.renderMarker(map, maps)
                  }
                />
              </div>
            </Row>
          </div>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <Button
            style={{ backgroundColor: colors.social_Github, margin: 5 }}
            onClick={() => this.routeChange("https://github.com/appasaheb4")}
          >
            <FaGithub />
          </Button>
          <Button
            style={{ backgroundColor: colors.social_Whatsup, margin: 5 }}
            onClick={() => this.routeChange("https://wa.me/919260303151")}
          >
            <FaWhatsapp />
          </Button>
          <Button
            style={{ backgroundColor: colors.social_Facebook, margin: 5 }}
            onClick={() =>
              this.routeChange(
                "https://www.facebook.com/Uskill-Share-2262592607346139/?modal=admin_todo_tour"
              )
            }
          >
            <FaFacebook />
          </Button>
        </div>
      </Container>
    );
  }
}
