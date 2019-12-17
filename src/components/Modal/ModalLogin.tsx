// import React, { useEffect } from "react";
// import {
//     Button,
//     Jumbotron, Row, Col,
//     Modal, ModalHeader, ModalBody, ModalFooter
// } from 'reactstrap';

// import { apiary } from "../../common/constants/Constants";
// import fonts from "../../common/Fonts";
// import colors from "../../common/Colors";

// import { useDispatch } from "react-redux";
// import { onCommonPostInsert } from "../../redux/actions/common";

// export default function ModalLogin( props ) {


//     useEffect( () => {
//         console.log( { props } );

//     }, [] )

//     const dispatch = useDispatch();
//     const click_Login = async ( e ) => {
//         e.preventDefault();
//         props.setLoginType( "login" );
//         let data = {
//             email: e.target.email.value,
//             password: e.target.password.value
//         }
//         dispatch( onCommonPostInsert( { url: apiary.loginUser, data } ) );
//     }


//     return (
//         <Modal isOpen={ props.data.loginModal } toggle={ props.toogleModel() } >
//             <ModalHeader>Login</ModalHeader>
//             <form onSubmit={ ( e ) => click_Login( e ) }>
//                 <ModalBody>
//                     <div className="form-group form-inline">
//                         <label className="col-3">Email</label>
//                         <input className="form-control col-7" type="email" name="email" placeholder="Email" required />
//                     </div>
//                     <div className="form-group form-inline">
//                         <label className="col-3">Password</label>
//                         <input className="form-control col-7" type="password" name="password" placeholder="Password" required />
//                     </div>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button type="submit" color="primary" >Login</Button>
//                 </ModalFooter>
//             </form>
//         </Modal>
//     )
// }