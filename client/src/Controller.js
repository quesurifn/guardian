import React, { Component } from 'react'
import './App.css'
import './css/gallery.css'
import './css/valve.css'
import {Row, Col} from 'react-materialize'
import halfg from './images/half-g.png'
import schematic from './images/guardian-wire-1.jpg'

import tiles from './images/valve-tiles.jpg'


import one from './images/vc-section-1.jpg'
import two from './images/photo2.png'
import appstore from './images/appstores.png'

export class Controller extends Component {
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
        <div className="gallery items-3 hundredHeight">
          <div id="item-1" className="control-operator"></div>
          <div id="item-2" className="control-operator"></div>
          <div id="item-3" className="control-operator"></div>

          <figure className="item bgValve hundredHeight controllerSlideOne">
            <Row>
              <Col s={12}>
                <h1>Introducing the Valve Controller</h1>
              </Col>
              <Col s={12} m={7} className='relative'>
                <img src={halfg} alt='half guardian' />
              </Col>
              <Col s={12} m={5} className='padding20'>
                <h2>ROBUST &amp; RELIABLE</h2>
                <p>Battery Backup, offline functionality, and more.</p>
                <button>GET GUARDIAN</button>
              
              </Col>
            </Row>
          </figure> 

          <figure className="item gradient hundredHeight">
            <h1>2</h1>
          </figure>

          <figure className="item gradient hundredHeight">
            <h1>3</h1>
          </figure>
        </div>


        <Row >
          <div className='controllerFeatures'>
           <Row>
             <h2>MORE THAN JUST AN AUTOMATIC VALVE</h2>
            <Col l={6} m={12}>
              <img src={one} alt='valve schematic' className='width90' />

            </Col>
            <Col l={6} m={12} className='schemaFlex'>
              <p>
                <span>No Tools Needed</span>     The Valve Controller is ready to install out of the box, without any tools - the hand-tightened clamps grip the unit securely to your valve. 
              </p>


               <p>
                <span>Use Your Existing Valve</span>    You don't need a special valve to use Guardian - only a standard quarter-turn ball valve. Click here to see what valves Guardian is compatible with. 
              </p>

               <p>
                <span>Valve Calibration</span>   You don't need a special valve to use Guardian - only a standard quarter-turn ball valve. Click here to see what valves Guardian is compatible with. 
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

          </div>
        </Row>
        <hr />
        <Row>
          <Col s={12} className='thirdvalve'>
            <h2>Battery Backup</h2>
            <p>The Valve Controller's optional battery backup lets it monitor your system and close the valve for up to twelve hours without electricity</p>

            <h2>OFFLINE FUNCTIONALITY</h2>
            <p>Once configured, the internet is only required for off-site control and monitoring of the system, so the Valve Controller will still shut off your water even without the internet during a leak.</p>

            <h2>Extreme Longrange</h2>
            <p>The Water Detectors can be placed up to 1000' away from the Valve Controller, which means Guardian will protect large homes and even apartment buildings</p> 
          </Col>
        </Row> 
        <Row>
          <Col s={12} className='valveTiles'>
            <img src={tiles} alt='yes' />

          </Col>

        </Row>
        <Row>
            <Col s={12}>
                <video className='purchase' ref='video' poster='http://www.cityrider.com/fixed/43aspect.png' onClick={this.playvideo}>
                    <source src='https://s3.us-east-2.amazonaws.com/dome-web-assets/purple-passion.mp4' type='video/mp4' />
                    Your browser does not support HTML5
                </video>
            </Col>
        </Row>
          
         
      </div>   
    );
  }
}
