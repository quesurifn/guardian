import React from 'react';
import { Route, Switch } from 'react-router-dom'
import {Home} from './Home'
import {NotFound} from './NotFound'

import Header from './Header'
import {Foot} from './Footer'
import {Options} from './Options'
import {Newsletter} from './Newsletter'
import {GetNotified} from './GetNotified'
import {Research} from './Research'
import {Purchase} from './Purchase'

// NEW

import {Controller} from './Controller'
import {Detector} from './Detector'
import {Howto} from './Howto'
import {Buy} from './Buy'
import {AppComponent} from './AppComponent'




export const App = () => (
  <div>

    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Purchase} />
        <Route exact path="/options" component={Options} />
        <Route exact path='/newsletter' component={Newsletter} />
        <Route exact path='/valve-controller' component={Controller} />
        <Route exact path='/water-detector' component={Detector} />
        <Route exact path='/notify' component={GetNotified} />
        <Route exact path='/research' component={Research} />
        <Route exact path='/purchase' component={Purchase} />
        <Route exact path='/howto' component={Howto} />
        <Route exact path='/buy' component={Buy} />
        <Route exact path='/app' component={AppComponent} />
        <Route path='*' component={NotFound} />
      </Switch>

    </main>

    {/*<Foot /> */}

  </div>
)