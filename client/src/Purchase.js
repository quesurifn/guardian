import React, { Component } from 'react';
import './App.css';
import {Button, Row, Col} from 'react-materialize'
import {Link} from 'react-router-dom'

import hero from './images/hero.png'
import duck from './images/duckie.jpg'
import red from './images/btn-get-guardian-red.png'




export class Purchase extends Component {
      componentDidMount() {
        document.querySelector('nav').style.backgroundColor = 'transparent'
        document.querySelector('nav').style.position = 'absolute'
        document.querySelector('nav').style.boxShadow = 'none'
        document.querySelector('.nav-wrapper').style.backgroundColor = 'transparent'
        document.querySelector('.navbar-fixed').style.position = 'absolute'
        document.querySelector('.navbar-fixed').style.width = '100%'
        
        
        
        //ALL White
        var nodes = document.querySelector('nav').getElementsByTagName('a')

        for(var i=0; i<nodes.length; i++) {
            nodes[i].style.color = 'white';
        }
                
    }
    

  render() {
  
    return (
      <div>
        <Row>
            <Col s={12} className='gBlue'>
                <img src={hero} alt='yoyoyo' className='purchaseHero'/>
            </Col>
        </Row>
        <Row>
            <Col s={12} className='purchaseTwo'>
               <div className='anton'>
                   <div className='text'>
                        <h2>one less thing...</h2>
                        <h3>to worry about</h3>
                        <img src={red} alt='red button' />
                    </div>
               </div>


            </Col>
        </Row>
        <Row>
            <Col s={12} className='purchaseThree'>
                <p>Americans are more likely to experience water damage than fire.</p>
            </Col>
        </Row>
        <Row>
            <Col s={12} className='purchaseFour'>
                <div>
                

                </div>
            </Col>
        </Row>
      </div>
    );
  }
}