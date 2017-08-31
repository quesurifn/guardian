import React, { Component } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Row, Col} from 'react-materialize'
import {Link} from 'react-router-dom'
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './css/gallery.css'

import hero from './images/herotransweb.png'
import duck from './images/duckie.jpg'
import red from './images/btn-get-guardian-red.png'
import splash from './images/splash2.png'
import bluelogo from './images/guradian.png'
import reserve from './images/btn-reserve-one.png'
import cardone from './images/purchaseOne.png'
import cardtwo from './images/purchaseTwo.png'
import poster from './images/video-slate.jpg'
import pipe from './images/leaking-pipe.jpg'

import ScrollAnimation from 'react-animate-on-scroll'




export class Purchase extends Component {
    constructor() {
        super() 

        this.playvideo = this.playvideo.bind(this)

 
    }


    
      componentDidMount() {
        document.querySelector('nav').style.backgroundColor = 'transparent'
        document.querySelector('nav').style.position = 'absolute'
        document.querySelector('nav').style.boxShadow = 'none'
        document.querySelector('.nav-wrapper').style.backgroundColor = 'transparent'
        document.querySelector('.navbar-fixed').style.position = 'absolute'
        document.querySelector('.navbar-fixed').style.width = '100%'
        document.querySelector('.headerLogo').style.color = 'white'
        
        
        
        //ALL White
        var nodes = document.querySelector('nav').getElementsByTagName('a')

        for(var i=0; i<nodes.length; i++) {
            nodes[i].style.color = 'white';
        }
                
    }

    playvideo() {
        const video = this.refs.video;

        if (video.paused) {
            video.play()
        } else {
            video.pause()
        }
    }


  render() {
  
    return (
      <div>
        <Row>
            <Col s={12} className='gBlue'>
            <h1>prevent water damage</h1>
            <p>Meet <span>Guardian</span>, a stand alone system for leaks and floods.</p>
                <img src={hero} alt='hero' className='heroImg' />
                
            </Col>
        </Row>

       
      
        <Row>
            <Col s={12}>
                <video className='purchase' poster={poster} ref='video' onClick={this.playvideo}>
                    <source src='https://s3.us-east-2.amazonaws.com/dome-web-assets/purple-passion.mp4' type='video/mp4' />
                    Your browser does not support HTML5
                </video>
            </Col>
        </Row>
                <Row>
            <Col s={12} className='purchaseTwo'>
            <div className="gallery items-3 autoplay vue100">
                  <div id="item-1" className="control-operator"></div>
                  <div id="item-2" className="control-operator"></div>
                  <div id="item-3" className="control-operator"></div>

                  <figure className="item vue100">
                        <div className='anton'>
                            <ScrollTrigger onEnter={this.onEnter} onExit={this.onExit} />
                            <div className='text'>
                                    <h2 ref='titleOne'>one less thing...</h2>
                                    <h3 ref='titleTwo'>to worry about</h3>
                                    <img src={red} alt='red button' />
                                </div>
                        </div>

                  </figure>

                  <figure className="item vue100">
                    <div className='bg2'></div>
                  </figure>

                  <figure className="item vue100">
                    <h1>3</h1>
                  </figure>

                  <div className="controls">
                    <a href="#item-1" className="control-button">•</a>
                    <a href="#item-2" className="control-button">•</a>
                    <a href="#item-3" className="control-button">•</a>
                  </div>
                </div>

          

            </Col>
        </Row>
        <Row>
            <Col s={12}  className='leakingPipe'>
                <div>
                    <h2>There are more than 14,000 water damage claims a day.</h2>
                    <img src={pipe} alt='leaking pipe' />
                    <p>Americans file more water damage claims than fire. So wheres the water alarm system.</p>
                </div>
            </Col>
        </Row>
      </div>
    );
  }
}