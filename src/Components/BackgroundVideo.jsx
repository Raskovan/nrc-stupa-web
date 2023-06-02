import React from "react";
import classes from "../styles/BackgroundVideo.module.css";
import NrcLogo from "../assets/NRCStupa_Logo_Grey.svg";
import NrcLogoTxt from "../assets/NRCStupa_LogoTxt_Grey.svg";
import VideoPoster from "../assets/nrc_video_poster.jpg";
import VideoSource from "../assets/nrc_video.mp4";

function BackgroundVideo() {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: `
        <video
          autoplay
          playsinline
          loop
          muted
          preload="auto"
          class="${classes.Video}"
          poster="${VideoPoster}"
        >
          <source src="${VideoSource}" type="video/mp4"/>
        </video>`
        }}
      />
      <div className={classes.Content}>
        <img src={NrcLogo} alt="NRC logo" style={{ position: "absolute" }} />
        <span className={classes.hoverRotate}>
          <img src={NrcLogoTxt} alt="NRC logo txt" className={classes.LogoTxt} id="logo" />
        </span>
      </div>
    </div>
  );
}

export default BackgroundVideo;
