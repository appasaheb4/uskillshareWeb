import * as React from "react";

// import { renderRoutes } from 'react-router-config';
import Loadable from "react-loadable";
import { Provider } from "react-redux";
import { store } from "./redux";

import { BrowserRouter, Switch, Route } from "react-router-dom";
const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const Home = Loadable( {
  loader: () =>
    import( "./screen/Home/Home" ),
  loading
} );

const About = Loadable( {
  loader: () =>
    import( "./screen/About/About" ),
  loading
} )
const Contact = Loadable( {
  loader: () =>
    import( "./screen/Contact/Contact" ),
  loading
} )
const PostNotesDetails = Loadable( {
  loader: () =>
    import( "./screen/PostNotes/PostNotesDetails" ),
  loading
} )

export default function App( props: any ) {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path={ "/" } component={ Home } />
          <Route exact path={ "/about" } component={ About } />
          <Route exact path={ "/contact" } component={ Contact } />
          <Route exact path={ "/postNotes" } component={ PostNotesDetails } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}        