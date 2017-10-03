import React, { Component } from 'react';
import './App.css';
import './css/card.css'


import {connect} from 'react-redux';


import CardReactFormContainer from 'card-react';


@connect((store) => {
  return {
	cart: store.reducer.cart
  }
})
export class Checkout extends Component {
  constructor() {
    super() 
  }








  render() {

    var items;
    console.log(this.props.cart)
    if (this.props.cart.length !== 0 ) {
    
    
    
   items = <div className="shopify-buy__cart-item" style={{background:'white',width:'100%',height:'110px', boxSizing: 'border-box', border:'1px solid #e5e5e4'}}>	
				<div style={{margin:'20px 0px', padding: '0 15px'}}>
				    <div className="shopify-buy__cart-item__image" alt="Product" style={{backgroundRepeat:'no-repeat', backgroundSize: 'contain'}}></div>
					    <span className="shopify-buy__cart-item__title" style={{textAlign:'left',fontWeight:'600'}}></span>
						<span style={{position:'absolute', top:'0',left:'5px',cursor:'pointer'}}>×</span>
						<span className="shopify-buy__cart-item__price"></span>
						<div className="shopify-buy__quantity-container" style={{marginLeft:'80px'}}>
							<button className="shopify-buy__btn--seamless shopify-buy__quantity-decrement" type="button">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4 7h8v2H4z"></path></svg>
							</button>
							<input className="shopify-buy__quantity shopify-buy__cart-item__quantity-input" type="number" min="0" aria-label="Quantity" style={{height: '30px', border:'solid 1px #d3dbe2'}} />
							<button className="shopify-buy__btn--seamless shopify-buy__quantity-increment" type="button">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M12 7H9V4H7v3H4v2h3v3h2V9h3z"></path></svg>
							</button>
						</div>
					</div>
                </div>
    } else {
        items = <h2 className='empty-cart' >Your Cart is Empty!!</h2>
    }
	

    return (
        <div className="App"> 
			
			<div className="bgColor">
		
				<div className='checkoutRow'>
					
					<div className='checkout-col'>

						<div className='checkoutCard one'>
							<div className='inlineTitle'>
								<div className='checkoutBadge'>
									<span>1</span>
								</div>
								<span className='span2'>CUSTOMER INFO</span>
							</div>
							<form>
								<div className="form-container"> 
									<input ref='email' className="form-text" type="email" id='email' placeholder="Enter email" required />
								</div>
								<div className="form-container"> 
									<input ref="phone" className="form-text" type="tel" id='phone' placeholder="847-222-5555" required />
								</div>
								<hr />

								<h3 className='shippingTitle'>Billing Address</h3>
								<div className='form-inline'>
									<div className="form-container"> 
										<input ref='first' id='first' className="form-text" type="text" placeholder="First Name" required />
									</div>
									<div className="form-container"> 
										<input ref='last' id='last' className="form-text" type="text" placeholder="Last Name"  required />
									</div>
								</div>
								<div className="form-container"> 
									<input ref='address' id='address' className="form-text" type="text" placeholder="Address" required />
								</div>
								<div className="form-container"> 
									<input ref='address2' className="form-text" type="text" placeholder="Address 2" />
								</div>
								<div className='form-inline'>
									<div className="form-container"> 
										<input ref='city' id='city' className="form-text" type="text" placeholder="City"  pattern="[a-zA-z]{2,}"  required />
									</div>
									<select name="state" ref='state' id='state' onChange={this.computeTax} required>
										<option value="">Select State</option>
										<option value="AL">Alabama</option>
										<option value="AK">Alaska</option>
										<option value="AZ">Arizona</option>
										<option value="AR">Arkansas</option>
										<option value="CA">California</option>
										<option value="CO">Colorado</option>
										<option value="CT">Connecticut</option>
										<option value="DE">Delaware</option>
										<option value="DC">District of Columbia</option>
										<option value="FL">Florida</option>
										<option value="GA">Georgia</option>
										<option value="HI">Hawaii</option>
										<option value="ID">Idaho</option>
										<option value="IL">Illinois</option>
										<option value="IN">Indiana</option>
										<option value="IA">Iowa</option>
										<option value="KS">Kansas</option>
										<option value="KY">Kentucky</option>
										<option value="LA">Louisiana</option>
										<option value="ME">Maine</option>
										<option value="MD">Maryland</option>
										<option value="MA">Massachusetts</option>
										<option value="MI">Michigan</option>
										<option value="MN">Minnesota</option>
										<option value="MS">Mississippi</option>
										<option value="MO">Missouri</option>
										<option value="MT">Montana</option>
										<option value="NE">Nebraska</option>
										<option value="NV">Nevada</option>
										<option value="NH">New Hampshire</option>
										<option value="NJ">New Jersey</option>
										<option value="NM">New Mexico</option>
										<option value="NY">New York</option>
										<option value="NC">North Carolina</option>
										<option value="ND">North Dakota</option>
										<option value="OH">Ohio</option>
										<option value="OK">Oklahoma</option>
										<option value="OR">Oregon</option>
										<option value="PA">Pennsylvania</option>
										<option value="RI">Rhode Island</option>
										<option value="SC">South Carolina</option>
										<option value="SD">South Dakota</option>
										<option value="TN">Tennessee</option>
										<option value="TX">Texas</option>
										<option value="UT">Utah</option>
										<option value="VT">Vermont</option>
										<option value="VA">Virginia</option>
										<option value="WA">Washington</option>
										<option value="WV">West Virginia</option>
										<option value="WI">Wisconsin</option>
										<option value="WY">Wyoming</option>
									</select>
								</div>
								<div className="form-container"> 
									<input ref='zip' id='zip' className="form-text" type="text" placeholder="Zip Code" pattern='[0-9]{5}' required />
								</div>
								
							</form>

						</div>
					</div>


					<div className='checkout-col'>
						<div className='checkoutCard two'>
							
							<div className='inlineTitle'>
								<div className='checkoutBadge'>
									<span>2</span>
								</div>
								<span className='span2'>PAYMENT</span>
						
							</div>
							<hr />
							<div className='cardContainer'>
								<div id="card-wrapper"></div>
									<CardReactFormContainer
					// the id of the container element where you want to render the card element.
					// the card component can be rendered anywhere (doesn't have to be in ReactCardFormContainer).
					container="card-wrapper" // required
					
					// an object contain the form inputs names.
					// every input must have a unique name prop.
					formInputsNames={
						{
						number: 'CCnumber', // optional — default "number"
						expiry: 'CCexpiry',// optional — default "expiry"
						cvc: 'CCcvc', // optional — default "cvc"
						name: 'CCname' // optional - default "name"
						}
					}
					
					
					// the class name attribute to add to the input field and the corresponding part of the card element,
					// when the input is valid/invalid.
					classes={
						{
						valid: 'valid-input', // optional — default 'jp-card-valid'
						invalid: 'invalid-input' // optional — default 'jp-card-invalid'
						}
					}
					
					// specify whether you want to format the form inputs or not
					formatting={true} // optional - default true
					>
					
					<form>
						<div className="form-container"> 
							<input ref='ccname' id='ccname' placeholder="Full name" type="text" name="CCname" required/>
						</div>
						<div className="form-container"> 
							<input ref='ccnumber' id='ccnumber' placeholder="Card number" type="text" name="CCnumber" required/>
						</div>
						<div className='form-inline'>
							<div className="form-container"> 
								<input ref='ccmmdd' id='ccmmdd' placeholder="MM/YY" type="text" name="CCexpiry" required/>
							</div>
							<div className="form-container"> 
								<input ref='cccvc' id='cccvc' placeholder="CVC" type="text" name="CCcvc" required/>
							</div>
						</div>
					</form>
				</CardReactFormContainer>
					
							</div>
						</div>
					</div>


					<div className='checkout-col'>
						<div className='checkoutCard three'>
							<div className='inlineTitle'>
								<div className='checkoutBadge'>
									<span>3</span>
								</div>
								<span className='span2'>CONFIRM</span>
							</div>

                            <div className="shopify-buy__cart-items" style={{padding:'0',height:'265px',overflowY:'scroll'}}>
								{items}
							</div>
						
							<div className='totalBox'>
								
							    <div  className='totalNames' >
								    <div className='shipping'>Shipping:</div>
								        <div className='tax'>Tax:</div>
										    <div className='total'>Total Due Today:</div>
										</div>
										<div className='totals'>
										    <div className='shipping'>Included</div>
											<div className='tax'></div>
											<div className='total'>$</div>
										</div>
											
								
											<button className='placeorder' onClick={this.checkout}>PLACE ORDER</button>
									</div>
									
								</div>
								
					
								
					</div>

				</div>
			</div>
    	</div>
     
    
    );
  }
}