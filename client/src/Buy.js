import React, { Component } from 'react';
import './App.css';
import './css/gallery.css'

import ImageGallery from 'react-image-gallery';

import {Row, Col, Container} from 'react-materialize'
import 'react-image-gallery/styles/css/image-gallery-no-icon.css'
import guardian from './images/herotransweb.png'
import three from './images/how-slider-2.png'
import sldier3Valve from './images/how-slider-3.png' 
import slider4Valve from './images/how-slider-4.png'
import slider5Valve from './images/how-slider-5.png'


import cardOne from './images/buy-page-card-1.jpg'
import cardTwo from './images/buy-page-card-2.jpg'
import cardThree from './images/buy-page-card-3.jpg'

export class Buy extends Component {
  
  render() {
         const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
    return (
        <div className='buyPage'>
            <div className='bannerBuy'>
                Guardian will begin shipping in October, 2017.
            </div>
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
                        
                        <button className='yolo'>Reserve Today And Save $100</button>

                        <div className='inline-form'>
                            <div className='form-container'> 
                                <input className='form-text' style={{borderBottom: 'none', width:'100%'}} placeholder='Email Address' />
                            </div>
                            <button>Notify Me</button>

                        </div>
                        <span>Notify me when it begins shipping at full price</span>
                    </div>
                </Col>
            </Row>
            <Row className='secondBuy'>
                <h2 className='yup'>Guardian Prevents Water Damage</h2>
                <div className='width70'>
                <Col s={12} m={12} l={4}>
                    <div className='buyAbout'>
                        <img src={cardOne} alt='blog one' />
                        <div>
                        <h2>Detects Leaks &amp; Floods</h2>

                        <p>
                           Water Detectors placed throughout your home will notify you and take action when a leak is detected.
                        </p>
                        <a>Read More</a>

                        </div>

                    </div>

                </Col>

                 <Col s={12} m={12} l={4}>
                    <div className='buyAbout'>
                        <img src={cardTwo} alt='blog one' />
                            <div>
                                <h2>Stops the Leak</h2>

                                <p>
                                The Valve Controller will automatically shut off your water when leaks are detected to avoid damage.
                                </p>
                                <a>Read More</a>
                            </div>

                    </div>

                </Col>
                 <Col s={12} m={12} l={4}>
                    <div className='buyAbout'>
                        <img src={cardThree} alt='blog one' />
                        <div>
                            <h2>Give Peace Of Mind</h2>

                            <p> Keep your home safe from earthquakes, flash floods, and plumbing failures.</p>
                            


                            <a>Read More</a>
                        </div>

                    </div>

                </Col>
            </div>
            </Row>
            <Row>
                <div className="gallery items-5" style={{height: '140vh'}}>
                    <div id="item-1" className="control-operator"></div>
                    <div id="item-2" className="control-operator"></div>
                    <div id="item-3" className="control-operator"></div>
                    <div id="item-4" className="control-operator"></div>
                    <div id="item-5" className="control-operator"></div>

                    <figure className="item" style={{height: '140vh'}}>
                        <Row>
                           <Col s={12} className='featuresOneContainer'>
                                <h2>How It Works</h2>
                                <img src={guardian} alt='Guardian' /> 

                                <p>
                                    Guardian communicates with Water Detectors throughout your home to know when there is a leak, and shuts off
                                    your water to prevent further damage while notifying you of the leak. Guardian installs with no tools, no plumber, and
                                    no pipe cutting - simply Install, Connect and Protect!
                                </p>

                                <a href='#item-2'><span><span>continue</span><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>
                            </Col>
                        </Row>

                    </figure>

                    <figure className="item" style={{height:'140vh', background: '#2050C2'}}>
                        <Row>
                            <Col s={12} className='featureTwoContainer'>
                                <h1>How it works</h1> 
                                <img src={three} alt='install connect protect' />
                                <p>Click continue and learn how to setup guardian.</p>
                                <a href='#item-3'><span><span>continue</span><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>

                            </Col>
                        </Row>
                    </figure>

                    <figure className="item" style={{height:'140vh', background: '#2050C2'}}>
                       <Row>
                           <Col s={12} className='featureThreeContainer'>
                                <h1>How it Works</h1>
                                <h2>INSTALL</h2>
                                <img src={sldier3Valve} alt='Guardian' />
                                <p>Align the valve controller over the existing valve and mount in seconds and place water detectors near appliances, sinks, and other plumbing 
                                    fixtures. Includes remote sensor probe for hard-to-reach areas. No tools or plumbing necessary.
                                </p>
                                <a href='#item-4'><span><span>continue</span><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>
                            </Col>

                        </Row>
                    </figure>

                    <figure className="item" style={{height:'140vh', background: '#2050C2'}}>
                       <Row>
                           <Col s={12} className='featureFourContainer'>
                                <h1>How it Works</h1>
                                <h2>CONNECT</h2>
                                <img src={slider4Valve} alt='Guardian' />
                                <p>
                                    Connect the Valve Controller to your WiFi and control and monitor your system from the app. Take the Water Detector out of the box and place it anywhere in your home.
                                    It will connect automatically to your Valve Controller.
                                </p>
                                <a href='#item-5'><span><span>continue</span><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>


                           </Col>
                        </Row>
                    </figure>

                    <figure className="item" style={{height:'140vh', background: '#1C56C0'}}>
                       <Row>
                           <Col s={12} className='featureFiveContainer'>
                                <h1>How it Works</h1>
                                <h2>PROTECT</h2>
                                <img src={slider5Valve} alt='Guardian' />
                                <p>
                                    The Valve Controller automatically shuts off the water when the Leak Detectors detect leaks, floods, earthquakes, or other events to limit the damage done to your home. Manage your 
                                    system remotely and get notifications when things go wrong from anywhere in then world.
                                </p>
                                <a href='#item-1'><span><span>continue</span><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>


                           </Col>
                        </Row>
                    </figure>

                
                </div>
                                

            </Row>

            <div className='moreFeaturesContainer'>

                <Row className='moreFeatures'>
            
                    <h1>Additional Features</h1>
                    <Col s={12} m={12} l={4}>
                            <div className='featuresCard'>
               
                                <img src='http://placehold.it/120x120' alt='Logo' /> 

                                <div className='featuresInline'>
                                    <h2>Extreme Long Range</h2>
                                    <p>Water Detectors can be placed up to 1000' away from the Valve Controller, that's more that an entire city block.</p>
                                </div>
                                    
                            </div>

                    </Col>


                    <Col s={12} m={12} l={4}>
                        <div className='featuresCard'>
               
                                <img src='http://placehold.it/120x120' alt='Logo' /> 

                                <div className='featuresInline'>
                                <h2>Offline Functionality</h2>
                                <p>The internet is only required for off-site control and notifications, so Guardian will protect your home without internet connectivity.</p>
                         </div>

                    </div>
                    </Col>



                    <Col s={12} m={12} l={4}>
                      <div className='featuresCard'>
               
                                <img src='http://placehold.it/120x120' alt='Logo' /> 

                                <div className='featuresInline'>
                                <h2>Battery Backup</h2>
                                <p>An optional battery backup powers the Valve Controller for an extra twelve hours to protect your home during power outages.</p>
                        </div>
                    </div>
                    </Col>
                    
            
                </Row>



                <Row className='moreFeatures two'>
                    
                    <Col s={12} m={12} l={4}>
                        <div className='featuresCard'>
               
                                <img src='http://placehold.it/120x120' alt='Logo' /> 

                                <div className='featuresInline'>
                                <h2>No Tools Required</h2>
                                <p>Guardian install without any tools or professional help - configuration usually takes under ten minutes.</p>
                          </div>
                        </div>
                    </Col>

                     <Col s={12} m={12} l={4}>
                       <div className='featuresCard'>
               
                                <img src='http://placehold.it/120x120' alt='Logo' /> 

                                <div className='featuresInline'>
                                <h2>Completely Standalone</h2>
                                <p>The Water Detectors communicate with directly with the Valve Controller, avoiding the need for hubs or other useless hardware.</p>
                       </div>
                    </div>
                    </Col>

                    <Col s={12} m={12} l={4}>
                     <div className='featuresCard'>
               
                                <img src='http://placehold.it/120x120' alt='Logo' /> 

                                <div className='featuresInline'>
                                <h2>Routine Self Tests </h2>
                                <p>The Valve Controller will regularly check your valve to make sure it's not stuck during an emergency.</p>
                           </div>
                        </div>
                    </Col>

                </Row>

            </div>
            <Row className='buyBanner2'>
                <p>All you need to use Guardian is a standard quarter-turn ball valve, iOS or Android Smartphone with Bluetooth and Internet connectivity, and a WiFi network with connectivity.</p>
            </Row>
        </div>

    );
  }
}
