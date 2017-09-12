import React, { Component } from 'react'
import './App.css'
import axios from 'axios'




export class Newsletter extends Component {
    constructor() {
        super() 
            this.submitEmail= this.submitEmail.bind(this);
        
    }
    componentDidMount() {
         window.scrollTo(0, 0)
        document.querySelector('nav').style.position = 'relative'
        document.querySelector('nav').style.boxShadow = 'none'
        document.querySelector('.nav-wrapper').style.backgroundColor = 'white'
        document.querySelector('.navbar-fixed').style.position = 'relative'
        document.querySelector('.navbar-fixed').style.width = '100%'
        document.querySelector('.navbar-fixed').style.top = '0px'
        document.querySelector('.headerLogo').style.color = '#1C56C0'
        var nodes = document.querySelector('nav').getElementsByTagName('a');
        for(var i=0; i<nodes.length; i++) {
            nodes[i].style.color = '#1C56C0';
        }  
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

