import React, { Component } from 'react';
import './App.css';
import {Redirect} from 'react-router-dom'

export class GetNotified extends Component {
 

  render() {
    return (
      <div className="newsletter">
          <h1>Get Notified</h1>
          <h2>...when you can find Guardian in stores</h2>
         <div className='inlineFlex'>
            <div className='form-container borderSmoothed'>
                <input className='form-text noborder' placeholder='you@yourdomain.com' type='email'  required/>
                
            </div>
            <button className='blueButton bradius h50'>Get Notified</button>
        </div>
      </div>   
    );
  }
}

