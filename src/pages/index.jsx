import React from "react";
import Page from "../components/Page";

import HomeHero from "../components/PageSections/HomePage/HomeHero";
import HomeGuides from "../components/PageSections/HomePage/HomeGuides";

const IndexPage = () => {
  return (
    <Page>
      <HomeHero />
      <HomeGuides />
    </Page>
  );
};

export default IndexPage;
