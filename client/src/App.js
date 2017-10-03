import React from 'react';
import { Route, Switch } from 'react-router-dom'

import {NotFound} from './NotFound'

import Header from './Header'

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
import {Checkout} from './Checkout'
import {Shop} from './Shop'
import xml from './sitemap.xml'



import './Routes.css'



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
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/shop' component={Shop} />
        <Route path='*' component={NotFound} />
      </Switch>

    </main>
    <div className='legal'> 
    <small>US and International Patent(s) Pending</small>
    </div>

    {/*<Foot /> */}

  </div>
)