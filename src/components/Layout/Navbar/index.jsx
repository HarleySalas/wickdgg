import React from "react";
import { Link } from "gatsby";
import "./navbar.scss";
import NavLogo from "../../../assets/branding/letter-mark-test.svg";
import Grid from "../../Grid";
import NavDesktop from "./NavDesktop";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Grid>
          <div className="navbar__logo-container">
            <Link to="/" className="navbar__logo__link">
              <NavLogo className="navbar__logo" />
            </Link>
          </div>
          <div className="navbar__container">
            <NavDesktop />
          </div>
        </Grid>
      </nav>
      <div className="navbar__spacer"></div>
    </>
  );
};

export default Navbar;
