import React from 'react';
import { Route, Switch } from 'react-router-dom'
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