import React, { Component } from 'react';
import './App.css';

export class Team extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/')
        }, 5000)
    }

  render() {
    return (
      <div className="notfound">
         <h1>Uh Oh... The page you were looking for doesn't exist. Hang tight while we redirect you to the homepage.</h1>
      </div>   
    );
  }
}
