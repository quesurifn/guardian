import React, { Component } from 'react';
import './App.css';

import axios from 'axios'



import {Row, Container, Col, Button} from 'react-materialize'
import soon from './images/comingsoon.png'

export class Home extends Component {
  constructor() {
    super() 

    this.submit = this.submit.bind(this);
  }

  submit() {
    if (this.refs.email.checkValidity()) {
      axios.post('/api/email', {
        email: this.refs.email
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
            <Col s={6}>
              <img src={soon} alt='guardian' className='responsive-img' />
            </Col>

            <Col s={6}>
            
                <h1>Sign up for updates</h1>
                <div ref='container' className='inlineFlex'> 
                  <div className='form-container'>
                    <input type='email' ref='email' className='form-text' placeholder='you@yourdomain.com' />
                  </div>
                  <Button waves='light' onClick={this.submit}>Submit</Button>
                </div>
                <p className='thx' ref='thx'>Thank you!</p>

            </Col>


          </Row>
        </Container>
      </div>
    
    );
  }
}


