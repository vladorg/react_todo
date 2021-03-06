import React from 'react';
import Home from '~p/home';
import About from '~p/about';
import Error404 from '~p/404';
import store from '~s';

const TEXT = store.textsStore;
 const ROOT = '/';
//const ROOT = '/react_todo/';

const routes = [
  {
    name: 'home',
    path: `${ROOT}`,
    component: () => <Home/>,
    exact: true,
    menu: true,
    placeholder: TEXT.nav_home
  },
  {
    name: 'about',
    path: `${ROOT}about`,
    component: () => <About/>,
    exact: true,
    menu: true,
    placeholder: TEXT.nav_about
  },


  
  {
    name: '404',
    path: '**',    
    component: () => <Error404/>,
    exact: false,
    menu: false,
    placeholder: null
  }
]


export default routes;