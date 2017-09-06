import React, { Component } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Row, Col, Container} from 'react-materialize'
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

import recut from './images/home-valve-recut.png'
import leak from './images/leaksensor.png'
import last from './images/guardian-set.jpg'


import ScrollAnimation from 'react-animate-on-scroll'




export class Purchase extends Component {
    constructor() {
        super()
            this.state = {
                firstSlide: true
            }

        this.playvideo = this.playvideo.bind(this)

 
    }


    
      componentDidMount() {

        document.querySelector('nav').style.backgroundColor = 'transparent'
                document.querySelector('nav').style.position = 'absolute'
                document.querySelector('nav').style.boxShadow = 'none'
                document.querySelector('.nav-wrapper').style.backgroundColor = 'transparent'
                document.querySelector('.navbar-fixed').style.position = 'absolute'
                document.querySelector('.navbar-fixed').style.width = '100%'
                document.querySelector('.navbar-fixed').style.top = '20px'
                document.querySelector('.headerLogo').style.color = '#1C56C0'
                var nodes = document.querySelector('nav').getElementsByTagName('a');
                for(var i=0; i<nodes.length; i++) {
                    nodes[i].style.color = '#2C60BF';
                }    
 
         window.scrollTo(0, 0)

 
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
          
            <Col s={12} className='purchaseTwo'>          
                <div className='homeOne'>
                    <h2>#YOUCOULDEASILY</h2>
                    <h1>PREVENT WATER DAMAGE</h1>
                    <button><Link to='/buy'>GET GUARDIAN</Link></button>
                </div>
            </Col>
        </Row>
        <Row> 
            <Col s={12} className='homeTwo'>
                <img src={recut} alt='valve on pipe' className='one' />
                <div className='boxed'>
                    <h1>&ldquo;MORE PEOPLE SUFFER FROM WATER DAMAGE THAN FIRE&rdquo;</h1>
                    <Link to='buy'><img src={red} alt='red button' style={{display: 'block', margin: 'auto'}} /></Link>
                    <h2>SHIPPING SOON</h2>
                    <p>Water damage costs time, money, aggravation and ruins family heirlooms.</p>
                </div>
                
            </Col>
        </Row>
        {/*}
        <Row>
            <Col s={12} className='homeThree'>
                <h1>&ldquo;This didn't have to happen...&rdquo;</h1>
                <img src={splash} alt='splash'/>
            </Col>
        </Row>
        */}
        <Row>
            <Col s={12} className='homeFour'>
                <h1>&ldquo;The first solution that detects the first drop and actually does something about it.&rdquo;</h1>
                <img src={leak} alt='leak detector'/>
                <button><Link to='/buy'>Get Guardian</Link></button>
                <h2>SHIPPING SOON</h2>
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
        <Row>
            <Col s={12}  className='leakingPipe homeFive'>
                <div>
                    <h2>There are more than 14,000 water damage claims a day.</h2>
                    <img className='one' src={pipe} alt='leaking pipe' />
                    <p>Guardian communicates with <Link to='/water-detectors'>Water Detectors</Link> throughout your home to know when there is a leak, and shuts off your water to prevent further damage while notifying you of the leak.  Guardian installs with no tools, no plumber, and no pipe cutting - simply Install, Connect, and Protect.</p>

                    <Link to='/buy'><img className='two' src={red} alt='red button' /></Link>
                </div>
            </Col>
        </Row>
        <Row>
            <Col s={12}  className='homeSix'>
                <Container>

                    <Row>
        
                        <div className='homeFlex'>
                            <div className='left'>
                                <h3>Order Guardian ahead and save</h3>
                                <h2>Guardian Leak Prevention Kit</h2>
                                <p>The Guardian Leak Prevention Kit includes everything you need to protect your home from leaks.</p>
                                <button><Link to='/valve-controller'>LEARN MORE</Link></button>
                            </div>
           

                            <img src={last} alt='last two' />
                        </div>
         
                    
                    </Row>
                </Container>


            </Col>
            <Col s={12} className='hideCol'>
                <img src={last} alt='last two' />
            </Col>
        </Row>
      </div>
    );
  }
}