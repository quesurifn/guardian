import React, { Component } from 'react';
import './App.css';
import {Button, Row, Col} from 'react-materialize'
import {Link} from 'react-router-dom'




export class Purchase extends Component {
      componentDidMount() {
        document.querySelector('nav').style.backgroundColor = 'transparent'
        document.querySelector('nav').style.position = 'absolute'
        document.querySelector('nav').style.boxShadow = 'none'
        
        
        
        //ALL White
        var nodes = document.querySelector('nav').getElementsByTagName('a')

        for(var i=0; i<nodes.length; i++) {
            nodes[i].style.color = 'white';
        }
                
    }
    

  render() {
  
    return (
      <div>
        <Row>
lol
        </Row>
      </div>
    );
  }
}