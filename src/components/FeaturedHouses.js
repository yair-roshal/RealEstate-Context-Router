import React, { Component } from "react";
import { HouseContext } from "../context";
import Loading from "./Loading";
import House from "./House";
import Title from "./Title";
export default class FeaturedHouses extends Component {
  static contextType = HouseContext;
  render() {
    let { loading, featuredHouses: houses } = this.context;
    houses = houses.map(house => {
      return <House key={house.id} house={house} />;
    });

    return (
      <section className="featured-houses">
        <Title title="featured houses" />
        <div className="featured-houses-center">
          {loading ? <Loading /> : houses}
        </div>
      </section>
    );
  }
}
