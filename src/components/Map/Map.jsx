import React from 'react';
import PropTypes from 'prop-types';
import styles from './Map.module.scss'
import classNames from 'classnames/bind';
import mapImg from '../../assets/image/map/map.jpg'

const cx = classNames.bind(styles)

const Map = props => {
  return (
    <div className={cx('map')}>
      <img src={mapImg} alt="Map" />
    </div>
  );
};

Map.propTypes = {
  
};

export default Map;