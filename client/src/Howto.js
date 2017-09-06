import React, { Component } from 'react';
import './App.css';

import {Container} from 'react-materialize'
import {Link} from 'react-router-dom'

export class Howto extends Component {
    componentDidMount() {
         window.scrollTo(0, 0)
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
      <div className="howto">
        <Container>
            <h1>How It Works</h1> 
            <p className='one'>Guardian is the first standalone leak prevention system that not only alerts you, but actually shuts your water off in an emergency.</p>
            <div className='flex'>

                <div className='howtoCard'>
                    <div className='cardOneBg' />
                    <div className='howtoContent'>
                        <h2>The Valve Controller</h2>
                        <p>Simply align over the existing valve and tighten the clamps and install.</p>
                        <p>Connect the Valve Controller to your Wifi to control and monitor your system from the app.</p>

                        <div className='howtoFooter'>
                            <div className='footerRelativeContainer'>

                                <Link to='/'>Learn More</Link>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='howtoCard'>
                    <div className='cardTwoBg' />
                    <div className='howtoContent'>
                        <h2>The Water Detector</h2>
                        <p>Place near appliances, sinks, and other plumbing fixtures. Includes remote sensor probe in hard to reach areas. </p>
                        <p>The Water Detector will report status automatically to the app.</p>

                        <div className='howtoFooter'>
                            <div className='footerRelativeContainer'>

                                <Link to='/'>Learn More</Link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </Container>
      </div>   
    );
  }
}
