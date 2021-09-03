import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Provider} from 'mobx-react';

import Header from '~c/header';
import Footer from '~c/footer';

import stores from '~s';
import {routesList} from '~/router';


export default function() {

  return (
    <>      
      <Provider stores={stores}>
        <BrowserRouter>
          <Header/>

          <Switch>
            {routesList}   
          </Switch>
          
          <Footer/>
        </BrowserRouter>
      </Provider>
    </>
  )
}