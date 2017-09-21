import React, { Component } from 'react';
import './App.css';
import {Navbar, Row, Col} from 'react-materialize'
import {Link} from 'react-router-dom'
import logoBlue from './images/guradian.png'
import logoWhite from './images/guardian1.png'
import reserve from './images/reserveOne.png'

import appstore from './images/appstores.png'

import {withRouter} from 'react-router-dom'

import uno from './images/leftNavOne.png'
import dos from './images/leftNavTwo.png'
import tres from './images/leftNavThree.png'

import logo from './images/guadian-logo-new.png'

import apple from './images/guardian-app-store.png'
import android from './images/guardian-android.png'


class Header extends Component {

  render() {
      const { history } = this.props



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

            <Navbar fixed ref='navbar' brand='GUARDIAN' options={{closeOnClick: true}}>

                    <Row>
                        
                        <Col s={12} m={12} l={3} className="logo col-3">
                            <Link to='/'>
                            
                                   <img style={{float: 'left'}} className='headerLogo' src={logo} alt='guardian logo' />
                           
                            </Link>
                        </Col>


                        <Col s={12} m={12} l={6} className="col-6 centerHeader">
                            <li className='blackit'><Link style={{marginLeft: '0'}} to='/buy'>Get Guardian</Link></li>
                            <li className='blackit'><Link to='/valve-controller'>Explore</Link></li>
                            <li className='hideDesktop'>
                                <div>
                                    <Link to='/valve-controller'><img src={uno}alt='place' />the valve controller</Link>
                                    <Link to='/water-detector'><img src={dos} alt='place' />Water Detector</Link>
                                    <Link to='/buy'><img src={tres} alt='place' />Purchase</Link>
                                </div>
                          
                            </li> 
                            <li className='blackit'><Link to='/research'>About</Link></li>
                            <li className='blackit'><a href='https://support.getguardian.com' rel="noopener noreferrer" target='_blank'>Support</a></li>

                        </Col>

                        <Col s={12} m={12} l={3} className="col-3 textCenter">
                            <div className='appFlex'>
                                <img src={apple} onClick={() => window.open('https://itunes.apple.com/us/app/guardian-by-elexa/id1173682335?mt=8', '_blank')} alt='apple' style={{cursor: 'pointer'}} />
                                <img src={android} alt='android' />
                            </div>
                        </Col>
                </Row>
            </Navbar>

        </div>
      </div>
    );
  }
}
export default withRouter(Header)

