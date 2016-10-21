import React, { Component } from 'react';
import AssetItem from './AssetItem.js';
import './Assets.css';

class AssetList extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h3>Asset List</h3>
        <p>{this.props.loaded ? `Total: ${this.props.assets.length} items` : 'Loading...'}</p>
        {this.props.assets.map((asset) => {
          return (<div key={asset.cost + asset.name}><AssetItem name={asset.name} cost={asset.cost} /></div>);
        })}
      </div>
    );
  }
}

export default AssetList;
