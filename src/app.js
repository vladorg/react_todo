import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'mobx-react';

import Header from '~c/header';
import Footer from '~c/footer';
import Home from '~p/home';
import About from '~p/about';

import stores from '~s';

export default function() {
  return (
    <>      
      <Provider stores={stores}>
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
      </Provider>
    </>
  )
}