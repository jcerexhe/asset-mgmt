import React, { PropTypes } from 'react';
import './Assets.css';

const AssetItem = (props) => {
  return (
    <li>
      <span>{props.name} - ${props.cost}</span>
    </li>
  );
};

AssetItem.propTypes = {
  name: PropTypes.string,
  cost: PropTypes.string
};

export default AssetItem;
