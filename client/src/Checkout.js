import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import './css/card.css'

import {NAV_CLOSE, INCREMENT_CART, DECREMENT_CART, REMOVE_FROM_CART} from './actions/action'
import './css/checkout.css'

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

		this.state = {
			taxation: false,
			tax: 0,
			total: 0,
			shipping: 0
		}
		this.getTotal = this.getTotal.bind(this)
		this.computeTax = this.computeTax.bind(this)
		this.checkout = this.checkout.bind(this)
	}
  componentDidMount() {
	  this.props.dispatch(NAV_CLOSE())
	  this.getTotal()
  }

  checkout(evt) {
	evt.preventDefault()
	if(this.refs.checkoutForm.checkValidity()) {
		axios.post('http://localhost:3000/api/checkout', {
				"form_data":{
					"first": document.getElementById('first').value,
					"last": document.getElementById('last').value,
					"email": document.getElementById('email').value,
					"phone": document.getElementById('phone').value,
					"address": document.getElementById('address').value,
					"address2": document.getElementById('address2').value,
					"city": document.getElementById('city').value,
					"state": document.getElementById('zip').value,
					"ccname":this.refs.ccname,
					"ccnumber":this.refs.ccnumber,
					"ccexp": this.refs.ccmmdd,
					"cccvc": this.refs.cccvc,
					}, 
				    "cart_data":this.props.cart
		})
		.then((res) => console.log(res))
		.catch((err) => console.error(err))
	} else {
		this.refs.alert.display = 'flex'
	}
  }
  

  computeTax() {
	  if(this.refs.state.value === 'IL') {
		if(this.props.cart.length > 0) {
			let total = this.props.cart.reduce((a,b) => a + b.price * b.quantity, 0)
			let tax = (total * 0.075).toFixed(2)
			this.setState({tax: parseFloat(tax)})
			this.getTotal()
		} else {
			this.setState({tax:0})
		}
	  } else {
		this.setState({tax:0})
	  }
  }


  getTotal() {
	if (this.props.cart.length > 0)	{ 
	  let shipping = this.state.shipping
	  let total = this.props.cart.reduce((a,b) => a + b.price * b.quantity, 0)
	  let tax = this.state.taxation === true ? (total * 0.075).toFixed(2) : 0
	  this.setState({total: shipping + total + parseFloat(tax)})
	} else {
		return 0
	}
  }

  render() {

  
	let items = this.props.cart.length > 0 ? this.props.cart.map((e) => 
		
            <div className="shopify-buy__cart-item" key={e._id}>
                <div className="shopify-buy__cart-item__image" alt="Product" style={{backgroundRepeat:"no-repeat", backgroundSize: 'contain', margin: "0 1rem", backgroundImage: `url(${e.images[0]})`, backgroundPosition: 'center'}}></div>
                    <span className="shopify-buy__cart-item__title">{e.title}</span>
                    <span style={{position:"absolute", top:'0',left: "5px", cursor:"pointer",color:'#333'}} onClick={() => this.props.dispatch(REMOVE_FROM_CART(e))}>×</span>
                    <span className="shopify-buy__cart-item__price">${e.price * e.quantity}</span>
                    <div className="shopify-buy__quantity-container" style={{marginLeft:"120px"}}>
                        <button className="shopify-buy__btn--seamless shopify-buy__quantity-decrement" type="button" onClick={() => this.props.dispatch(DECREMENT_CART(e))}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4 7h8v2H4z"></path></svg>
                        </button>
                        <input className="shopify-buy__quantity shopify-buy__cart-item__quantity-input" type="number" min="0" value={e.quantity}  style={{height: "30px" , border:"solid 1px #d3dbe2"}} readOnly/>
                        <button className="shopify-buy__btn--seamless shopify-buy__quantity-increment" type="button" onClick={() => this.props.dispatch(INCREMENT_CART(e))}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M12 7H9V4H7v3H4v2h3v3h2V9h3z"></path></svg>
                        </button>
                    </div>
                </div>


	) :  <h3 className='add-items'>Please add items to your cart</h3>
	

    return (
        <div className="App"> 
			<form ref='checkoutForm' onSubmit={this.checkout}>
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
							
					
								<div className="form-container"> 
									<input ref='email' className="form-text" type="email" id='email' name='email' placeholder="Enter email" required />
								</div>
								<div className="form-container"> 
									<input ref="phone" className="form-text" type="tel" id='phone' name='phone' placeholder="847-222-5555" required />
								</div>
								<hr />

								<h3 className='shippingTitle'>Shipping Address</h3>
								<div className='form-inline'>
									<div className="form-container"> 
										<input ref='first' id='first' className="form-text" type="text" name='first' placeholder="First Name" required />
									</div>
									<div className="form-container"> 
										<input ref='last' id='last' className="form-text" type="text" name='last' placeholder="Last Name"  required />
									</div>
								</div>
								<div className="form-container"> 
									<input ref='address' id='address' className="form-text" type="text" name='address' placeholder="Address" required />
								</div>
								<div className="form-container"> 
									<input ref='address2' id='address2' className="form-text" type="text" name='address2' placeholder="Address 2" />
								</div>
								<div className='form-inline'>
									<div className="form-container"> 
										<input ref='city' id='city' className="form-text" type="text" name='city' placeholder="City"  pattern="[a-zA-z]{2,}"  required />
									</div>
									<select name="state" ref='state' id='state' onChange={() => this.computeTax()} name='state' required>
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
									<input ref='zip' id='zip' className="form-text" type="text" placeholder="Zip Code" name='zip' pattern='[0-9]{5}' required />
								</div>
								
					

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
							<div className='checkout-alert' ref='alert'>
								<span onClick={() => this.refs.alert.style.display ='none' }>x</span>
								<span>Please check the form and try again.</span> 
							</div>
		
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
					
				
						<div className="form-container"> 
							<input ref='ccname' name='ccname'placeholder="Full name" type="text" name="CCname" required/>
						</div>
						<div className="form-container"> 
							<input ref='ccnumber' name='ccnumber' placeholder="Card number" type="text" name="CCnumber" required/>
						</div>
						<div className='form-inline'>
							<div className="form-container"> 
								<input ref='ccmmdd' name='ccexp' placeholder="MM/YY" type="text" name="CCexpiry" required/>
							</div>
							<div className="form-container"> 
								<input ref='cccvc' name='cccvc' placeholder="CVC" type="text" name="CCcvc" required/>
							</div>
						</div>
					
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

                            <div className="shopify-buy__cart-items" style={{padding:'0',height:'360px',overflowY:'scroll'}}>
								{items}
							</div>
						
							<div className='totalBox'>
								
							    <div  className='totalNames' >
								    <div className='shipping'>Shipping:</div>
								        <div className='tax'>Tax:</div>
										    <div className='total'>Total Due Today:</div>
										</div>
										<div className='totals'>
										    <div className='shipping'>${this.state.shipping}</div>
											<div className='tax'>${this.state.tax}</div>
											<div className='total'>${this.state.total}</div>
										</div>
										<button className='placeorder' type='submit'>PLACE ORDER</button>
									</div>
									
								</div>
								
					
								
					</div>

				</div>
			</div>
			</form>
    	</div>

     
    
    );
  }
}