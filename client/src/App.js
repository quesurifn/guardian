import React from 'react';
import { Route, Switch } from 'react-router-dom'
import {Home} from './Home'
import {AppComponent} from './AppComponent'

export const App = () => (
  <div>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/app" component={AppComponent} />
        <Route path='*' component={Home} />
      </Switch>
    </main>
  </div>
)