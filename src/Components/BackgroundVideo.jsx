import React from "react";
import classes from "../styles/BackgroundVideo.module.css";
import NrcLogo from "../assets/NRCStupa_Logo_white.png";
import NrcLogoTxt from "../assets/NRCStupa_Logo_white_txt.png";

function BackgroundVideo() {
  const VideoPoster = "./nrc_video_poster.jpg";
  const videoSource = "./nrc_video.mp4";
  // const videoParentRef = React.useRef()
  return (
    <div>
      <div
        // ref={videoParentRef}
        dangerouslySetInnerHTML={{
          __html: `
        <video
          controls
          autoplay
          playsinline
          loop
          muted
          preload="auto"
          class="${classes.Video}"
          poster="${VideoPoster}"
        >
          <source src="${videoSource}" type="video/mp4"/>
        </video>`
        }}
      />
      {/* <video autoPlay loop muted={true} playsInline className={classes.Video}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className={classes.Content}>
        <img src={NrcLogo} alt="NRC logo" style={{ position: "absolute" }} />
        <figure className={classes.hoverRotate}>
          <img src={NrcLogoTxt} alt="NRC logo txt" className={classes.LogoTxt} id="logo" />
        </figure>
        {/* <div className={classes.SubContent}>
          <h1>Stupa Of Complete Victory</h1>
          <p>Northeast Retreat Center, USA</p>
        </div> */}
      </div>
    </div>
  );
}

export default BackgroundVideo;
