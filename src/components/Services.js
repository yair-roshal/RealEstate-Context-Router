import React, { Component } from "react";

import { FiCompass, FiCrosshair, FiMap, FiUserCheck } from "react-icons/fi";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FiUserCheck />,
        title: "Real Estate portal",
        info: `Thinking about selling your home?
        You can find your buyer now!`
      },
      {
        icon: <FiCompass />,
        title: "Agent & Office Search",
        info: `We are always close by!
        Find your local real estate agent or office here.`
      },

      {
        icon: <FiCrosshair />,
        title: "Hot properties",
        info: `The hottest properties in the market
        are just a click away!`
      },

      {
        icon: <FiMap />,
        title: "   Investment properties",
        info: `Looking to invest in Israel?
        Check out our wide selection!`
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
