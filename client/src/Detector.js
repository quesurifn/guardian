import React, { Component } from 'react'
import './App.css'
import './css/gallery.css'
import './css/valve.css'
import {Row, Col} from 'react-materialize'
import halfg from './images/half-g.png'
import schematic from './images/guardian-wire-1.jpg'

import tiles from './images/valve-tiles.jpg'

import leak from './images/water-detector-big-cut.png'


import one from './images/water-detector-section-1.png'
import two from './images/water-detector-section-2.png'
import three from './images/water-detector-section-3.jpg'
import appstore from './images/appstores.png'

export class Detector extends Component {
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
        
          <div className="item bgWater controllerSlideOne">
            <Row>
              <Col s={12}>
                <h1 style={{textAlign:'center'}}>The Smartest Water Detector Yet</h1>
              </Col>
              
              <Col s={12} m={5} className='padding20'>
                <h2>3 SENSORS IN 1</h2>
                <p style={{maxWidth:'90%'}}>Super flexible, use anywhere, anything you want to monitor.</p>
                <button style={{paddingLeft: '0px', marginLeft: '120px', background: '#363636'}}>GET GUARDIAN</button>
              </Col>
              <Col s={12} m={7} className='relative detector'>
                <img src={leak} alt='half guardian' />
              </Col>
            </Row>
          </div> 



        <Row >
          <div className='controllerFeatures'>
           <Row>
             <h2>DETECT WATER USING THREE SEPARATE SETS OF SENSORS</h2>
            <Col l={6} m={12}>
              <img src={one} alt='valve schematic' />

            </Col>
            <Col l={6} m={12} className='schemaFlex'>
              <p>
                <span>Main Sensors</span>     The Main Sensors can be placed near toilets, refrigerators, water heaters, and most other appliances and fixtures. 
              </p>


               <p>
                <span>Drip Sensor</span>    The Drip Sensor can detect as little as three drops of water, and should be placed underneath potential leaks, for example under toilet drains or sinks. 
              </p>

               <p>
                <span>Remote Sensor Probe</span>   The Remote Probe can monitor tight spaces and can even notify you before a sump pump overflows. 
              </p>

            </Col>
          </Row>

          <hr />
            <Row>
             
            <Col l={6} m={12} className='schemaFlex'>
              <p>
                <span>3RD PARTY INTEROPERABILITY</span>    The Water Detectors communicate directly with the Valve Controller using a proprietary wireless protocol without hubs and other unnecessary hardware.
              </p>


               <p>
                <span>IOS &amp; ANDROID APP</span>  Our well-documented and open API lets you control and monitor Guardian with 3rd party systems using the same app as your other smart home devices.
              </p>

               <p>
                <span>Valve Calibration</span>   The simple and intuitive iOS and Android apps let your system and interact with it easily, from anywhere in the world. 
              </p>

              <img className='app' src={appstore} alt='app store' />
            </Col>

            <Col l={6} m={12}>
              <img className='specialCase' src={two} alt='valve schematic' />

            </Col>
          </Row>
            <hr />
        <Row>
            <Col l={6} m={12}>
              <img src={three} alt='valve schematic' />

            </Col>
            <Col l={6} m={12} className='schemaFlex'>
              <p>
                <span>15-year Battery Life</span>     The Water Detectors stay powered on for fifteen years with the included battery, and Guardian will notify you when the battery runs low. 
              </p>


               <p>
                <span>Waterproof Housing</span>    Reuse your Water Detectors even after a leak - its waterproof housing protects it from water damage. 
              </p>

               <p>
                <span>Extreme Wireless Range</span>   The Water Detectors communicate directly with the Valve Controller using radio waves, and can be placed up to 1000’ away. 
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
