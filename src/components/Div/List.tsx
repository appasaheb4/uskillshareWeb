import React, { useState, useEffect } from "react";
import "../../common/Styles.css"

import Fonts from "../../common/Fonts";
import Colors from "../../common/Colors";
import Images from "../../common/Images";

import listJson from "../../assets/json/list.json";

export default function List( props ) {
    const [ data, setData ] = useState( [] );

    useEffect( () => {
        setData( listJson.data )
    }, [] )
    return (
        <div>
            <div className="row form-group" style={ { padding: 20 } }>
                { data.map( ( item: any ) =>
                    <div className="col-md-3 listItem">
                        <div className="form-group">
                            <span style={ { fontFamily: Fonts.FiraSansRegular, color: Colors.textColorGrey } }>{ item.lang }</span><br />
                            <span style={ { fontFamily: Fonts.FiraSansBold, fontSize: 18, fontWeight: "bold" } }>{ item.title }</span><br />
                            <span style={ { fontFamily: Fonts.FiraSansRegular } }>Push notifications are small
                                messages that can reach audiences anywhere
                                and anytime. While pop-ups appear only when audiences
                                are on the site they belong to, push messages are independent of sites.
                         They are associated with web browsers and apps.</span>
                        </div>
                        <div className="form-group">
                            <img src={ require( "../../assets/images/appasaheb.jpeg" ) }
                                className="rounded-circle "
                                style={ { width: 30, height: 30, float: "left" } }
                                alt="Cinque Terre" />
                            <span
                                className="float-md-right"
                                style={ { float: "right" } }
                            >3 MIN READ</span>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                ) }
            </div>
        </div>
    )
}   
