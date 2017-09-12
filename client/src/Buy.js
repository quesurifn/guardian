import React, { Component } from 'react';
import './App.css';
import './css/gallery.css'
import axios from 'axios'
import ImageGallery from 'react-image-gallery';

import {Link} from 'react-router-dom'
import {Swipeable, defineSwipe} from 'react-touch';

import {Row, Col, Container} from 'react-materialize'
import 'react-image-gallery/styles/css/image-gallery-no-icon.css'
import guardian from './images/herotransweb.png'
import three from './images/how-slider-2.png'
import sldier3Valve from './images/how-slider-3.png' 
import slider4Valve from './images/how-slider-4.png'
import slider5Valve from './images/how-slider-5.png'


import sliderOne from './images/buy-1.jpg'
import sliderOneThumb from './images/buy-1-thumb.jpg'
import sliderTwo from './images/buy-2.jpg'
import sliderTwoThumb from './images/buy-2-thumb.jpg'
import sliderThree from './images/buy-3.jpg'
import sliderThreeThumb from './images/buy-3-thumb.jpg'
import sliderFour from './images/buy-4.jpg'
import sliderFourThumb from './images/buy-4-thumb.jpg'
import sliderFive from './images/buy-5.jpg'
import sliderFiveThumb from './images/buy-5-thumb.jpg'


import cardOne from './images/buy-card-1.png'
import cardTwo from './images/buy-card-2.png'
import cardThree from './images/buy-card-3.png'

import iconOne from './images/icon-1.png'
import iconTwo from './images/icon-2.png'
import iconThree from './images/icon-3.png'
import iconFour from './images/icon-4.png'
import iconFive from './images/icon-5.png'
import iconSix from './images/icon-6.png'


export class Buy extends Component {
    constructor() {
        super() 
            this.submitEmail= this.submitEmail.bind(this);
            this.swipeRight = this.swipeRight.bind(this);
            this.swipeLeft = this.swipeLeft.bind(this);
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        document.querySelector('#root').style.borderTop = 'none'
        document.querySelector('nav').style.position = 'absolute'
        document.querySelector('nav').style.boxShadow = 'none'
        document.querySelector('.nav-wrapper').style.backgroundColor = 'white'
        document.querySelector('.navbar-fixed').style.position = 'relative'
        document.querySelector('.navbar-fixed').style.width = '100%'
        document.querySelector('.navbar-fixed').style.top = '20px'
        document.querySelector('.headerLogo').style.color = '#1C56C0'
        var nodes = document.querySelector('nav').getElementsByTagName('a');
        for(var i=0; i<nodes.length; i++) {
            nodes[i].style.color = '#1C56C0';
        }  
       document.querySelector('body').click()
    }
    submitEmail() {
        let email = this.refs.emailBuy.value
        console.log(email)
        axios.post('/api/email', {
            list: 'newsletter',
            email: email
        })
        .then(r => {
            console.log(r)
            //this.props.history.push('/')
            this.refs.BuyContainer.style.display = 'none'
            this.refs.thankyou.innerHTML = 'Thank you!'
        })
        .catch(e => {
            console.log(e)
        })
    }

    swipeRight() {
        console.log('right called')

    }

