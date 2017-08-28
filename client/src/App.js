import React from 'react';
import { Route, Switch } from 'react-router-dom'
import {Home} from './Home'
import {NotFound} from './NotFound'

import {Header} from './Header'
import {Foot} from './Footer'
import {Options} from './Options'
import {Newsletter} from './Newsletter'
import {GetNotified} from './GetNotified'
import {Research} from './Research'
import {Purchase} from './Purchase'


export const App = () => (
  <div>

    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/options" component={Options} />
        <Route exact path='/newsletter' component={Newsletter} />
        <Route exact path='/notify' component={GetNotified} />
        <Route exact path='/research' component={Research} />
        <Route exact path='/purchase' component={Purchase} />
        <Route component={NotFound} />
      </Switch>
    </main>

    <Foot />

  </div>
)