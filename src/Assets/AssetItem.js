import React, { PropTypes } from 'react';
import './Assets.css';

const AssetItem = (props) => {
  return (
    <li className="list-item">
      <span>{props.name} - ${props.cost}</span>
    </li>
  );
};

AssetItem.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired
};

export default AssetItem;