    swipeLeft() {
        console.log('left called')

    }

  
  render() {
      const swipe = defineSwipe({swipeDistance: 50});
         const images = [
      
      {
        original: sliderTwo,
        thumbnail: sliderTwoThumb,
      },
      {
        original: sliderOne,
        thumbnail: sliderOneThumb,
      },
      {
        original:   sliderThree,
        thumbnail: sliderThreeThumb,
      },
      {
        original:   sliderFour,
        thumbnail: sliderFourThumb,
      },
      {
        original:   sliderFive,
        thumbnail: sliderFiveThumb,
      }
    ]
    return (
        <div className='buyPage'>
            <Row className='firstBuyOne'>
                <Col s={12} m={12} l={6}>
                        <ImageGallery
                            items={images}
                            slideInterval={2000}
                            onImageLoad={this.handleImageLoad}/>


                </Col>
                <Col s={12} m={12} l={6} className='firstBuyTwo'>
                    <div>
                        <h1 className='yup'>Guardian Leak Prevention Kit</h1>
                        
                        <p>The Guardian Leak Prevention Kit includes everything you need to protect your home from leaks.</p>
                        <h4>MSRP</h4>
                        <h3>$399.97</h3>
                        
                        <button className='yolo'>Temporarily Sold Out</button>

                        <div className='inline-form' ref='BuyContainer'>
                            <div className='form-container'> 
                                <input className='form-text' style={{borderBottom: 'none', width:'100%'}} placeholder='Email Address' ref='emailBuy'/>
                            </div>
                            <button  onClick={this.submitEmail} >Notify Me</button>

                        </div>
                        <span ref='thankyou'>Notify me when it's back in stock.</span>
                    </div>
                </Col>
            </Row>
            <Row className='secondBuy'>
                <h2 className='yup'>Guardian Prevents Water Damage</h2>
                <div className='width70 flex'>
         
                    <div className='buyAbout'>
                        
                        <div>
                        <h2>Detects Leaks &amp; Floods</h2>
                        <img src={cardOne} alt='blog one' />

                        <p>
                           Water Detectors placed throughout your home will notify you and take action when a leak is detected.
                        </p>
                         <button onClick={() => this.props.history.push('/water-detector')}>Learn About</button>

                        </div>

                    </div>

       

                    <div className='buyAbout'>
                        
                            <div>
                                <h2>Stops the Leak</h2>
                                <img src={cardTwo} alt='blog one' />

                                <p>
                                The Valve Controller will automatically shut off your water when leaks are detected to avoid damage.
                                </p>
                                <button onClick={() => this.props.history.push('/valve-controller')}>Learn About</button>
                            </div>

                    </div>

                
                    <div className='buyAbout'>
                       
                        <div>
                            <h2>Gives Peace Of Mind</h2>
                             <img src={cardThree} alt='blog one' />

                            <p> Keep your home safe from earthquakes, flash floods, and plumbing failures.</p>
                            


                             <button onClick={() => this.props.history.push('/app')}>Learn About</button>
                        </div>

                    </div>

               
            </div>
            </Row>
            <Row>
                <div className="gallery items-4" style={{height: 'calc(100vh - 65px)'}}>
                    <div id="item-2" className="control-operator"></div>
                    <div id="item-3" className="control-operator"></div>
                    <div id="item-4" className="control-operator"></div>
                    <div id="item-5" className="control-operator"></div>

                 

                    <figure className="item" style={{height:'calc(100vh - 65px)', background: '#2050C2'}}>
                        <Swipeable config={swipe} onSwipeLeft={this.swipeLeft} onSwipeRight={this.swipeRight}>
                        <Row>
                            <Col s={12} className='featureTwoContainer'>
                                <h1>How it Works</h1> 
                                <img src={three} alt='install connect protect' />
                                <p>Click continue and learn how to setup Guardian.</p>
                                <a href='#item-3'><span><l>continue</l><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>

                            </Col>
                        </Row>
                        </Swipeable>
                    </figure>

                    <figure className="item" style={{height:'calc(100vh - 65px)', background: '#2050C2'}}>
                    <Swipeable config={swipe} onSwipeLeft={this.swipeLeft} onSwipeRight={this.swipeRight}>
                       <Row>
                           <Col s={12} className='featureThreeContainer'>
                            
                                <h2>INSTALL</h2>
                                <img src={sldier3Valve} alt='Guardian' />
                                <p>Align the valve controller over the existing valve and mount in seconds and place water detectors near appliances, sinks, and other plumbing 
                                    fixtures. Includes remote sensor probe for hard-to-reach areas. No tools or plumbing necessary.
                                </p>
                                <a href='#item-4'><span><l>continue</l><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>
                            </Col>
                        </Row>
                        </Swipeable>
                    </figure>

                    <figure className="item" style={{height:'calc(100vh - 65px)', background: '#2050C2'}}>
                        <Swipeable config={swipe} onSwipeLeft={this.swipeLeft} onSwipeRight={this.swipeRight}>
                            <Row>
                                <Col s={12} className='featureFourContainer'>
                                    <h2>CONNECT</h2>
                                    <img src={slider4Valve} alt='Guardian' />
                                    <p>
                                        Connect the Valve Controller to your WiFi and control and monitor your system from the app. Take the Water Detector out of the box and place it anywhere in your home.
                                        It will connect automatically to your Valve Controller.
                                    </p>
                                    <a href='#item-5'><span><l>continue</l><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>
                                </Col>
                            </Row>
                        </Swipeable>
                    </figure>

                    <figure className="item" style={{height:'calc(100vh - 65px)', background: '#1C56C0'}}>
                        <Swipeable config={swipe} onSwipeLeft={this.swipeLeft} onSwipeRight={this.swipeRight}>
                            <Row>
                                <Col s={12} className='featureFiveContainer'>
                
                                    <h2>PROTECT</h2>
                                    <img src={slider5Valve} alt='Guardian' />
                                    <p>
                                        The Valve Controller automatically shuts off the water when the Water Detectors detect leaks, floods, earthquakes, or other events to limit the damage done to your home. Manage your 
                                        system remotely and get notifications when things go wrong from anywhere in then world.
                                    </p>
                                    <a href='#item-2'><span><l>continue</l><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>


                                </Col>
                            </Row>
                        </Swipeable>
                    </figure>

                
                </div>
                                

            </Row>

            <div className='moreFeaturesContainer'>
                <h1>Additional Features</h1>
                <div className='moreFeatures'>
            


                    <div className='featureContainer'>
                        <div className='featuresCard'>
               
                                <img src={iconTwo} alt='Guardian' />  

                                <div className='featuresInline'>
                                <h2>Offline Functionality</h2>
                                <p>The internet is only required for off-site control and notifications, so Guardian will protect your home without internet connectivity.</p>
                        </div>

                        </div>
                    </div>

                    <div className='featureContainer'>
                            <div className='featuresCard'>
               
                                <img src={iconOne} alt='Guardian' /> 

                                <div className='featuresInline'>
                                    <h2>Extreme Long Range</h2>
                                    <p>Water Detectors can be placed up to 1000' away from the Valve Controller, that's more that an entire city block.</p>
                                </div>
                                    
                            </div>

                    </div>



                    <div className='featureContainer'>
                      <div className='featuresCard'>
               
                                <img src={iconThree} alt='Guardian' /> 

                                <div className='featuresInline'>
                                <h2>Battery Backup</h2>
                                <p>An optional battery backup powers the Valve Controller for an extra twelve hours to protect your home during power outages.</p>
                        </div>
                    </div>
                    </div>
                    
            
   


                    <div className='featureContainer'>
                       <div className='featuresCard'>
               
                                <img src={iconFive} alt='Guardian' /> 

                                <div className='featuresInline'>
                                <h2>Completely Standalone</h2>
                                <p>The Water Detectors communicate with directly with the Valve Controller, avoiding the need for hubs or other useless hardware.</p>
                       </div>
                    </div>
                    </div>
     
                    
                    <div className='featureContainer'>
                        <div className='featuresCard'>
               
                                <img src={iconFour} alt='Guardian' /> 

                                <div className='featuresInline'>
                                <h2>No Tools Required</h2>
                                <p>Guardian install without any tools or professional help - configuration usually takes under ten minutes.</p>
                          </div>
                        </div>
                    </div>

                     

                    <div className='featureContainer'>
                     <div className='featuresCard'>
               
                                <img src={iconSix} alt='Guardian' /> 

                                <div className='featuresInline'>
                                <h2>Routine Self Tests </h2>
                                <p>The Valve Controller will regularly check your valve to make sure it's not stuck during an emergency.</p>
                           </div>
                        </div>
                    </div>

                </div>

            </div>
            <Row className='buyBanner2'>
                <p>All you need to use Guardian is a standard quarter-turn ball valve, iOS or Android Smartphone with Bluetooth and Internet connectivity, and a WiFi network with connectivity.</p>
            </Row>
        </div>

    );
  }
}
