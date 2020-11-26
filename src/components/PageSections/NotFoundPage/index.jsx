import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Button from "../../Button";
import "./not-found.scss";

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query NotFoundHeroImg {
      image: file(relativePath: { eq: "hero-images/404.jpeg" }) {
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
    <header className="not-found">
      <div className="not-found__wrapper">
        <Img
          fluid={data.image.childImageSharp.fluid}
          fadeIn={true}
          durationFadeIn={1000}
          draggable={false}
          loading="eager"
          className="not-found__image-wrapper"
          imgStyle={{
            userSelect: "none",
          }}
        />
        <div className="not-found__img-overlay">
          <div className="not-found__content">
            <h1 className="not-found__heading">404 Error: Page Not Found</h1>
            <Button linkTo="/" btnText="Back to Home" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NotFoundPage;
