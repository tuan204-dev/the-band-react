import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlaceItem.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)



const PlaceItem = props => {

  const {name, time, desc, img} = props


  return (
    <div className={cx('place-item')}>
      <div className={cx('header')}>
        <img src={img} alt={name} />
      </div>
      <div className={cx('body')}>
        <h3 className={cx('place-name')}>{name}</h3>
        <p className={cx('place-time')}>{time}</p>
        <p className={cx('place-desc')}>{desc}</p>
        <button className={cx('buy-ticket-btn')}>Buy Tickets</button>
      </div>
    </div>
  );
};

PlaceItem.propTypes = {
  
};

export default PlaceItem;