import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'

@connect((store) => {
  return {
	tab: store.reducer.tab
  }
})
export class Tab extends Component {
  componentDidUpdate() {
    if (this.props.tab === false) {
        this.refs.tab.style.visibility = 'none'
    } else {
        this.refs.tab.style.visibility = 'block'
    }
  }
  render() {
    return (
    <div className="floatingTab" ref='tab'>
        <i className='cart-icon'></i>
    </div>
    );
  }
}


