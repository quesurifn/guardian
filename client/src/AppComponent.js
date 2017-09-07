

import React, { Component } from 'react'
import './App.css'
import './css/gallery.css'
import './css/valve.css'
import {Row, Col} from 'react-materialize'
import halfg from './images/half-g.png'
import schematic from './images/guardian-wire-1.jpg'

import tiles from './images/valve-tiles.jpg'

import leak from './images/water-detector-big-cut.png'
import handapp from './images/hand-app.png'
import handextras from './images/app-extras.png'


import one from './images/vc-section-1.jpg'
import two from './images/photo2.png'
import appstore from './images/appstores.png'

export class AppComponent extends Component {
       constructor() {
        super()
           

        this.playvideo = this.playvideo.bind(this)

 
    }
    playvideo() {
        const video = this.refs.video;

        if (video.paused) {
            video.play()
        } else {
            video.pause()
        }
    }
   componentDidMount() {
        document.querySelector('nav').style.backgroundColor = 'transparent'
        document.querySelector('nav').style.position = 'absolute'
        document.querySelector('nav').style.boxShadow = 'none'
        document.querySelector('.nav-wrapper').style.backgroundColor = 'transparent'
        document.querySelector('.navbar-fixed').style.position = 'absolute'
        document.querySelector('.navbar-fixed').style.width = '100%'
        document.querySelector('.headerLogo').style.color = '#2050c2'
        document.querySelector('.navbar-fixed').style.top = '20px'
        
        window.scrollTo(0, 0)
        
        //ALL White
        var nodes = document.querySelector('nav').getElementsByTagName('a')

        for(var i=0; i<nodes.length; i++) {
            nodes[i].style.color = '#363636';
        }
                
    }

  render() {
    return (
      <div className="valvePage">
       
          <div className="item bgValve controllerSlideOne">
            <Row>
              <Col s={12}>
                <h1 style={{textAlign:'center'}}>A Top Class Mobile Experience</h1>
              </Col>
              
              <Col s={12} m={5} className='padding20'>
                <h2>EASY &amp; INTUITIVE </h2>
                <p style={{maxWidth:'90%'}}>It learns your valve automatically during setup, and works as expected during setup.</p>
                <button style={{paddingLeft: '0px', marginLeft: '120px', background: '#363636'}}>GET GUARDIAN</button>
              </Col>
              <Col s={12} m={7} className='relative detector'>
                <img src={handapp} alt='half guardian' />
              </Col>
            </Row>
          </div> 

         


        <Row >
          <div className='controllerFeatures'>
           <Row>
             <h2>FOR PEACE OF MIND</h2>
            <Col l={6} m={12}>
              <img src={handextras} alt='valve schematic' />

            </Col>
            <Col l={6} m={12} className='schemaFlex'>
              <p>
                <span>Weather Alerts</span> Receive notifications when severe weather conditions are headed your way.
              </p>


               <p>
                <span>ACTIVITY LOG</span>  Search through logs of events to see when something happened, either for yourself or insurance purposes.
              </p>

               <p>
                <span>EASY SETUP</span>   The app walks you through steps to calibrate Guardian to your valve and provides instructions for installing all equipment.
              </p>
               <p className='specialMarg'>
                <span>EASY INTERFACE</span> No frills interface lets you get on with your life and focus on what matters.
              </p>
        
            </Col>
          </Row>
          </div>
        </Row>

   
         
        <Row>
            <Col s={12}>
                <video className='purchase' ref='video' poster='http://www.cityrider.com/fixed/43aspect.png' onClick={this.playvideo}>
                    <source src='https://s3-us-west-2.amazonaws.com/getguardian/guardian-background.mp4' type='video/mp4' />
                    Your browser does not support HTML5
                </video>
            </Col>
        </Row>
          
         
      </div>   
    );
  }
}
