import React, { Component, PropTypes } from 'react';
import AssetItem from './AssetItem.js';
import './Assets.css';

class AssetList extends Component {
  render() {
    let totalCost = 0;
    this.props.assets.map((asset) => {totalCost += parseFloat(asset.cost)});
    console.log(totalCost);
    return (
      <div className="col-md-6">
        <h3>Asset List</h3>
        <p>{this.props.loaded ? `Total: ${this.props.assets.length} items` : 'Loading...'}</p>
        <p>{this.props.loaded ? `Total Cost: $${totalCost}` : ''}</p>
        {this.props.assets.map((asset) => {
          return (<div key={asset.cost + asset.name} onClick={() => this.props.setFeatured(asset)}><AssetItem name={asset.name} cost={asset.cost} /></div>);
        })}
      </div>
    );
  }
}

AssetList.propTypes = {
  assets: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
  setFeatured: PropTypes.func.isRequired
};

export default AssetList;
