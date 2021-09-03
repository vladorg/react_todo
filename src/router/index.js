import React from 'react';
import {Route} from 'react-router-dom';
import routes from './routes';


const routesList = routes.map((route, i) => {
  return (
    <Route  
      key={i}
      path={route.path}
      component={route.component}
      exact={route.exact}
    />
  )
});

let routesMap = {};
routes.map(route => {
  routesMap[route.name] = route.path;
});

export {routesList, routesMap};


