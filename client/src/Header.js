import React, { Component } from 'react';
import './App.css';
import {Navbar, NavItem, Button, Row, Col} from 'react-materialize'
import {Link} from 'react-router-dom'
import logo from './images/guradian.png'



export class Header extends Component {

  render() {
  
    return (
      <div className='row'>
          <div className='col s12'>

            <Navbar fixed >

                    <Row>
                        
                        <Col s={12} m={12} l={3} className="logo col-3">
                            <img src={logo} alt='Guradian Logo' />
                        </Col>


                        <Col s={12} m={12} l={6} className="col-6 centerHeader">
                            <NavItem>Solutions</NavItem>
                            <NavItem>Development</NavItem>
                            <NavItem>Research</NavItem>
                            <NavItem>About</NavItem>
                        </Col>

                        <Col s={12} m={12} l={3} className="col-3 textCenter">
                            <Link to='/options' className='blueButton'>PURCHASE OPTIONS</Link>
                        </Col>
                </Row>
            </Navbar>

        </div>
      </div>
    );
  }
}