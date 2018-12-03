import React, { Component } from 'react';
import firebase from './firebase';
import FileUploader from 'react-firebase-file-uploader';
import AddImage from './components/AddImage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddImage />
      </div>
    );
  }
}

export default App;
