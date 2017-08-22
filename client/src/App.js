import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import {Home} from './Home'
import {NotFound} from './NotFound'

import {Header} from './Header'
import {Foot} from './Footer'
import {Options} from './Options'
import {Newsletter} from './Newsletter'
import {GetNotified} from './GetNotified'


export const App = () => (
  <div>

    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/options" component={Options} />
        <Route exact path='/newsletter' component={Newsletter} />
        <Route exact path='/notify' component={GetNotified} />
        <Route component={NotFound} />
      </Switch>
    </main>



  </div>
)