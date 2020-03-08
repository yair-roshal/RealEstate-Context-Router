import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/house-1.jpg";
import PropTypes from "prop-types";
// export default function House() {
export default function House({ house }) {
  // console.log(house);

  const { name, slug, images, price } = house;

  return (
    <article className="house">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="apartment house" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/houses/${slug}`} className="btn-primary house-link">
          Features
        </Link>
      </div>
      <p className="house-info">{name}</p>
    </article>
  );
}

House.propTypes = {
  house: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.string.isRequired
  })
};
