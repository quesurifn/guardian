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

// NEW
import {Team} from './Team'
import {Blog} from './Blog'
import {RF} from './RF'
import {Controller} from './Controller'
import {Detector} from './Detector'
import {About} from './About'
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
        <Route exact path='/about' component={About} />
        <Route exact path='/team' component={Team} />
        <Route exact path='/technology' component={RF} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/valve-controller' component={Controller} />
        <Route exact path='/leak-detector' component={Detector} />
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