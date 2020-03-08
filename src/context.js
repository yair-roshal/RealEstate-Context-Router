import React, { Component } from "react";
import items from "./data";
const HouseContext = React.createContext();
export default class HouseProvider extends Component {
  state = {
    houses: [],
    sortedHouses: [],
    featuredHouses: [],
    loading: true,

    type: "all",
    countR: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    climate: false,
    pool: false
  };
  //get Data

  componentDidMount() {
    // this.getData
    let houses = this.formatData(items);
    let featuredHouses = houses.filter(house => house.featured === true);
    let maxPrice = Math.max(...houses.map(item => item.price));
    let maxSize = Math.max(...houses.map(item => item.size));

    this.setState({
      houses,
      featuredHouses,
      sortedHouses: houses,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let house = { ...item.fields, images, id };
      return house;
    });
    return tempItems;
  }

  getHouse = slug => {
    let tempHouses = [...this.state.houses];
    const house = tempHouses.find(house => house.slug === slug);
    return house;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value
      },
      this.filterHouses
    );
  };

  filterHouses = () => {
    let {
      houses,
      type,
      countR,
      price,
      minSize,
      maxSize,
      climate,
      pool
    } = this.state;

    //all the houses
    let tempHouses = [...houses];

    //transform value
    countR = parseInt(countR);
    price = parseInt(price);

    //filter by type
    if (type !== "all") {
      tempHouses = tempHouses.filter(house => house.type === type);
    }

    //filter by countR
    if (countR !== 1) {
      tempHouses = tempHouses.filter(house => house.countR >= countR);
    }

    //filter by price
    tempHouses = tempHouses.filter(house => house.price <= price);

    //filter by size
    tempHouses = tempHouses.filter(
      house => house.size >= minSize && house.size <= maxSize
    );

    //filter by climate
    if (climate) {
      tempHouses = tempHouses.filter(house => house.climate === true);
    }

    //filter by pool
    if (pool) {
      tempHouses = tempHouses.filter(house => house.pool === true);
    }

    //change state
    this.setState({
      sortedHouses: tempHouses
    });
  };
  render() {
    return (
      <HouseContext.Provider
        value={{
          ...this.state,
          getHouse: this.getHouse,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </HouseContext.Provider>
    );
  }
}

const HouseConsumer = HouseContext.Consumer;

export function withHouseConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <HouseConsumer>
        {value => <Component {...props} context={value} />}
      </HouseConsumer>
    );
  };
}

export { HouseProvider, HouseConsumer, HouseContext };
