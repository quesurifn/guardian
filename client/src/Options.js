import React, { Component } from 'react';
import './App.css';
import {Row, Col} from 'react-materialize'
import {Link} from 'react-router-dom'




export class Options extends Component {
    componentDidMount() {
         window.scrollTo(0, 0)
    }
 

  render() {
  
    return (
        <div className='options'>
            <Row>
                <Col s={12}>

                    <div className='optionsContainer'>
                        
                        <h1>Do you want to...?</h1>

                        <div className='inlineFlex'>
                            <Link to='/preorder' className='blueButton marginLR'>Pre-Order Guardian</Link>
                            <Link to='/notify'   className='blueButton marginLR'>Get Release Notifications</Link>
                            <Link to='/newsletter'   className='blueButton marginLR'>Join Our Newsletter</Link>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    )    
  }
}