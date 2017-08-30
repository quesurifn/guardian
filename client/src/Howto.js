import React, { Component } from 'react';
import './App.css';

import {Container} from 'react-materialize'
import {Link} from 'react-router-dom'

export class Howto extends Component {

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

            </div>
        </Container>
      </div>   
    );
  }
}