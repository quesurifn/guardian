import React, { Component } from 'react';
import './App.css';
import {Row, Col} from 'react-materialize'
import {Link} from 'react-router-dom'



import first from './images/researchFirst.png'
import app from './images/valve.png'
import program from './images/programming.png'




export class Research extends Component {

  render() {
  
    return (
        <div className='research'>
            <Row>
                <Col s={12} className='firstResearch'>
                    <p>
                        Research and development that was put into Guardian has been going on for several years. Many new innovations occurred.
                    </p>
                    
                </Col>
            </Row>
            <Row>
                <Col s={12} className='secondResearch'>
                    <img src={first} alt='first image' /> 
                </Col>
            </Row>
            <Row>
                <Col s={12} className='thirdResearch'>
                    <p>A drone flies around the night just over Garfield Park Chicago. On its camera, a big unusual home stands out. The tip of the home is illuminated by a glowing roof, as if the tip of an obelisk or an crystal (some say
                        Egyptians used these to ebam electricity in the air.) As the drone gets close to the home, the camera steps into the home and creeps behind Gou's desk. The camera could be anything. The house is littered with internet.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col s={12} m={12} l={6} className='fourthResearchOne'>
                    <div />
                </Col>
                 <Col s={12} m={12} l={6} className='fourthResearchTwo'>
                    <p>Research and development that has been put into development has been.</p>
                </Col>
            </Row>
            <Row>
                <Col s={12} className='fifthResearch'>
                    <p>  Research and development that was put into Guardian has been going on for several years. Many new innovations occurred.</p>
                    <p>A drone flies around the night just over Garfield Park Chicago. On its camera, a big unusual home stands out. The tip of the home is illuminated by a glowing roof, as if the tip of an obelisk or an crystal (some say
                        Egyptians used these to ebam electricity in the air.) As the drone gets close to the home, the camera steps into the home and creeps behind Gou's desk. The camera could be anything. The house is littered with internet.
                    </p>
                </Col>
                
            </Row>
            <Row>
                <Col s={12} className='sixthResearch'>
                  <img src={program} alt='programming' />
                </Col>
            </Row>
            <Row>
                <Col s={12} className='seventhResearch'>
                  <p>Research and development that was put into it.</p>
                  <p>A drone flies around the night just over Garfield Park Chicago. On its camera, a big unusual home stands out. The tip of the home is illuminated by a glowing roof, as if the tip of an obelisk or an crystal (some say
                        Egyptians</p>
                </Col>
            </Row>
            <Row>
                <Col s={12} className='eighthResearch'>
                  <img src={app} alt='app' />
                </Col>
            </Row>
       </div>
    )
  }
}