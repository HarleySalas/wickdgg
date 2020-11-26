import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Button from "../../../Button";
// import { Parallax } from "react-scroll-parallax";

import "./home-hero.scss";

const HomeHero = () => {
  const data = useStaticQuery(graphql`
    query homeHeroImg {
      image: file(relativePath: { eq: "hero-images/hero-img.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <header className="home-hero">
      <div className="home-hero__wrapper">
        {/* <Parallax y={[-15, 15]}> */}
        <Img
          fluid={data.image.childImageSharp.fluid}
          fadeIn={true}
          durationFadeIn={1000}
          draggable={false}
          loading="eager"
          className="home-hero__image-wrapper"
          imgStyle={{
            userSelect: "none",
          }}
          backgroundColor="#29382a"
        />
        {/* </Parallax> */}
        <div className="home-hero__img-overlay">
          <div className="home-hero__content">
            <h1 className="home-hero__heading">Wickd.gg</h1>
            <span className="home-hero__subheading">
              The Best Place to Get Better at League.
            </span>
            <Button btnText="Learn More" linkTo="/about" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHero;
