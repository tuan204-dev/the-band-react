import React from "react";
import styles from "./Places.module.scss";
import classNames from "classnames/bind";
import newyorkImg from "../../assets/image/places/newyork.jpg";
import parisImg from "../../assets/image/places/paris.jpg";
import sanfranImg from "../../assets/image/places/sanfran.jpg";
import PlaceItem from "./PlaceItem/PlaceItem";

const cx = classNames.bind(styles);

const data = [
  {
    name: "New York",
    time: "Fri 27 Nov 2016",
    desc: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
    img: newyorkImg,
  },
  {
    name: "Paris",
    time: "Sat 28 Nov 2016",
    desc: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
    img: parisImg,
  },
  {
    name: "San Francisco",
    time: "Sun 29 Nov 2016",
    desc: "Praesent tincidunt sed tellus ut rutrum sed vitae justo.",
    img: sanfranImg,
  },
];

const Places = (props) => {
  const { setModalVisible } = props;

  return (
    <div className={cx("places")}>
      {data.map((place, index) => (
        <PlaceItem
          setModalVisible={setModalVisible}
          key={index}
          name={place.name}
          time={place.time}
          desc={place.desc}
          img={place.img}
        />
      ))}
    </div>
  );
};

export default Places;
