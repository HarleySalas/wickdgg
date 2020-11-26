import React from "react";
import Layout from "./src/components/Layout";
import "./src/styles/reset.css";
import "./src/styles/base.scss";
import "./src/styles/typography.scss";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
