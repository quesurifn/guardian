import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';

import valve from './images/buy-card-2.png'
import kit from './images/how-slider-3.png'
import detector from './images/buy-card-1.png'

export class Shop extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        document.querySelector('#root').style.borderTop = 'none'
        document.querySelector('nav').style.position = 'relative'
        document.querySelector('nav').style.boxShadow = 'none'
        document.querySelector('.nav-wrapper').style.backgroundColor = 'white'
        document.querySelector('.navbar-fixed').style.position = 'relative'
        document.querySelector('.navbar-fixed').style.width = '100%'
        document.querySelector('.navbar-fixed').style.top = '0px'
        document.querySelector('.headerLogo').style.color = '#1C56C0'
        var nodes = document.querySelector('nav').getElementsByTagName('a');
        for(var i=0; i<nodes.length; i++) {
            nodes[i].style.color = '#1C56C0';
        }  
     
    }

  render() {
    return (
      <div className='shop'>
        <div className='shop-card-container'>
            <div className='shop-card'>
                <Link to='/valve-controller'>
                    <img src={valve} alt='Valve Controller' /> 
                </Link>
            </div>
        <h3>Valve Controller</h3>
        </div>
        <div className='shop-card-container'>
            <div className='shop-card'>
                <Link to='/water-detector'>
                    <img src={detector} alt='Leak Detector' /> 
                </Link>
            </div>
         <h3>Leak Detector</h3>
        </div>
        <div className='shop-card-container'>
            <div className='shop-card'>
                <Link to='/buy'>
                    <img src={kit} alt='Guardian Kit' /> 
                </Link>
            </div>
            <h3>Guardian Bundle</h3>
        </div>
      </div>   
    );
  }
}
