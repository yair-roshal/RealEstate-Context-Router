import React, { Component } from "react";
import defaultBcg from "../images/house-1.jpg";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { HouseContext } from "../context";
import StyledHero from "../components/StyledHero";
export default class SingleHouse extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = HouseContext;
  // componentDidMount(){}

  render() {
    const { getHouse } = this.context;
    const house = getHouse(this.state.slug);
    // only need for componentDidMount(){}
    if (!house) {
      return (
        <div className="error">
          <h3>no sych could be found</h3>
          <Link to="/houses" className="btn-primary">
            back to houses
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      countR,
      size,
      price,
      extras,
      climate,
      pool,
      images
    } = house;
    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} house`}>
            <Link to="/houses" className="btn-primary">
              back to houses
            </Link>
          </Banner>
        </StyledHero>

        <section className="apartment-house">
          <div className="apartment-house-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="apartment-house-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} square metres</h6>
              <h6>
                 count Rooms:{" "}
                {countR > 1 ? `${countR} rooms` : `${countR} room`}
              </h6>
              <h6>{pool ? "swimming pool: included" 
                : "swimming pool no included"}</h6>
              <h6>{climate && "climate control: included"}</h6>
            </article>
          </div>
        </section>

<section className="house-extras">
  <h6>extras</h6>
  <ul className="extras">
    {extras.map((item,index) => {
      return <li key={index}>- {item}</li>
    })}
  </ul>
</section>


      </>
    );
  }
}
