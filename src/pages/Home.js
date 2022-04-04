import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";

import { homeInfo } from "../data";

const Home = () => {
  return (
    <div>
      <Hero />
      {homeInfo.map(({ id, title, description, url, image }) => (
        <Section
          key={id}
          id={id}
          title={title}
          description={description}
          url={url}
          image={image}
        />
      ))}
    </div>
  );
};

export default Home;
