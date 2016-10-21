import React, { Component } from 'react';
import './Assets.css';
import firebase from 'firebase';

class AssetNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cost: '',
    };
  }

  writeData() {
    let id = Math.floor(Math.random() * (88888 - 10000 + 1)) + 10000;
    firebase.database().ref('/assets/' + id).set({
      name: this.state.name,
      cost: this.state.cost
    });
    this.setState({
      name: '',
      cost: ''
    });
  }

  render() {
    return (
      <div className="col-md-6">
        <h3>New Asset</h3>
        <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} placeholder='name' />
        <input value={this.state.cost} onChange={(e) => this.setState({cost: e.target.value})} placeholder='cost' />
        <button onClick={() => this.writeData()}>Add</button>
      </div>
    );
  }
}

export default AssetNew;
