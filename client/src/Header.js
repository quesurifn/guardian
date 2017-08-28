import React, { Component } from 'react';
import './App.css';
import {Navbar, NavItem, Button, Row, Col} from 'react-materialize'
import {Link} from 'react-router-dom'
import logoBlue from './images/guradian.png'
import logoWhite from './images/guardian1.png'
import reserve from './images/reserveOne.png'

export class Header extends Component {

  

  render() {
      var logoFactor;
      var button;

      if (document.location.pathname === '/purchase') {
          logoFactor = logoWhite; 
          button =  <Link to='/options' className='blueButton nohoverb center'><img src={reserve} alt='resrve' className='reserve' /></Link>
      } else {
          logoFactor = logoBlue;
          button =  <Link to='/options' className='blueButton'>PURCHASE OPTIONS</Link>;
      }
  
    return (
      <div className='row'>
          <div className='col s12'>

            <Navbar fixed ref='navbar'>

                    <Row>
                        
                        <Col s={12} m={12} l={3} className="logo col-3">
                            <span className='headerLogo' >Guardian</span>
                        </Col>


                        <Col s={12} m={12} l={6} className="col-6 centerHeader">
                            <NavItem>Solutions</NavItem>
                            <NavItem>Development</NavItem>
                            <li className='blackit'><Link to='/research'>Research</Link></li>
                            <NavItem>About</NavItem>
                        </Col>

                        <Col s={12} m={12} l={3} className="col-3 textCenter">
                           {button}
                        </Col>
                </Row>
            </Navbar>

        </div>
      </div>
    );
  }
}