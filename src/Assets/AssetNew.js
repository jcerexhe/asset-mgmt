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
      cost: this.state.cost,
      id: id
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
        <form className="form-inline">
          <div className="form-group">
            <input className="form-control" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} placeholder='Name' />
            <input className="form-control" type="number" min="0" value={this.state.cost} onChange={(e) => this.setState({cost: e.target.value})} placeholder='Cost ($)' />
          </div>
          <button className="btn btn-primary" onClick={() => this.writeData()}>Add</button>
        </form>
      </div>
    );
  }
}

export default AssetNew;
