import React from "react";

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

//    for all pages 404
Hero.defaultProps = {
  hero: "defaultHero"
};
