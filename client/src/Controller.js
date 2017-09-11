import React, { Component } from 'react'
import './App.css'
import './css/gallery.css'
import './css/valve.css'
import {Row, Col} from 'react-materialize'
import halfg from './images/half-g.png'
import schematic from './images/guardian-wire-1.jpg'
import {Link} from 'react-router-dom'

import tiles from './images/valve-tiles.jpg'
import duck from './images/half-duck.png'

import one from './images/vc-section-1.jpg'
import two from './images/photo2.png'
import appstore from './images/appstores.png'

export class Controller extends Component {
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
            nodes[i].style.color = '#2050C2'
            nodes[i].style.fontWeight = 'normal'
        }
                
    }



  render() {
    return (
      <div className="valvePage">
       

          <div className="item bgValve special  controllerSlideOne" style={{height: '125vh'}}>
            <Row>
              <Col s={12}>
               <h1 style={{textAlign:'center'}}>Introducing the Valve Controller</h1>
              </Col>
              <Col s={12} m={7} className='relative' >
                <img src={halfg} alt='half guardian' />
              </Col>
              <Col s={12} m={5} className='padding20' style={{paddingLeft: '0px'}}>
                <h2 style={{paddingLeft: '0px'}}>ROBUST &amp; RELIABLE</h2>
                <p style={{paddingLeft: '0px'}} className='respHeight'>Battery Backup, offline functionality, and more.</p>
                <button className='respvbutton' onClick={() => this.props.history.push('/buy')} style={{paddingLeft: '0px', background: '#007cea', height: '70px'}}>GET GUARDIAN</button>
                <img className='duck'  src={duck} alt='duck' />
              </Col>
            </Row>
          </div> 

    


        <Row >
          <div className='controllerFeatures'>
           <Row>
             <h2 style={{color: '#449ddf'}}>MORE THAN JUST AN AUTOMATIC VALVE</h2>
            <Col l={6} m={12}>
              <img src={one} alt='valve schematic ' className='width90 ' />

            </Col>
            <Col l={6} m={12} className='schemaFlex'>
              <p>
                <span>No Tools Needed</span>     The Valve Controller is ready to install out of the box, without any tools - the hand-tightened clamps grip the unit securely to your valve. 
              </p>


               <p>
                <span>Use Your Existing Valve</span>    You don't need a special valve to use Guardian - only a standard quarter-turn ball valve.  
              </p>

               <p>
                <span>Valve Calibration</span>   You don't need a special valve to use Guardian - only a standard quarter-turn ball valve.  
              </p>

            </Col>
          </Row>

          <hr />
            <Row>
             
            <Col l={6} m={12} className='schemaFlex special'>
            <div className='left80'>
              <p >
                <span>3RD PARTY INTEROPERABILITY</span>    Our well-documented and open API lets you control and monitor Guardian with 3rd party systems using the same app as your other smart home devices.
              </p>


               <p>
                <span>IOS &amp; ANDROID APP</span>  The simple and intuitive iOS and Android apps let your system and interact with it easily, from anywhere in the world.
              </p>

               <p>
                <span>Direct Communication</span>    The <Link to='/water-detector'>Water Detectors</Link> communicate directly with the Valve Controller using a proprietary wireless protocol without hubs and other unnecessary hardware.
              </p>

              <img className='app' src={appstore} alt='app store' />
              </div>
            </Col>

            <Col l={6} m={12}>
              <img className='specialCase blockAuto' src={two} alt='valve schematic' />

            </Col>
          </Row>
            <hr />
          </div>
        </Row>
  
        <Row>
          <Col s={12} className='thirdvalve'>
            <h2>Battery Backup</h2>
            <p>The Valve Controller's optional battery backup lets it monitor your system and close the valve for up to twelve hours without electricity</p>

            <h2>OFFLINE FUNCTIONALITY</h2>
            <p>Once configured, the internet is only required for off-site control and monitoring of the system, so the Valve Controller will still shut off your water even without the internet during a leak.</p>

            <h2>Extreme Longrange</h2>
            <p>The <Link to='/water-detector'>Water Detectors</Link> can be placed up to 1000' away from the Valve Controller, which means Guardian will protect large homes and even apartment buildings</p> 
            <button className='tileButton mobi' style={{display: 'none'}} onClick={() => this.props.history.push('/buy')}>GET GUARDIAN</button>
          </Col>
           
        </Row> 
        <button className='tileButton' onClick={() => this.props.history.push('/buy')}>GET GUARDIAN</button>
        <Row>
          <Col s={12} className='valveTiles'>
            <img src={tiles} alt='yes' />

          </Col>

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
