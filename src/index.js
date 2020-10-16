import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import './assets/lib/bootstrap/css/bootstrap.min.css'
import './assets/lib/font-awesome/css/font-awesome.min.css'
import './assets/SCSS/index.scss'

import * as serviceWorker from './serviceWorker';
import Navbar from './Components/Navbar' ;
import HomePage from './Components/Home' ;
import AboutPage from './Components/About' ;
import MenuPage from './Components/Menu' ;
import EventPage from './Components/Event' ;
import GalleryPage from './Components/Gallery'
import ChefsPage from './Components/Chefs'
import ContactPage from './Components/Contact'
import BookEventPage from './Components/Book'
// import HomeLink from './Components/HomeLink'

ReactDOM.render(
  <BrowserRouter>
    {/* <HomeLink /> */}
    <Navbar />
    <Switch>
      <Route 
        path="/home"
        component={HomePage}
      />
      <Route 
        path="/about"
        component={AboutPage}
      />
      <Route 
        path="/menu"
        component={MenuPage}
      />
      <Route 
        path="/event"
        component={EventPage}
      />
      <Route 
        path="/gallery"
        component={GalleryPage}
      />
      <Route 
        path="/chefs"
        component={ChefsPage}
      />
      <Route 
        path="/contact"
        component={ContactPage}
      />
      <Route 
        path="/book"
        component={BookEventPage}
      />


      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
