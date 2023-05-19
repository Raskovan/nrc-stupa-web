import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "../styles/Intro.module.css";

function AboutNRC({ data }) {
  if (!Object.keys(data).length) return null;
  const imageUrl = "https://" + data?.images[0]?.fields?.file?.url;
  return (
    <div className={classes.container}>
      <p className={classes.titleText}>{data.title}</p>
      <div className={classes.headImage}>
        <img src={imageUrl} width="100%" alt={data?.images[0]?.fields?.title} className={classes.titleImg} />
      </div>
      <div className={classes.introTextContainer}>{documentToReactComponents(data.introText)}</div>
    </div>
  );
}

export default AboutNRC;
