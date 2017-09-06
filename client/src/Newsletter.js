import React, { Component } from 'react'
import './App.css'
import {Redirect} from 'react-router-dom'
import axios from 'axios'




export class Newsletter extends Component {
    constructor() {
        super() 
            this.submitEmail= this.submitEmail.bind(this);
        
    }
    componentDidMount() {
         window.scrollTo(0, 0)
    }
 
 

    submitEmail() {
        let email = this.refs.newsletter.value

        axios.post('/email', {
            list: 'newsletter',
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
          <h1>Sign Up</h1>
          <h2>...for our very wet newsletter</h2>
         <div className='inlineFlex'>
            <div className='form-container borderSmoothed'>
                <input ref='newsletter' className='form-text noborder' placeholder='you@yourdomain.com' type='email' required/>
                
            </div>
            <button className='blueButton bradius h50' onClick={this.submitEmail}>Get Emailed</button>
        </div>
      </div>   
    );
  }
}

