import React, { Component } from 'react';
import './App.css';
import {Row, Col, Container} from 'react-materialize'




export class Foot extends Component {


  render() {

    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col s={12} m={12}>
                        <div className='footerFlex'>
                            <p>Follow Us On:</p>
                            <a className='footerSocial'><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a className='footerSocial'><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a className='footerSocial'><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                            <a className='footerSocial'><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                        </div>
                        <div className='footerHr' />
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={4}>
                        <div className='footerCol'>
                            <h2>Guardian</h2>
                            <ul>
                                <li><a>Solutions</a></li>
                                <li><a>Development</a></li>
                                <li><a>Research</a></li>
                            </ul>
                                
                        </div>
                    </Col>
                    <Col s={12} m={4}>
                        <div className='footerCol'>
                            <h2>About</h2>

                            <ul>
                                <li><a>News</a></li>
                                <li><a>Careers</a></li>
                           
                            </ul>
                                
                        </div>
                    </Col>
                    <Col s={12} m={4}>
                        <div className='footerCol'>
                            <h2>Contact</h2>
                            <ul>
                                <li><a>Call Toll Free: 888-203-2918</a></li>
                                <li><a>Email Support</a></li>
                                <li><a>Location</a></li>
                            </ul>
                                
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col s={12} m={12}>
                        <div className="footerLast">
                            <div className='footerHr' />
                            <div className='footerFlex'>
                                <a>Help</a>
                                <a>Terms</a>
                                <a>Privacy</a>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </footer>
        
    );
  }
}


