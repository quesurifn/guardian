import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {NAV_CLOSE,INCREMENT_CART, DECREMENT_CART, REMOVE_FROM_CART} from './actions/action'

import {withRouter} from 'react-router'

@withRouter
@connect((store) => {
    return {
        nav: store.reducer.nav,
        cart: store.reducer.cart
    }
})
export class LeftNav extends Component {
    componentDidUpdate() {
        if (this.props.nav === true) {
            document.querySelector('.sidenav').style.width = "350px";
        } else {
            document.querySelector('.sidenav').style.width = "0";     
        }
    }

  render() {
	let subtotal = this.props.cart.length > 0 ? this.props.cart.reduce((a,b) => a + b.price * b.quantity, 0) : '$0.00'
	subtotal = subtotal !== '$0.00' ? subtotal.toFixed(2) : '0.00'

 
	let items = this.props.cart.length > 0 ? this.props.cart.map((e) => 
		
            <div className="shopify-buy__cart-item" key={e._id}>
                <div className="shopify-buy__cart-item__image" alt="Product" style={{backgroundRepeat:"no-repeat", backgroundSize: 'contain', margin: "0 1rem", backgroundImage: `url(${e.images[0]})`, backgroundPosition: 'center'}}></div>
                    <span className="shopify-buy__cart-item__title">{e.title}</span>
                    <span style={{position:"absolute", top:'0',left: "5px", cursor:"pointer",color:'#333'}} onClick={() => this.props.dispatch(REMOVE_FROM_CART(e))}>×</span>
                    <span className="shopify-buy__cart-item__price">{e.price}</span>
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
		<nav className="shopify-buy__cart sidenav" style={{zIndex: '99999'}}>
			<div className="shopify-buy__cart__header">
				<h2 className="shopify-buy__cart__title">Cart</h2>
				<button className="shopify-buy__btn--close" onClick={() => this.props.dispatch(NAV_CLOSE())}>
					<span>×</span>
				</button>
			</div>
            
			<div className="shopify-buy__cart-scroll">
                <div className="shopify-buy__cart-items" style={{overflowY: 'scroll'}} >

                {items}
				
                </div>
			</div>
			
			<div className="shopify-buy__cart-bottom">
			    <p className="shopify-buy__cart__subtotal__text" >SUBTOTAL</p>
			    <p className="shopify-buy__cart__subtotal__price" style={{display:'block', color: '#333'}}>${subtotal}</p>
				<p className="shopify-buy__cart__notice">Shipping and discount codes are added at checkout.</p>
				<button className="shopify-buy__btn shopify-buy__btn--cart-checkout" onClick={() => this.props.history.push('/checkout')} type="button">CHECKOUT</button>
			</div> 
		</nav>
    );
  }
}
