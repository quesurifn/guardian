import React, { Component } from 'react';
import './App.css';

export class NotFound extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/')
        }, 512100)
    }

  render() {
    return (
      <div className="notfound">
         <h1>404</h1>
         <h2>We couldn't find what you were looking for</h2>
      </div>   
    );
  }
}
