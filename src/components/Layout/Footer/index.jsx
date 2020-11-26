import React from "react";
import Grid from "../../../components/Grid";
import { Link } from "gatsby";
import "./footer.scss";

import Logo from "../../../assets/branding/letter-mark-test.svg";

import DiscordIcon from "../../../assets/social-icons/discord-logo.svg";
import FacebookIcon from "../../../assets/social-icons/facebook-logo.svg";
import TwitchIcon from "../../../assets/social-icons/twitch-logo.svg";
import TwitterIcon from "../../../assets/social-icons/twitter-logo.svg";
import YoutubeIcon from "../../../assets/social-icons/youtube-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Grid>
        <div className="footer__wrapper">
          <Link to="/" className="footer__logo__link">
            <Logo className="footer__logo" />
          </Link>
          <ul className="footer__social__ul">
            <li className="footer__social__li">
              <a
                href="https://www.twitch.tv/wickd"
                target="__blank"
                rel="noopener noreferrer"
                className="footer__social__link"
              >
                <TwitchIcon className="footer__social__icon" />
              </a>
            </li>
            <li className="footer__social__li">
              <a
                href="https://www.youtube.com/channel/UCPqqle2Fr09SECalN7Sf1zg?sub_confirmation=1"
                target="__blank"
                rel="noopener noreferrer"
                className="footer__social__link"
              >
                <YoutubeIcon className="footer__social__icon" />
              </a>
            </li>
            <li className="footer__social__li">
              <a
                href="https://discord.com/invite/Wickd"
                target="__blank"
                rel="noopener noreferrer"
                className="footer__social__link"
              >
                <DiscordIcon className="footer__social__icon" />
              </a>
            </li>
            <li className="footer__social__li">
              <a
                href="https://twitter.com/Wickdlol"
                target="__blank"
                rel="noopener noreferrer"
                className="footer__social__link"
              >
                <TwitterIcon className="footer__social__icon" />
              </a>
            </li>
            <li className="footer__social__li">
              <a
                href="https://www.facebook.com/LoLWickd"
                target="__blank"
                rel="noopener noreferrer"
                className="footer__social__link"
              >
                <FacebookIcon className="footer__social__icon" />
              </a>
            </li>
          </ul>
          <ul className="footer__ul">
            <li className="footer__li">
              <Link to="/sitemap">Sitemap</Link>
            </li>
            <li className="footer__li">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="footer__li">
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
          </ul>
          <span className="footer__copy">&copy; 2020 Wickd.gg</span>
        </div>
      </Grid>
    </footer>
  );
};

export default Footer;

/**
 *
 * Sitemap
 * Privacy Policy
 * Terms of Service
 *
 * copyright claim
 *
 */
