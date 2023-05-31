import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const cx = classNames.bind(styles);

const Footer = (props) => {
  return (
    <div className={cx("footer")}>
      <div className={cx("social-network")}>
        <FacebookIcon  className={cx('social-network-icon')} />
        <InstagramIcon className={cx('social-network-icon')} />
        <TwitterIcon className={cx('social-network-icon')} />
        <LinkedInIcon className={cx('social-network-icon')} />
        <WhatsAppIcon className={cx('social-network-icon')} />
      </div>

      <div className={cx("copyright")}>
        Powered by{" "}
        <a target='_blank' href='facebook.com/tuan204.dev'>
          tuan204.dev
        </a>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
