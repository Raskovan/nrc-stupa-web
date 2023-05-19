import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "../styles/Intro.module.css";
import { BLOCKS } from "@contentful/rich-text-types";
import classesDW from "../styles/DWStupas.module.css";

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      const images = node.data.target.fields.images;
      return (
        <div className={classesDW.pics_in_a_row}>
          {images.map((image, index) => (
            <div key={index} style={{ flex: index === 0 ? "0.794" : "1.5" }}>
              <img key={index} src={"https://" + image?.fields?.file?.url} width="100%" alt={image?.fields?.title} />{" "}
            </div>
          ))}
        </div>
      );
    }
  }
};

function AboutStupas({ data }) {
  if (!Object.keys(data).length) return null;
  const imageUrl = "https://" + data?.images[0]?.fields?.file?.url;
  console.log(data.introText);
  return (
    <div className={classes.container}>
      <p className={classes.titleText}>{data.title}</p>
      <div className={classes.headImage}>
        <img src={imageUrl} className={classes.titleImg} width="100%" alt={data?.images[0]?.fields?.title} />
      </div>
      <div className={classes.introTextContainer}>{documentToReactComponents(data.introText, renderOptions)}</div>
    </div>
  );
}

export default AboutStupas;
