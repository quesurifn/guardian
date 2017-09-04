import React, { Component } from 'react';
import './App.css';
import './css/gallery.css';

import cardOne from './images/leak.png'
import cardTwo from './images/faceb.png'
import {Card, Row, Col,CardTitle} from 'react-materialize'

export class Home extends Component {

  render() {

    return (
      <div className="App">
        <Row>
          <Col s={12} m={12} >
               
             <div className='bg2'></div>

      
          </Col>
        </Row>
        <Row>
          <Col s={12} m={12} className='sectionTwo'>
             <p>There are more than 14,000 water damage claims each day, costing U.S. insurance companies and homeowners billions of dollars.</p>
          </Col>
        </Row>

        <Row>
          <Col s={12} m={6} className='normalHeight'>
            <Card header={<CardTitle reveal image={cardOne} waves='light'/>}
                title="Toolless Installation"
                reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                <p>No plumbing, no tools. Guardian was designed so that anyone can install in minutes.</p>
            </Card>
          </Col>
          <Col s={12} m={6} className='normalHeight'>
          <div className="gallery items-3 autoplay">
                  <div id="item-1" className="control-operator"></div>
                  <div id="item-2" className="control-operator"></div>
                  <div id="item-3" className="control-operator"></div>

                  <figure className="item vue100">
                    <Card  header={<CardTitle reveal image={cardTwo} waves='light' />}
                        title="RF Based Communication"
                        reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
                        <p>Learn more about our ambitious move to provide a long range RF based system that communicates directly over Wifi.</p>
                    </Card>
                  </figure>

                  <figure className="item">
                    <div className='bg2'></div>
                  </figure>

                  <figure className="item">
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
        
        
       
          <div className='row banner'>
        </div>
       </div>
   

    
    );
  }
}




