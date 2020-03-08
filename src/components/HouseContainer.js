import React from "react";
import HousesFilter from "./HouseFilter";
import HousesList from "./HouseList";
import { withHouseConsumer } from "../context";
import Loading from "./Loading";

function HouseContainer({ context }) {
  const { loading, sortedHouses, houses } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <HousesFilter houses={houses} />
      <HousesList houses={sortedHouses} />
    </>
  );
}

export default withHouseConsumer(HouseContainer);
