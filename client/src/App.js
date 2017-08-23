import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import {Home} from './Home'

export const App = () => (
  <div>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>



  </div>
)