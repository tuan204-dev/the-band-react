import React from "react";
import PropTypes from "prop-types";
import styles from "./ContentSection.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ContentSection = (props) => {
  const { children, bgcolor, title, subTitle, isDesc = false, desc } = props;

  return (
    <div style={{ backgroundColor: `${bgcolor}` }} className={cx("wrapper")}>
      <div className={cx("content-section")}>
        <h2
          style={{ color: bgcolor === "#000" && "#fff" }}
          className={cx("title")}
        >
          {title}
        </h2>
        <p
          style={{ color: bgcolor === "#000" && "#fff" }}
          className={cx("sub-title")}
        >
          {subTitle}
        </p>
        {isDesc && <p className={cx("desc")}>{desc}</p>}
        <div style={{ width: "100%" }}>{children}</div>
      </div>
    </div>
  );
};

ContentSection.propTypes = {};

export default ContentSection;
