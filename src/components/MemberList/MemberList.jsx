import React from 'react';
import PropTypes from 'prop-types';
import memberImg from '../../assets/image/member/member.jpg'
import styles from './MemberList.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

const MemberList = props => {
  return (
    <div className={cx('member-list')}>
      <div className={cx('member-item')}>
        <p className={cx('member-item-name')}>Name</p>
        <img className={cx('member-item-img')} src={memberImg} alt="member img" />
      </div>
      <div className={cx('member-item')}>
        <p className={cx('member-item-name')}>Name</p>
        <img className={cx('member-item-img')} src={memberImg} alt="member img" />
      </div>
      <div className={cx('member-item')}>
        <p className={cx('member-item-name')}>Name</p>
        <img className={cx('member-item-img')} src={memberImg} alt="member img" />
      </div>
    </div>
  );
};

MemberList.propTypes = {
  
};

export default MemberList;