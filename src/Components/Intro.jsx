import React from "react";
import classes from "../styles/Intro.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function Intro({ data }) {
  if (!Object.keys(data).length) return null;

  return (
    <div className={classes.container}>
      <div className={classes.introTextContainer}>{documentToReactComponents(data?.introText)}</div>
    </div>
  );
}

export default Intro;
