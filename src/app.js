import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '~c/header';
import Footer from '~c/footer';

import Home from '~p/home';
import About from '~p/about';

export default function() {

  return (
    <>
      
      <BrowserRouter>
        <Header/>

        <Switch>
          <Route  path="/"
                  component={Home}
                  exact
          />
          <Route  path="/about"
                  component={About}
                  exact
          />          
        </Switch>
        
        <Footer/>
      </BrowserRouter>

    </>
  )
}