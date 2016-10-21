import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import AssetList from './Assets/AssetList.js';
import AssetNew from './Assets/AssetNew.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: [],
      loaded: false
    };
  }

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDTpgTGcDa5yGbLWISWUlr1wci_GBv5kRY",
      authDomain: "assetmgmt-ddc4c.firebaseapp.com",
      databaseURL: "https://assetmgmt-ddc4c.firebaseio.com",
      storageBucket: "assetmgmt-ddc4c.appspot.com",
      messagingSenderId: "304772918533"
    };
    firebase.initializeApp(config);
    firebase.database.enableLogging(true);

    let assets = [];
    firebase.database().ref('assets').on('value', (snapshot) => {
      // let assets = snapshot.val();
      snapshot.forEach((childSnapshot) => {
        assets.push(childSnapshot.val());
      })
      this.setState({ assets: assets, loaded: true });
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="main-heading">Fixed Asset Management App</h1>

        <div className="row">
          <AssetNew />
          <AssetList assets={this.state.assets} loaded={this.state.loaded} />
        </div>
      </div>
    );
  }
}

export default App;
