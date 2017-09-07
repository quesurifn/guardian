import React, { Component } from 'react';
import './App.css';

export class NotFound extends Component {
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
        setTimeout(() => {
            this.props.history.push('/')
        }, 7000)
    }

  render() {
    return (
      <div className="notfound">
         <h1>404</h1>
         <h2>We couldn't find what you are looking for</h2>
      </div>   
    );
  }
}
