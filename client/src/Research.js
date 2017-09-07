import React, { Component } from 'react';
import './App.css';
import {Row, Col} from 'react-materialize'
import {Link} from 'react-router-dom'



import first from './images/researchFirst.png'
import app from './images/valve.png'
import program from './images/programming.png'



 
export class Research extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
 

  render() {
  
    return (
        <div className='research'>
            <Row>
                <Col s={12} className='firstResearch'>
                    <p>
                        We are an international team brought together by our love for home automation and product development.  We stumbled upon an idea that can change the world, and spent the last two years working around the clock to bring it to life.

                    </p>
                    
                </Col>
            </Row>
            <Row>
                <Col s={12} className='secondResearch'>
                    <img src={first} alt='first image' /> 
                </Col>
            </Row>
            <Row>
                <Col s={12} className='thirdResearch'>
                    <p>Water damage affects more households than fire in the US each year, yet the vast majority of homes are not equipped to mitigate or prevent the damage can occur. The average claim can be anywhere from $8,000-$15,000 dollar, and is often the result of faulty appliances, burst pipes, human error and natural causes. Water damage not only costs homeowners and insurance companies money, they can be extremely frustrating, time consuming to repair and personal possessions are often lost. 

                    </p>
                </Col>
            </Row>
            <Row>
                <Col s={12} m={12} l={6} className='fourthResearchOne'>
                    <div />
                </Col>
                 <Col s={12} m={12} l={6} className='fourthResearchTwo'>
                    <p>The challenge for Guardian has been to create a reliable, always available solution that anyone can install, that requires no plumbing or cutting into pipes and can work automatically, while away from home.</p>
                </Col>
            </Row>
            <Row>
                <Col s={12} className='fifthResearch'>
                    <p>  We want to protect every home in the world from water damage.</p>
                    <p>To create Guardian, we spent weeks researching before drawing anything.  We studied dozens of valves and existing water detectors, consulted with plumbing, restoration, and insurance professionals, and combined our years of experience in the home automation world to create a unique product that all homeowners can use.  Creating a one-size-fits-all solution is easier said than done, and we learned that the hard way, by going through months and months worth of revisions before arriving at the final design for both the Valve Controller and the Water Detector.  

                    </p>
                </Col>
                
            </Row>
            <Row>
                <Col s={12} className='sixthResearch'>
                  <img src={program} alt='programming' />
                </Col>
            </Row>
            <Row>
                <Col s={12} className='thirdResearch'>
                
                  <p>We conceived the overarching vision of Guardian in Chicago, and work with our mechanical, software, and electrical engineering teams to make it come to life.  Meanwhile, our sales and marketing teams work tirelessly to build relationships and put strategies into place to have a successful product launch.
</p>
                </Col>
            </Row>
            <Row>
                <Col s={12} className='eighthResearch'>
                  <img src={app} alt='app' />
                </Col>
            </Row>
       </div>
    )
  }
}