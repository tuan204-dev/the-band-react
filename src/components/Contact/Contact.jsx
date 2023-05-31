import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const dataContact = [
  {
    icon: faLocationDot,
    content: "Chicago, US",
  },
  {
    icon: faPhone,
    content: "Phone: +00 151515",
  },
  {
    icon: faEnvelope,
    content: " Email: mail@mail.com",
  },
];

const Contact = (props) => {
  return (
    <div className={cx("contact")}>
      <div className={cx("contact-info")}>
        {dataContact.map((item, index) => (
          <div className={cx("contact-info-item")} key={index}>
            <div className={cx("contact-info-item-icon")}>
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <div className={cx("contact-info-item-content")}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <div className={cx("contact-form")}>
        <form onSubmit={(e) => e.preventDefault()} action='#'>
          <div className={cx("full-width")}>
            <div>
              <input required placeholder='Name' type='text' />
            </div>
            <div>
              <input required placeholder='Email' type='email' />
            </div>
          </div>
          <div className={cx("full-width")}>
            <div>
              <input required placeholder='Message' type='text' />
            </div>
          </div>

          <div className={cx({'full-width': true, 'right-side': true})}>
            <button className={cx("submit-btn")}>SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
