import React, { Component } from 'react'
import './App.css'
import './css/gallery.css'
import './css/valve.css'
import {Row, Col} from 'react-materialize'
import halfg from './images/half-g.png'
import schematic from './images/guardian-wire-1.jpg'

export class Controller extends Component {
   componentDidMount() {
        document.querySelector('nav').style.backgroundColor = 'transparent'
        document.querySelector('nav').style.position = 'absolute'
        document.querySelector('nav').style.boxShadow = 'none'
        document.querySelector('.nav-wrapper').style.backgroundColor = 'transparent'
        document.querySelector('.navbar-fixed').style.position = 'absolute'
        document.querySelector('.navbar-fixed').style.width = '100%'
        document.querySelector('.headerLogo').style.color = '#2050c2'
        
         window.scrollTo(0, 0)
        
        //ALL White
        var nodes = document.querySelector('nav').getElementsByTagName('a')

        for(var i=0; i<nodes.length; i++) {
            nodes[i].style.color = '#363636';
        }
                
    }



  render() {
    return (
      <div className="valvePage">
        <div className="gallery items-3 hundredHeight">
          <div id="item-1" className="control-operator"></div>
          <div id="item-2" className="control-operator"></div>
          <div id="item-3" className="control-operator"></div>

          <figure className="item gradient hundredHeight controllerSlideOne">
            <Row>
              <Col s={12}>
                <h1>Introducing the Valve Controller</h1>
              </Col>
              <Col s={12} m={7} className='relative'>
                <img src={halfg} alt='half guardian' />
              </Col>
              <Col s={12} m={5} className='padding20'>
                <h2>ROBUST &amp; RELIABLE</h2>
                <p>Battery Backup, offline functionality, and more.</p>
                <button>Learn More</button>
                <div className='sliderBox'>

                    <div>Easy</div>

        
                    <div>Standalone</div>


                    <div>Robust</div>


                </div>
              </Col>
            </Row>
          </figure> 

          <figure className="item gradient hundredHeight">
            <h1>2</h1>
          </figure>

          <figure className="item gradient hundredHeight">
            <h1>3</h1>
          </figure>
        </div>


        <Row >
          <div className='controllerFeatures'>
           <Row>
             <h2>Features</h2>
            <Col l={6} m={12}>
              <img src={schematic} alt='valve schematic' />

            </Col>
            <Col l={6} m={12} className='schemaFlex'>
              <p>
                <span>No Tools Needed</span>     The Valve Controller is ready to install out of the box, without any tools - the hand-tightened clamps grip the unit securely to your valve. 
              </p>


               <p>
                <span>Use Your Existing Valve</span>    You don't need a special valve to use Guardian - only a standard quarter-turn ball valve. Click here to see what valves Guardian is compatible with. 
              </p>

               <p>
                <span>Valve Calibration</span>   You don't need a special valve to use Guardian - only a standard quarter-turn ball valve. Click here to see what valves Guardian is compatible with. 
              </p>

            </Col>
          </Row>

            <hr />
            <Row>
             
            <Col l={6} m={12} className='schemaFlex'>
              <p>
                <span>No Tools Needed</span>     The Valve Controller is ready to install out of the box, without any tools - the hand-tightened clamps grip the unit securely to your valve. 
              </p>


               <p>
                <span>Use Your Existing Valve</span>    You don't need a special valve to use Guardian - only a standard quarter-turn ball valve. Click here to see what valves Guardian is compatible with. 
              </p>

               <p>
                <span>Valve Calibration</span>   You don't need a special valve to use Guardian - only a standard quarter-turn ball valve. Click here to see what valves Guardian is compatible with. 
              </p>

            </Col>

            <Col l={6} m={12}>
              <img src={schematic} alt='valve schematic' />

            </Col>
          </Row>

          <hr />


          <Row>
            <Col l={6} m={12}>
              <img src={schematic} alt='valve schematic' />

            </Col>
            <Col l={6} m={12} className='schemaFlex'>
              <p>
                <span>No Tools Needed</span>     The Valve Controller is ready to install out of the box, without any tools - the hand-tightened clamps grip the unit securely to your valve. 
              </p>


               <p>
                <span>Use Your Existing Valve</span>    You don't need a special valve to use Guardian - only a standard quarter-turn ball valve. Click here to see what valves Guardian is compatible with. 
              </p>

               <p>
                <span>Valve Calibration</span>   You don't need a special valve to use Guardian - only a standard quarter-turn ball valve. Click here to see what valves Guardian is compatible with. 
              </p>

            </Col>


          </Row>
          </div>
        </Row>

 <div className='moreFeaturesContainer controllerAdtlFeat'>

                <Row className='moreFeatures'>
            
                    <h1 style={{color: 'white', fontWeight: '300', letterSpacing: '1px'}}>Additional Features</h1>
                    <Col s={12} m={12} l={4}>
                            <div className='featuresCard'>
               
                                <img src='http://placehold.it/120x120' alt='Logo' /> 

                                <div className='featuresInline'>
                                    <h2>Extreme Long Range</h2>
                                    <p>Water Detectors can be placed up to 1000' away from the Valve Controller, that's more that an entire city block.</p>
                                </div>
                                    
                            </div>

                    </Col>


                    <Col s={12} m={12} l={4}>
                        <div className='featuresCard'>
               
                                <img src='http://placehold.it/120x120' alt='Logo' /> 

                                <div className='featuresInline'>
                                <h2>Offline Functionality</h2>
                                <p>The internet is only required for off-site control and notifications, so Guardian will protect your home without internet connectivity.</p>
                         </div>

                    </div>
                    </Col>



                    <Col s={12} m={12} l={4}>
                      <div className='featuresCard'>
               
                                <img src='http://placehold.it/120x120' alt='Logo' /> 

                                <div className='featuresInline'>
                                <h2>Battery Backup</h2>
                                <p>An optional battery backup powers the Valve Controller for an extra twelve hours to protect your home during power outages.</p>
                        </div>
                    </div>
                    </Col>
                    
                    
            
                </Row>



                <Row className='moreFeatures two'>
                    
                    <Col s={12} m={12} l={4}>
                        <div className='featuresCard'>
               
                                <img src='http://placehold.it/120x120' alt='Logo' /> 

                                <div className='featuresInline'>
                                <h2>No Tools Required</h2>
                                <p>Guardian install without any tools or professional help - configuration usually takes under ten minutes.</p>
                          </div>
                        </div>
                    </Col>

                     <Col s={12} m={12} l={4}>
                       <div className='featuresCard'>
               
                                <img src='http://placehold.it/120x120' alt='Logo' /> 

                                <div className='featuresInline'>
                                <h2>Completely Standalone</h2>
                                <p>The Water Detectors communicate with directly with the Valve Controller, avoiding the need for hubs or other useless hardware.</p>
                       </div>
                    </div>
                    </Col>

                    <Col s={12} m={12} l={4}>
                     <div className='featuresCard'>
               
                                <img src='http://placehold.it/120x120' alt='Logo' /> 

                                <div className='featuresInline'>
                                <h2>Routine Self Tests </h2>
                                <p>The Valve Controller will regularly check your valve to make sure it's not stuck during an emergency.</p>
                           </div>
                        </div>
                    </Col>

                </Row>
            

            </div>
            <Row className='specs'> 

                  <div>
                    <h4>Technical Data</h4>
                    <table>
                      <thead>
                          <tr>
                            <th style={{textAlign: 'right'}}>&nbsp;</th>
                            <th>&nbsp;</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td style={{textAlign: 'right'}}>Power supply</td>
                            <td>2x CR123 3.0V battery </td>
                          </tr>
                          <tr>
                            <td style={{textAlign: 'right'}}>Working current</td>
                            <td>35mA</td>
                          </tr>
                          <tr>
                            <td style={{textAlign: 'right'}}>Power Consumption</td>
                            <td>2W</td>
                          </tr>
                          <tr>
                            <td style={{textAlign: 'right'}}>Operating temperature</td>
                            <td>32 - 104 °F (0 - 40 °C)</td>
                          </tr>
                          <tr>
                            <td style={{textAlign: 'right'}}>Mounting Options</td>
                            <td>Wall, tabletop, shelftop</td>
                          </tr>
                          <tr>
                            <td style={{textAlign: 'right'}}>Warranty</td>
                            <td>One Year Parts &amp; Labor</td>
                          </tr>
                          <tr>
                            <td style={{textAlign: 'right'}}>Sensor Dimensions</td>
                            <td>Ø2.75” x 1.2”</td>
                          </tr>
                      </tbody>
                    </table>
              
                </div> 
                <div>
                    <h4>Z-Wave Info</h4>
                    <table>
                      <thead>
                          <tr>
                            <th style={{textAlign: 'right'}}>&nbsp;</th>
                            <th>&nbsp;</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td style={{textAlign: 'right'}}>Radio protocol</td>
                            <td>Z-Wave(500 series)</td>
                          </tr>
                          <tr>
                            <td style={{textAlign: 'right'}}>Radio frequency</td>
                            <td>908.4 MHz US</td>
                          </tr>
                          <tr>
                            <td style={{textAlign: 'right'}}>Capabilities</td>
                            <td>Binary Switch (Siren)<br />Indicator (Chimes)<br />Notifications (Siren) <br />Controllable Volumes, Tones, &amp; LEDs</td>
                          </tr>
                          <tr>
                            <td style={{textAlign: 'right'}}>Range</td>
                            <td>Up to 150’ depending on environment</td>
                          </tr>
                      </tbody>
                    </table>
                    </div>
                  <div>
                    <p style={{display:'none'}}></p>
                    <h4>Resources</h4>
                    <p style={{display:'none'}}></p>
                    <ul>
                      <li>User Manual (<a href="https://s3-us-west-2.amazonaws.com/dome-manuals/Manuals/Dome+Siren+Manual.pdf" target="_blank">PDF</a>)</li>
                      <li>Advanced Manual ( <a href="http://docs.domeha.com/#siren" target="_blank">Web</a>)</li>
                      <li>Installation (<a href="http://docs.domeha.com/#physical-installation16" target="_blank">Web</a>)</li>
                      <li>Basic Z-Wave Usage (<a href="http://docs.domeha.com/#inclusion-amp-exclusion14" target="_blank">Web</a>)</li>
                      <li>Command Classes (<a href="http://docs.domeha.com/#compatible-command-classes19" target="_blank">Web</a>)</li>
                      <li>Configuration Parameters (<a href="http://docs.domeha.com/#configuration-command-class-parameters20" target="_blank">Web</a>)</li>
                    </ul>
                    <p style={{display:'none'}}></p>
                    <h4>Package Contents</h4>
                    <p style={{display:'none'}}></p>
                    <ul>
                      <li>User Manual</li>
                      <li>Siren</li>
                      <li>2x Batteries</li>
                      <li>1x Screw</li>
                      <li>1x Wall Anchor</li>
                    </ul>
                    </div>

              </Row>

          
         
      </div>   
    );
  }
}
