import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Particles } from '@blackbox-vision/react-particles';
const ParticlesJs = () => (
    <div>
        <Particles
            id="simple"
            width="auto"
            style={ {
                backgroundColor: '#7798FF',
            } }
            params={ {
                particles: {
                    number: {
                        value: 50,
                    },
                    size: {
                        value: 3,
                    },
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse',
                        },
                    },
                },
            } }
        />
        <div
            style={ {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
            } }
        >
            <App />
        </div>
    </div>
);

ReactDOM.render( <ParticlesJs />, document.getElementById( "root" ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
