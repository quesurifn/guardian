import React, { Component } from 'react';
import './App.css';

import axios from 'axios'
import logo from './images/g-logo.png'



import {Row, Container, Col, Button} from 'react-materialize'


export class Home extends Component {
  constructor() {
    super() 

    this.submit = this.submit.bind(this);
  }

  submit() {
    if (this.refs.email.checkValidity()) {
            fetch('/api/email', {
              method: 'post',
              body: JSON.stringify({
                email: this.refs.email.value
                
              })
            })
            .then(r => {
                this.refs.thx.style.display = 'block'
                this.refs.container.style.display = 'none'
            })
            .catch(e => {
              console.log(e)
            })
    }

  }

  render() {
   
    return (
      <div className="app">
        <Container>
          <Row>
           

            <Col s={12}>
                <img src={logo} alt='guardian Logo' className='logo' /> 
                <h1>Prevent Water Damage</h1>
                <h2>Notify Me When Guardian Arrives</h2>
                <div ref='container' className='inlineFlex'> 
                  <div className='form-container'>
                    <input type='email' ref='email' className='form-text' placeholder='you@yourdomain.com' />
                  </div>
                  <Button waves='light' onClick={this.submit}>Notify Me</Button>
                </div>
                <p className='thx' ref='thx'>Thank you!</p>
                <div className='bottom'>
                  <a href='http://elexausa.com'>WWW.ELEXAUSA.COM</a>
                </div>
            </Col>


          </Row>
        </Container>
      </div>
    
    );
  }
}


