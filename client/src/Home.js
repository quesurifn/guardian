import React, { Component } from 'react';
import './App.css';

import cardOne from './images/leak.png'


import {connect} from 'react-redux'

export class Home extends Component {

  render() {

    return (
      <div className="App">
        <div className='row'>
          <div className='col-md-12'>
            <div className='heroBG'></div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='sectionTwo'>
              <p>There are more than 14,000 water damage claims each day, costing U.S. insurance companies and homeowners billions of dollars.</p>
            </div>
          </div>
        </div>
        <div className='row sectionThree'>
          <div className='col-md-6'>
            <div className='cardOne'>

              <img src={cardOne} alt='cardOne' />
              <div className='cardOneBottom'> 
                <h2>Toolless Installation</h2>

                <p>No plumbing. No tools. Guardian was designed so that anyone can install it in minutes.</p>

                <div className='watch'>
                  <span>WATCH VIDEO</span>
                </div>
              </div> 
            </div>
          </div>
          <div className='col-md-6'>
            
          </div>
        </div>
      </div>

      

    
    );
  }
}


