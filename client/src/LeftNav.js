import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


@connect((store) => {
    return {
        nav: store.reducer.nav
    }
})
export class LeftNav extends Component {
    componentDidUpdate() {
        if (this.props.nav === true) {
            document.querySelector('.sidenav').style.width = "250px";
            document.querySelector('#main').style.marginRight = "250px";
            document.querySelector('#overlay').style.display = 'block'
            document.querySelector('.navbar-fixed').style.right = '250px'
            
        } else {
            document.querySelector('.sidenav').style.width = "0";
            document.querySelector('#main').style.marginRight= "0";
            document.querySelector('#overlay').style.display = 'none';
            document.querySelector('.navbar-fixed').style.right = '0';
        }
    }

  render() {
    return (
      <div className='sidenav'>
        <div className='sidenav-logo'>
            <img src={this.props.logo} alt='Company Logo' />
        </div>
        <div className='sidenav-content'>
            <p>Hello World</p>
        </div>
      </div>   
    );
  }
}
