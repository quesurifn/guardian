import React, { Component } from 'react';
import './App.css';

export class NewCustomer extends Component {
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
      <div className="newcustomer">
         <h1>New to Guardian?</h1>
         <h2>Sign up here.</h2>
            <form name="Customer" method="post" action="https://store.elexausa.com/default.aspx"> 
                <div className='inline-form'>
                    <div className='form-container'>
                        <input type="text" className='form-text' name="FIRST_NAME" placeholder='First Name'/> 
                    </div>
                    <div className='form-container'>
                        <input type="text" className='form-text' name="LAST_NAME" placeholder='Last Name'/> 
                    </div>
                </div>
                <div className='form-container'>
                    <input type="tel" name="PHONE_NUM" className='form-text' placeholder='Phone Ex. 847-777-9999' />
                </div>
                <div className='form-container'>
                    <input type="email" name="EMAIL" className='form-text' placeholder='Email'/>
                </div> 
                <input type="hidden" name="ADDRESS_LABEL" />
                <div className='address'> 
                    <div className='form-container'>
                        <input type="text" name="ADDRESS1" className='form-text' placeholder='Address 1' />
                    </div>
                    <div className='form-container'>
                        <input type="text" name="ADDRESS2" className='form-text' placeholder='Address 2' /> 
                    </div>
                    <div className='inline-form'>
                        <div className='form-container'>
                            <input type="text" name="CITY" className='form-text' placeholder='City' /> 
                        </div>
                        <div className='form-container'>
                            <input type="text" name="STATE" className='form-text' placeholder='State Ex. IL'/>
                        </div>
                    </div>
                    <div className='form-container'>
                        <input type="number" name="POSTAL_CODE" className='form-text' placeholder='Zipcode Ex. 60010' /> 
                    </div>
                </div>


                
                

                <div className='password'>
                    <div className='form-container'>
                        <input type="password" name="PASSWORD" placeholder='6+' />
                    </div>
                    <div className='form-container'>
                        <input type="password" placeholder='Verify Password' />
                    </div>
                </div>
                    


                <input type="hidden" name="COUNTRY" value='US'/> 
                <input type="hidden" name="ADDRESS_TYPE" value="0" /> 
                <input type="hidden" name="PRIMARY_SHIP" value="0" /> 
                <input type="hidden" name="PRIMARY_BILL" value="0" /> 
                <input type="hidden" name="MAILING_LIST" value="1" /> 
                <input type="hidden" name="ReplyURL" value="http://localhost:3000/api/reply" /> 
                <input type="hidden" name="Mode" value="Reply-Only" />
                <input type='hidden' name="Match1" value="PASSWORD" />
                <input type="hidden" name="Match2" value="EMAIL" />

                <button className='red-button' type="submit">Shop Online</button>

            
            </form> 
        
      </div>   
    );
  }
}
