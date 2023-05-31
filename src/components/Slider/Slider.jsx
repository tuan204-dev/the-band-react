import React from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import styles from './Slider.module.scss'
import classNames from "classnames/bind";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/image/slider/1.jpg'
import image2 from '../../assets/image/slider/2.jpg'
import image3 from '../../assets/image/slider/3.jpg'

const cx = classNames.bind(styles)


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true
};

const data = [
  {
    img: image1,
    title: 'New York',
    desc: 'The atmosphere in New York is lorem ipsum.'
  },
  {
    img: image2,
    title: 'Chicago',
    desc: `Thank you, Chicago - A night we won't forget.`
  },
  {
    img: image3,
    title: 'Los Angeles',
    desc: 'We had the best time playing at Venice Beach!'
  },
]

const Slider = (props) => {
  return (
    <div className={cx('slider')}>
      <Slick {...settings}>
        {data.map((item, index) => (
          <div className={cx('slider-item')} key={index}>
            <img src={item.img} alt="slider-img" />
            <div className={cx('slider-item-content')}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </Slick>
    </div>
  );
};


export default Slider;
