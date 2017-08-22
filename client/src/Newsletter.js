import React, { Component } from 'react';
import './App.css';
import {Redirect} from 'react-router-dom'

export class Newsletter extends Component {
 

  render() {
    return (
      <div className="newsletter">
          <h1>Sign Up</h1>
          <h2>...for our very wet newsletter</h2>
         <div className='inlineFlex'>
            <div className='form-container borderSmoothed'>
                <input className='form-text' type='email' required/>
                
            </div>
            <button className='blueButton bradius h50'>Get Emailed</button>
        </div>
      </div>   
    );
  }
}

