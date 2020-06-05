import React, { useState } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import HomePage from './components/HomePage';

export default function Routes(){
    return(
      <div>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </HashRouter>
      </div>
    );
}