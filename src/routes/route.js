import React from 'react';
import Main from '../containers/main';
import HomePage from '../containers/Homepage/homepage';
import Mario from '../containers/Mario/mario';

import { Route, IndexRoute } from "react-router";



export default (
  <Route path="/" component={Main}>

    <IndexRoute component={HomePage}/>
    <Route path="/mario" component={Mario} />

  </Route>
);


