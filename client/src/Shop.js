import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import './css/shop.css'

import axios from 'axios'


import {LOAD_PRODUCTS, ADD_TO_CART, NAV_OPEN} from './actions/action'


import valve from './images/buy-card-2.png'
import kit from './images/how-slider-3.png'
import detector from './images/buy-card-1.png'

import {connect} from 'react-redux'


@connect((store) => {
  return {
	products: store.reducer.products
  }
})
export class Shop extends Component {
    constructor() {
        super() 

        this.addToCart = this.addToCart.bind(this)
    }
 

    addToCart(obj) {
        console.log(obj,'obj')
        this.props.dispatch(ADD_TO_CART(obj))
        this.props.dispatch(NAV_OPEN())
    }

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

  componentWillMount() {
      this.props.dispatch(LOAD_PRODUCTS())
  }

  render() {
    return (
      <div className='shop'>

          {this.props.products.map((e) => {
        return  <div className='shop-card-container' key={e._id}>
                    <div className='shop-card'>
                    <Link to={e.link}>
                        <img src={e.images[0]} alt='Valve Controller' /> 
                    </Link>
                    </div>
                    {e.comingSoon === true ? (
                        <p className='coming-soon'>Coming Soon!</p>
                    ): (
                        <p className='coming-soon'>Available Now!</p>
                    )
                        
                    
                    }
                    <h3>{e.name}</h3>
                    <button className='red-button' onClick={() => this.addToCart(e)}>add to cart</button>
                 </div>})}
       


      </div>   
    );
  }
}
