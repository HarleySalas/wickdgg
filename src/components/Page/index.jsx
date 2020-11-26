import React from "react";
import SEO from "./SEO";
import { ParallaxProvider } from "react-scroll-parallax";

const Page = ({ children, description, lang, meta, title }) => {
  return (
    <div className="page">
      <SEO
        description={description}
        lang={`${lang || "en"}`}
        meta={meta}
        title={title}
      />
      <ParallaxProvider>{children}</ParallaxProvider>
    </div>
  );
};

export default Page;
