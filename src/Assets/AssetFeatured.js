import React, { PropTypes } from 'react';
import './Assets.css';

const AssetFeatured = (props) => {
  return (
    <div className="col-md-4">
      <div className="featured-card">
        <span className="close-marker" onClick={() => props.resetFeatured()}>x</span>
        <h4>{props.featured.name}</h4>
        <h5>${props.featured.cost}</h5>
        <img role="presentation" className="featured-map" src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=300x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=" />

      </div>
    </div>
  );
};

AssetFeatured.propTypes = {
  name: PropTypes.string,
  cost: PropTypes.string
};

export default AssetFeatured;
