import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import classes from "../../styles/DetailsWrapper.module.css";

function DetailsWrapper({ children }) {
  return (
    <div>
      <Header backgroundWhite={true} />
      <div className={classes.mainContainer}>{children}</div>
      <Footer marginTop={true} />
    </div>
  );
}

export default DetailsWrapper;
