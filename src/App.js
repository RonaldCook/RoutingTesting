import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

var config = require('./config')

class App extends Component {
  constructor (props) {
    super(props);

    // Initialize Firebase
    firebase.initializeApp(config.firebase);
  }

  render() {
    return (
      <div>
        test
      </div>
    );
  }
}

export default App;