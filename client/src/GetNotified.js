import React, { Component } from 'react';
import './App.css';
import {Redirect} from 'react-router-dom'
import axios from 'axios'

export class GetNotified extends Component {
     constructor() {
        super() 
            this.submitEmail= this.submitEmail.bind(this);
        
    }
 

    submitEmail() {
        let email = this.refs.newsletter.value

        axios.post('/email', {
            list: 'getnotified',
            email: email
        })
        .then(r => {
            console.log(r)
            this.props.history.push('/')
        })
        .catch(e => {
            console.log(e)
        })
    }


  render() {
    return (
      <div className="newsletter">
          <h1>Get Notified</h1>
          <h2>...when you can find Guardian in stores</h2>
         <div className='inlineFlex'>
            <div className='form-container borderSmoothed'>
                <input className='form-text noborder' placeholder='you@yourdomain.com' type='email'  required/>
                
            </div>
            <button className='blueButton bradius h50' onClick={this.submitEmail}> Get Notified</button>
        </div>
      </div>   
    );
  }
}

