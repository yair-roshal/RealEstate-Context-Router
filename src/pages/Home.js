import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from '../components/Services'
import FeaturedHouses from '../components/FeaturedHouses'
// import Button from '../components/StyledHero'

export default function Home() {
  return (
      <>
    <Hero>
      <Banner title="Luxurious houses" subtitle="deluxe houses starting at $299">
        <Link to="/houses" className="btn-primary">
          our houses
        </Link>
      </Banner>
    </Hero>
    
<Services/>

<FeaturedHouses/>
 
 {/* <Button>hello</Button> */}


 
</>
  );
}
