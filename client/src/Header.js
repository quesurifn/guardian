import React, { Component } from 'react';
import './App.css';
import {Navbar, NavItem, Button, Row, Col} from 'react-materialize'
import {Link} from 'react-router-dom'
import logoBlue from './images/guradian.png'
import logoWhite from './images/guardian1.png'
import reserve from './images/reserveOne.png'

import appstore from './images/appstores.png'

export class Header extends Component {

  

  render() {
      var logoFactor;
      var button;

      if (document.location.pathname === '/purchase' || document.location.pathname === '/') {
          logoFactor = logoWhite; 
          button =  <Link to='/options' className='blueButton nohoverb centerIt'><img src={reserve} alt='resrve' className='reserve' /></Link>
      } else {
          logoFactor = logoBlue;
          button =  <Link to='/options' className='blueButton'>PURCHASE OPTIONS</Link>;
      }
  
    return (
      <div className='row'>
          <div className='col s12'>

            <Navbar fixed ref='navbar' brand='GUARDIAN'>

                    <Row>
                        
                        <Col s={12} m={12} l={3} className="logo col-3">
                            <Link to='/'>
                                <span className='headerLogo' >Guardian</span>
                            </Link>
                        </Col>


                        <Col s={12} m={12} l={6} className="col-6 centerHeader">
                            <li className='blackit'><Link to='/buy'>Get Guardian</Link></li>
                            <li className='blackit'><Link to='/valve-controller'>Explore</Link></li>
                            <li className='blackit'><Link to='/research'>About</Link></li>
                            <li className='blackit'><a href='https://support.getguardian.com' target='_blank'>Support</a></li>

                        </Col>

                        <Col s={12} m={12} l={3} className="col-3 textCenter">
                           <img src={appstore} alt='app store' />
                        </Col>
                </Row>
            </Navbar>

        </div>
      </div>
    );
  }
}

