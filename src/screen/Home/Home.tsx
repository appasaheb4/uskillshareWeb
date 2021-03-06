import React, { useState, useEffect } from "react";
import {
  Button,
  Jumbotron, Row, Col,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import Fab from '@material-ui/core/Fab';
import { Favorite, AddComment, Share } from '@material-ui/icons';
import { Player } from 'video-react';
import {
  Tabs,
  Tab,
  ListGroup,
  Card,
  Image,
  ButtonToolbar,
  DropdownButton,
  Dropdown,
  SplitButton
} from 'react-bootstrap';
import { ToastsContainer, ToastsStore } from "react-toasts";
import Select from 'react-select';

import "./Home.css";

import { TopNavbarComp, BottomNavbarComp } from "../../components/Navbar";
import { List } from "../../components/List";

//TODO: Custom Object
import { getUnixTimeDate } from "../../common/Utilites";
import fonts from "../../common/Fonts";
import colors from "../../common/Colors";


import { useDispatch, useSelector } from "react-redux";
import { onCommonPostInsert, onCommonGet } from "../../redux/actions/common";
import { onPostNotes, onGetPostNotes } from "../../redux/actions/postNotes";

export default function Home( props ) {
  const [ loginModal, setLoginModal ] = useState( false );
  const [ signUpModal, setSignUpModal ] = useState( false );
  const [ loginType, setLoginType ] = useState( "login" );
  const [ userDetails, setUserDetails ] = useState( null );
  const [ flagPostNotes, setFlagPostNotes ] = useState( false );
  const [ langNotesList, setLangNotesList ] = useState( [] );
  const [ selectedLangNotes, setSelectedLangNotes ] = useState( {} );
  const [ arrPostNotes, setArrPostNotes ] = useState( [] );
  const [ flagProfile, setFlagProfile ] = useState( false );

  // const dispatch = useDispatch();
  // const { resultPostInsert, resultGet } = useSelector( state => state.common );
  // const { resultPostNotesInsert, resultGetPostNotes } = useSelector( state => state.postNotes );

  // useEffect( () => {
  //   let userDetails = JSON.parse( window.localStorage.getItem( "userDetails" ) );
  //   setUserDetails( userDetails );
  //   dispatch( onCommonGet( { url: apiary.getAllLang } ) );
  //   dispatch( onGetPostNotes( { url: apiary.getPostNotes } ) );
  // }, [] )


  // useEffect( () => {
  //   let res = resultGet.res;
  //   if ( res != undefined ? res : false ) {
  //     let arrLangList = [];
  //     for ( let i = 0; i < res.data.length; i++ ) {
  //       let data = {};
  //       data.value = res.data[ i ];
  //       data.label = res.data[ i ].langName;
  //       arrLangList.push( data );
  //     }
  //     setSelectedLangNotes( arrLangList[ 0 ].value )
  //     setLangNotesList( arrLangList );
  //   }
  // }, [ resultGet ] )

  // useEffect( () => {
  //   let res = resultGetPostNotes.res;
  //   if ( res != undefined ? res : false )
  //     setArrPostNotes( res.data );

  // }, [ resultGetPostNotes ] )





  // model popup 
  const toogleModel = () => {
    setLoginModal( !loginModal );
  }
  const toogleSignUpModel = () => {
    setSignUpModal( !signUpModal );
  }

  const tooglePostNotes = () => {
    setFlagPostNotes( !flagPostNotes );
  }

  const toogleProfile = () => {
    setFlagProfile( !flagProfile );
  }

  const clickLogout = () => {
    setUserDetails( null );
    window.localStorage.removeItem( "userDetails" );
  }

  // Sign Up  
  const click_SignUp = async ( e ) => {
    e.preventDefault();
    if ( e.target.password.value == e.target.confirmPassword.value ) {
      setLoginType( "signUp" );
      let data = {
        date: getUnixTimeDate( new Date() ),
        name: e.target.name.value,
        mobileNo: e.target.mobileNo.value,
        email: e.target.email.value,
        password: e.target.confirmPassword.value
      }
      // dispatch( onCommonPostInsert( { url: apiary.registration, data } ) );
    } else {
      ToastsStore.warning( "Please enter correct password." );
    }
  }

  const click_Login = async ( e ) => {
    e.preventDefault();
    setLoginType( "login" );
    let data = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    // dispatch( onCommonPostInsert( { url: apiary.loginUser, data } ) );
  }


  // useEffect( () => {
  //   let res = resultPostInsert.res;
  //   console.log( { res } );
  //   if ( res != undefined ? res : false ) {
  //     if ( loginType == "signUp" ) {
  //       if ( res.statusCode == 200 ) {
  //         setSignUpModal( !signUpModal );
  //         ToastsStore.success( res.data );
  //       } else {
  //         ToastsStore.success( res.data.msg );
  //       }
  //     } else {
  //       if ( res.statusCode == 200 ) {
  //         let userDel = res.data.results[ 0 ];
  //         window.localStorage.setItem( "userDetails", JSON.stringify( userDel ) );
  //         setUserDetails( userDel );
  //         setLoginModal( !loginModal );
  //         ToastsStore.success( res.data.msg );
  //       } else {
  //         ToastsStore.success( res.data.msg );
  //       }
  //     }
  //   }
  // }, [ resultPostInsert ] )


  const click_PostNotes = async ( e ) => {
    e.preventDefault();
    let data = {
      date: getUnixTimeDate( new Date() ),
      title: e.target.title.value,
      descri: e.target.descri.value,
      sourceCode: e.target.sourceCode.value,
      langId: selectedLangNotes.id,
      userId: userDetails.id
    }
    //dispatch( onPostNotes( { url: apiary.postNotes, data } ) )
    console.log( { data } );
  }



  // useEffect( () => {
  //   let res = resultPostNotesInsert.res;
  //   console.log( { res } );
  //   if ( res != undefined ? res : false ) {
  //     if ( res.statusCode == 200 ) {
  //       ToastsStore.success( res.data );
  //     } else {
  //       ToastsStore.success( res.data.msg );
  //     }
  //     tooglePostNotes();
  //   }
  // }, [ resultPostNotesInsert ] );


  return (
    <div>

      <div>
        <TopNavbarComp
          userDetails={ userDetails }
          clickLogin={ () => toogleModel() }
          clickSignUp={ () => toogleSignUpModel() }
          clickPostNotes={ () => tooglePostNotes() }
          clickPostVideos={ () => alert( 'commin soon' ) }
          clickLogout={ () => clickLogout() }
        />
      </div>

      <div>
        <Jumbotron style={ { textAlign: "center", opacity: 0.5 } }>
          <h1 style={ { fontFamily: fonts.Maquire } }>Your Skill Share!</h1>
          <p style={ { fontFamily: fonts.LobsterRegular } }>
            end to end encrypted and decrypted data.
         </p>
        </Jumbotron>
      </div>

      <div>
        <List />
      </div>

      {/* Modal Login */ }
      <Modal isOpen={ loginModal } toggle={ toogleModel } >
        <ModalHeader>Login</ModalHeader>
        <form onSubmit={ ( e ) => click_Login( e ) }>
          <ModalBody>
            <div className="form-group form-inline">
              <label className="col-3">Email</label>
              <input className="form-control col-7" type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group form-inline">
              <label className="col-3">Password</label>
              <input className="form-control col-7" type="password" name="password" placeholder="Password" required />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary" >Login</Button>
          </ModalFooter>
        </form>
      </Modal>

      {/* Modal Sign Up */ }
      <Modal isOpen={ signUpModal } toggle={ toogleSignUpModel } >
        <ModalHeader>Sign Up</ModalHeader>
        <form onSubmit={ ( e ) => click_SignUp( e ) }>
          <ModalBody>
            <div className="form-group form-inline">
              <label className="col-3">Name</label>
              <input className="form-control col-7" type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-group form-inline">
              <label className="col-3">Mobile No</label>
              <input className="form-control col-7" type="text" name="mobileNo" placeholder="Mobile No" required />
            </div>
            <div className="form-group form-inline">
              <label className="col-3">Email</label>
              <input className="form-control col-7" type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group form-inline">
              <label className="col-3">Password</label>
              <input className="form-control col-7" type="password" name="password" placeholder="Password" required />
            </div>
            <div className="form-group form-inline">
              <label className="col-3">Confirm Password</label>
              <input className="form-control col-7" type="password" name="confirmPassword" placeholder="Confirm Password" required />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary" >Sign Up</Button>
          </ModalFooter>
        </form>
      </Modal>

      {/* Modal Post Notes */ }
      <Modal isOpen={ flagPostNotes } toggle={ tooglePostNotes }>

        <ModalHeader>Post Notes</ModalHeader>
        <form onSubmit={ ( e ) => click_PostNotes( e ) }>
          <ModalBody>
            <div className="form-group form-inline">
              <label className="col-3">Language</label>
              <div className="col-md-7">
                <Select
                  autoFocus={ true }
                  //placeholder={ selectedOption }
                  // value={ selectedOption }
                  onChange={ ( val ) => setSelectedLangNotes( val.value ) }
                  options={ langNotesList }
                />
              </div>
            </div>
            <div className="form-group form-inline">
              <label className="col-3">Title:</label>
              <input className="form-control col-7" type="text" name="title" placeholder="Title" required />
            </div>
            <div className="form-group form-inline">
              <label className="col-3">Description:</label>
              <textarea rows={ 2 } className="form-control col-7" name="descri" placeholder="Description" required></textarea>
            </div>
            <div className="form-group form-inline">
              <label className="col-3">Source Code:</label>
              <textarea rows={ 4 } className="form-control col-7" name="sourceCode" placeholder="Source Code" required></textarea>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">Post</Button>
          </ModalFooter>
        </form>
      </Modal>
      {/* Modal Post Videos */ }


      {/* Model Profile Details */ }

      <Modal isOpen={ flagProfile } toggle={ toogleProfile }>
        <ModalHeader>Profile</ModalHeader>
        <ModalBody>
          <div className="form-group form-inline">
            <label className="col-3">Name:</label>
            <input className="form-control col-7" value={ "hi" } disabled />
          </div>
        </ModalBody>
      </Modal>
      <ToastsContainer store={ ToastsStore } />
    </div >
  );
}

const itemCenter = {
  alignItems: "center",
  textAlign: "center"
} as React.CSSProperties;
