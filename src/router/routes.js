import React from 'react';

import Home from '~p/home';
import About from '~p/about';
import Error404 from '~p/404';

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => <Home/>,
    exact: true
  },
  {
    name: 'about',
    path: '/about',
    component: () => <About/>,
    exact: true
  },
  {
    name: '404',
    path: '**',
    component: () => <Error404/>,
    exact: false
  }
]


export default routes;