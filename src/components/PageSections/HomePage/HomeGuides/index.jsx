import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Grid from "../../../../components/Grid";
import Button from "../../../Button";
import "./home-guides.scss";

import Carousel from "../../../Carousel";
import PlayIcon from "../../../../assets/icons/play-icon.svg";

const HomeGuides = () => {
  const data = useStaticQuery(graphql`
    query homeGuidesImages {
      img1: file(
        relativePath: { eq: "thumbnails/recent-guides/video-1-learn-fiora.jpg" }
      ) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img2: file(
        relativePath: {
          eq: "thumbnails/recent-guides/video-2-akali-combos.jpg"
        }
      ) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img3: file(
        relativePath: {
          eq: "thumbnails/recent-guides/video-3-learn-alistar.jpg"
        }
      ) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img4: file(
        relativePath: { eq: "thumbnails/recent-guides/video-4-learn-akali.jpg" }
      ) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      img5: file(
        relativePath: {
          eq: "thumbnails/recent-guides/video-5-learn-aatrox.jpg"
        }
      ) {
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
    <section className="home-guides">
      <Grid>
        <div className="home-guides__container">
          <h2 className="home-guides__heading">Recent Guides</h2>
          <Carousel>
            <div className="home-guides__slide">
              <div className="home-guides__slide__img__wrapper">
                <div className="home-guides__slide__img__overlay"></div>
                <PlayIcon className="home-guides__slide__img__play" />
                <span className="home-guides__slide__img__play__text">
                  Play Now
                </span>

                <Img
                  fluid={data.img1.childImageSharp.fluid}
                  draggable={false}
                  className="home-guides__slide__img"
                  imgStyle={{
                    userSelect: "none",
                  }}
                />
              </div>
              <div className="home-guides__slide__text-container">
                <span className="home-guides__slide__title">
                  The ONLY Fiora Guide You Need S11
                </span>
              </div>
            </div>
            <div className="home-guides__slide">
              <div className="home-guides__slide__img__wrapper">
                <div className="home-guides__slide__img__overlay"></div>
                <PlayIcon className="home-guides__slide__img__play" />
                <span className="home-guides__slide__img__play__text">
                  Play Now
                </span>

                <Img
                  fluid={data.img2.childImageSharp.fluid}
                  draggable={false}
                  className="home-guides__slide__img"
                  imgStyle={{
                    userSelect: "none",
                  }}
                />
              </div>
              <div className="home-guides__slide__text-container">
                <span className="home-guides__slide__title">
                  Akali Combos and Mechanics
                </span>
              </div>
            </div>
            <div className="home-guides__slide">
              <div className="home-guides__slide__img__wrapper">
                <div className="home-guides__slide__img__overlay"></div>
                <PlayIcon className="home-guides__slide__img__play" />
                <span className="home-guides__slide__img__play__text">
                  Play Now
                </span>

                <Img
                  fluid={data.img3.childImageSharp.fluid}
                  draggable={false}
                  className="home-guides__slide__img"
                  imgStyle={{
                    userSelect: "none",
                  }}
                />
              </div>
              <div className="home-guides__slide__text-container">
                <span className="home-guides__slide__title">
                  The ONLY Alistar Guide YOU Need
                </span>
              </div>
            </div>
            <div className="home-guides__slide">
              <div className="home-guides__slide__img__wrapper">
                <div className="home-guides__slide__img__overlay"></div>
                <PlayIcon className="home-guides__slide__img__play" />
                <span className="home-guides__slide__img__play__text">
                  Play Now
                </span>

                <Img
                  fluid={data.img4.childImageSharp.fluid}
                  draggable={false}
                  className="home-guides__slide__img"
                  imgStyle={{
                    userSelect: "none",
                  }}
                />
              </div>
              <div className="home-guides__slide__text-container">
                <span className="home-guides__slide__title">
                  The ONLY Akali Guide YOU Need
                </span>
              </div>
            </div>
            <div className="home-guides__slide">
              <div className="home-guides__slide__img__wrapper">
                <div className="home-guides__slide__img__overlay"></div>
                <PlayIcon className="home-guides__slide__img__play" />
                <span className="home-guides__slide__img__play__text">
                  Play Now
                </span>

                <Img
                  fluid={data.img5.childImageSharp.fluid}
                  draggable={false}
                  className="home-guides__slide__img"
                  imgStyle={{
                    userSelect: "none",
                  }}
                />
              </div>
              <div className="home-guides__slide__text-container">
                <span className="home-guides__slide__title">
                  The ONLY Aatrox Guide YOU Need
                </span>
              </div>
            </div>
          </Carousel>
          <div className="home-guides__more">
            <Button
              btnText="See More Guides"
              linkTo="/guides"
              addClass="home-guides__more__button"
              btnStyle="black"
            />
          </div>
        </div>
      </Grid>
    </section>
  );
};

export default HomeGuides;
