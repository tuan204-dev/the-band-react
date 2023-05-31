import React from 'react';
import PropTypes from 'prop-types';
import styles from './TicketList.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)


const TicketList = props => {
  return (
    <div className={cx('ticket-list')}>
      <div className={cx('ticket-item')}>
        <p className={cx('ticket-item-date')}>September</p>
        <span className={cx('ticket-item-status')}>Sold out</span>
      </div>
      <div className={cx('ticket-item')}>
        <p className={cx('ticket-item-date')}>October</p>
        <span className={cx('ticket-item-status')}>Sold out</span>
      </div>
      <div className={cx('ticket-item')}>
        <p className={cx('ticket-item-date')}>November</p>
        <span className={cx('ticket-item-quantity')}>3</span>
      </div>
    </div>
  );
};

TicketList.propTypes = {
  
};

export default TicketList;