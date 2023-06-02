import React from "react";
import { Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "../styles/Intro.module.css";
import classesDW from "../styles/DWStupas.module.css";

function DWStupas({ data }) {
  if (!Object.keys(data).length) return null;
  const images = data?.images;
  return (
    <div className={classes.container} style={{ paddingLeft: "10vmin", paddingRight: "10vmin" }}>
      {/* <p className={classes.titleText} style={{ paddingLeft: 0 }}>
        {data.title}
      </p> */}
      <div className={classesDW.pics_in_a_row}>
        {images?.map((image, index) => {
          return (
            <div key={index} style={{ flex: index === 0 ? "0.794" : "1.5" }}>
              <img src={"https://" + image?.fields?.file?.url} width="100%" alt={image?.fields?.title} />
            </div>
          );
        })}
      </div>
      <div style={{ padding: "3vmin 0 0" }} className={classes.introTextContainer}>
        {documentToReactComponents(data.introText)}
        <span className={classes.readMore}>
          <Link to="/dw-stupas">{data.readMore}</Link>
        </span>
      </div>
    </div>
  );
}

export default DWStupas;
