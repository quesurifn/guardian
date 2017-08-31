import React, { Component } from 'react';
import './App.css';

import ImageGallery from 'react-image-gallery';

import {Row, Col} from 'react-materialize'
import 'react-image-gallery/styles/css/image-gallery-no-icon.css'
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
            <Row className='firstBuyOne'>
                <Col s={6}>
                        <ImageGallery
                            items={images}
                            slideInterval={2000}
                            onImageLoad={this.handleImageLoad}/>


                </Col>
                <Col s={6} className='firstBuyTwo'>
                    <div>
                        <h1>Guardian Leak Prevention Leak</h1>
                        <h3>$399.97</h3>
                        <p>The Guardian Leak Prevention Kit includes everything you need to protect your home from leaks.</p>
                        

                        <h2>Included</h2>
                        <div className="included">
                            <img src='http://placehold.it/100x100' alt='nogood' />
                            <img src='http://placehold.it/100x100' alt='nogood' />
                            <img src='http://placehold.it/100x100' alt='nogood' />


                        </div>
                    </div>
                </Col>
            </Row>
            <Row className='secondBuy'>
                <Col s={12} m={4}>
                    <div className='buyAbout'>
                        <img src='http://placehold.it/400x300' alt='blog one' />
                        <h2>Detects Leaks &amp; Floods</h2>

                        <p>
                           Water Detectors placed throughout your home will notify you and take action when a leak is detected.
                        </p>
                        <a>Read More</a>

                    </div>

                </Col>

                 <Col s={12} m={4}>
                    <div className='buyAbout'>
                        <img src='http://placehold.it/400x300' alt='blog one' />

                        <h2>Stops the Leak</h2>

                        <p>
                          The Valve Controller will automatically shut off your water when leaks are detected to avoid damage.
                        </p>
                        <a>Read More</a>
                    </div>

                </Col>
                 <Col s={12} m={4}>
                    <div className='buyAbout'>
                        <img src='http://placehold.it/400x300' alt='blog one' />
                        <h2>Give Peace Of Mind</h2>

                        <p> Keep your home safe from earthquakes, flash floods, and plumbing failures.</p>
                          


                        <a>Read More</a>

                    </div>

                </Col>






            </Row>

      
        </div>
    );
  }
}
