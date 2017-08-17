import React, { Component } from 'react';
import './App.css';
import {Navbar, NavItem, Button} from 'react-materialize'
import logo from './images/guradian.png'



export class Header extends Component {

  render() {
  
    return (
      <div className='row'>
          <div className='col s12'>

            <Navbar fixed >

                    <div className='row'>
                        
                        <div className="logo col-3">
                            <img src={logo} alt='Guradian Logo' />
                        </div>


                        <div className="col-6 centerHeader">
                            <NavItem>Solutions</NavItem>
                            <NavItem>Development</NavItem>
                            <NavItem>Research</NavItem>
                            <NavItem>About</NavItem>
                        </div>

                        <div className="col-3 textCenter">
                            <a className='blueButton'>PURCHASE OPTIONS</a>
                        </div>
                </div>
            </Navbar>

        </div>
      </div>
    );
  }
}