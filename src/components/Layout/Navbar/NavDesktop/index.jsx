import React from "react";
import { Link } from "gatsby";
import "./navDesktop.scss";
import TwitchIcon from "../../../../assets/social-icons/twitch-logo.svg";
import YoutubeIcon from "../../../../assets/social-icons/youtube-icon.svg";

const NavDesktop = () => {
  return (
    <div className="navbar__desktop">
      <ul className="navbar__desktop__ul">
        <li className="navbar__desktop__li">
          <Link
            to="/"
            className="navbar__desktop__link"
            activeClassName="active"
          >
            Home
          </Link>
        </li>
        <li className="navbar__desktop__li">
          <Link
            to="/about"
            className="navbar__desktop__link"
            activeClassName="active"
          >
            About
          </Link>
        </li>
        <li className="navbar__desktop__li">
          <Link
            to="/guides"
            className="navbar__desktop__link"
            activeClassName="active"
          >
            Guides
          </Link>
        </li>
        <li className="navbar__desktop__li">
          <Link
            to="/tierlist"
            className="navbar__desktop__link"
            activeClassName="active"
          >
            Tierlist
          </Link>
        </li>
        <li className="navbar__desktop__li">
          <Link
            to="/map"
            className="navbar__desktop__link"
            activeClassName="active"
          >
            Map
          </Link>
        </li>
      </ul>
      <ul className="navbar__desktop__social__ul">
        <li className="navbar__desktop__social__li">
          <a
            href="https://www.twitch.tv/wickd"
            target="__blank"
            rel="noopener noreferrer"
            className="navbar__desktop__social__link"
          >
            <TwitchIcon className="navbar__desktop__social__icon" />
          </a>
        </li>
        <li className="navbar__desktop__social__li">
          <a
            href="https://www.youtube.com/channel/UCPqqle2Fr09SECalN7Sf1zg"
            target="__blank"
            rel="noopener noreferrer"
            className="navbar__desktop__social__link"
          >
            <YoutubeIcon className="navbar__desktop__social__icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavDesktop;
