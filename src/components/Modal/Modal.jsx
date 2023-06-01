import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";
import classNames from "classnames/bind";
import CloseIcon from "@mui/icons-material/Close";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import CheckIcon from "@mui/icons-material/Check";

const cx = classNames.bind(styles);

const Modal = (props) => {
  const {setModalVisible} = props



  return (
    <div onClick={() => setModalVisible(false)} className={cx("wrapper")}>
      <div onClick={(e) => e.stopPropagation()} className={cx("modal")}>
        <div className={cx("header")}>
          <div className={cx("header-title")}>
            <BusinessCenterIcon className={cx('header-title-icon')} />
            <h2>Tickets</h2>
          </div>
          <button onClick={() => setModalVisible(false)} className={cx("header-close-btn")}>
            <CloseIcon />
          </button>
        </div>
        <div className={cx("body")}>
          <form action='#'>
            <label className={cx('form-label')} htmlFor='amountOfPeople'>
              <ShoppingCartIcon className={cx('form-label-icon')} />
              <p>Tickets, $15 per person</p>
            </label>
            <input className={cx('form-control')} type='text' name='amountOfPeople' placeholder="How many?" />
            <label className={cx('form-label')} htmlFor='email'>
              <PersonIcon className={cx('form-label-icon')} />
              <p>Send To</p>
            </label>
            <input className={cx('form-control')} type='email' name='email' placeholder="Enter email" />

            <button className={cx('form-submit-btn')} type='submit'>
              PAY <CheckIcon />
            </button>
          </form>
        </div>
        <div className={cx("footer")}>
          <button onClick={() => setModalVisible(false)} className={cx("footer-close-btn")}>
            Close <CloseIcon />
          </button>
          <div className={cx("footer-help")}>
            Need{" "}
            <a
              href='https://www.facebook.com/tuan204.dev'
              target='_blank'
              rel='noopener noreferrer'
            >
              help?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
