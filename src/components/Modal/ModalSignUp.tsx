// import React from "react";
// import {
//     Button,
//     Jumbotron, Row, Col,
//     Modal, ModalHeader, ModalBody, ModalFooter
// } from 'reactstrap';

// import { apiary } from "../../common/constants/Constants";
// import { getUnixTimeDate } from "../../common/constants/utils";
// import fonts from "../../common/Fonts";
// import colors from "../../common/Colors";


// import { useDispatch } from "react-redux";
// import { onCommonPostInsert } from "../../redux/actions/common";

// export default function ModalSignUp( props ) {
//     const dispatch = useDispatch();

//     // Sign Up  
//     const click_SignUp = async ( e ) => {
//         e.preventDefault();
//         if ( e.target.password.value == e.target.confirmPassword.value ) {
//             props.setLoginType( "signUp" );
//             let data = {
//                 date: getUnixTimeDate( new Date() ),
//                 name: e.target.name.value,
//                 mobileNo: e.target.mobileNo.value,
//                 email: e.target.email.value,
//                 password: e.target.confirmPassword.value
//             }
//             dispatch( onCommonPostInsert( { url: apiary.registration, data } ) );
//         } else {
//             console.log( { error: "Please enter correct password." } );
//         }
//     }

//     return (
//         <Modal isOpen={ props.data.signUpModal } toggle={ props.toogleSignUpModel() } >
//             <ModalHeader>Sign Up</ModalHeader>
//             <form onSubmit={ ( e ) => click_SignUp( e ) }>
//                 <ModalBody>
//                     <div className="form-group form-inline">
//                         <label className="col-3">Name</label>
//                         <input className="form-control col-7" type="text" name="name" placeholder="Name" required />
//                     </div>
//                     <div className="form-group form-inline">
//                         <label className="col-3">Mobile No</label>
//                         <input className="form-control col-7" type="text" name="mobileNo" placeholder="Mobile No" required />
//                     </div>
//                     <div className="form-group form-inline">
//                         <label className="col-3">Email</label>
//                         <input className="form-control col-7" type="email" name="email" placeholder="Email" required />
//                     </div>
//                     <div className="form-group form-inline">
//                         <label className="col-3">Password</label>
//                         <input className="form-control col-7" type="password" name="password" placeholder="Password" required />
//                     </div>
//                     <div className="form-group form-inline">
//                         <label className="col-3">Confirm Password</label>
//                         <input className="form-control col-7" type="password" name="confirmPassword" placeholder="Confirm Password" required />
//                     </div>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button type="submit" color="primary" >Sign Up</Button>
//                 </ModalFooter>
//             </form>
//         </Modal>
//     )
// }