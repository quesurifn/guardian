import React, { Component } from 'react';
import './App.css';
import './css/gallery.css'
import {Row, Col} from 'react-materialize'
import halfg from './images/half-g.png'
import schematic from './images/guardian-wire-1.jpg'

export class Controller extends Component {
   componentDidMount() {
        document.querySelector('nav').style.backgroundColor = 'transparent'
        document.querySelector('nav').style.position = 'absolute'
        document.querySelector('nav').style.boxShadow = 'none'
        document.querySelector('.nav-wrapper').style.backgroundColor = 'transparent'
        document.querySelector('.navbar-fixed').style.position = 'absolute'
        document.querySelector('.navbar-fixed').style.width = '100%'
        document.querySelector('.headerLogo').style.color = '#2050c2'
        
        
        
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

          <figure className="item gradient hundredHeight controllerSlideOne">
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
                <button>Learn More</button>
              </Col>
            </Row>
          </figure> 

          <figure className="item gradient hundredHeight">
            <h1>2</h1>
          </figure>

          <figure className="item gradient hundredHeight">
            <h1>3</h1>
          </figure>

          <div className="controls">
            <a href="#item-1" className="control-button" style={{color:'#363636'}}>•</a>
            <a href="#item-2" className="control-button"style={{color:'#363636'}}>•</a>
            <a href="#item-3" className="control-button"style={{color:'#363636'}}>•</a>
          </div>
        </div>


        <Row >
          <div className='controllerFeatures'>
           <Row>
             <h2>Features</h2>
            <Col l={6} m={12}>
              <img src={schematic} alt='valve schematic' />

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
          </div>
        </Row>
         
      </div>   
    );
  }
}
