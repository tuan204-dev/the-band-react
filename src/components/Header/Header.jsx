import React, { useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const navTitle = ["home", "band", "tour", "contact", "more"];

const subNavTitle = ["Merchandise", "Extras", "Media"];

const SubNav = () => {
  return (
    <div className={cx("sub-nav")}>
      {subNavTitle.map((item, index) => (
        <button className={cx("sub-nav-item")} key={index}>
          <a href='#'>{item}</a>
        </button>
      ))}
    </div>
  );
};

const Header = (props) => {
  const [isSubNav, setSubNav] = useState(false);

  return (
    <header className={cx("header")}>
      <nav className={cx("navbar")}>
        {navTitle.map((item, index) => (
          <button
            onMouseEnter={() => {item === 'more' && setSubNav(true)}}
            onMouseLeave={() => setSubNav(false)}
            className={cx("navbar-item")}
            key={index}
          >
            {item} {item === "more" && <FontAwesomeIcon icon={faCaretDown} />}
            {item === "more" && isSubNav && <SubNav />}
          </button>
        ))}
      </nav>

      <div className={cx("search-btn")}>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
