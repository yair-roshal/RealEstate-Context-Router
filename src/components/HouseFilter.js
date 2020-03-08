import React from "react";
import { useContext } from "react";
import { HouseContext } from "../context";
import Title from "./Title";

//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function HouseFilter({ houses }) {
  const context = useContext(HouseContext);
  const {
    handleChange,
    type,
    countR,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    climate,
    pool
  } = context;

  //get   unique types
  let types = getUnique(houses, "type");
  //add all
  types = ["all", ...types];

  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(houses, "countR");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search houses" />
      <form className="filter-form">
        {/* select Property Type */}
        <div className="form-group">
          <label htmlFor="type">Property Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select Property Type */}

        {/* Count houses  */}
        <div className="form-group">
          <label htmlFor="countR">Count Rooms </label>
          <select
            name="countR"
            id="countR"
            value={countR}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guests */}

        {/* house price */}
        <div className="form-group">
          <label htmlFor="price">house price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of house price */}

        {/* house size */}
        <div className="form-group">
          <label htmlFor="price">house size</label>

          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            ></input>

            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            ></input>
          </div>
        </div>
        {/* end of house size */}

        {/* 555*/}
        <div className="form-group">
          <div className="apartment-extra"></div>
        </div>
        {/* end of 555 */}

        {/* climate control*/}
        <div className="form-group">
          <div className="apartment-extra">
            <input
              type="checkbox"
              name="climate"
              id="climate"
              checked={climate}
              onChange={handleChange}
            />
            <label htmlFor="climate">climate control</label>
          </div>
        </div>
        {/* end of climate control */}

        {/* pool*/}
        <div className="form-group">
          <div className="apartment-extra">
            <input
              type="checkbox"
              name="pool"
              id="pool"
              checked={pool}
              onChange={handleChange}
            />
            <label htmlFor="pool">pool</label>
          </div>
        </div>
        {/* end of pool */}
      </form>
    </section>
  );
}
