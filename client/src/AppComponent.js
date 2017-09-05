import React, { Component } from 'react';
import './App.css';

import apple from './images/apple.png'
import google from './images/google.png'

export class AppComponent extends Component {
   
  render() {
    return (
      <div className='gApp'>
        <h1>GUARDIAN APP</h1>
        <h2>Coming soon to the...</h2> 
        <div className='appFlex'>
            <img src={apple} alt='apple' />
            <img src={google} alt='google' />
        </div>
      </div>   
    );
  }
}
