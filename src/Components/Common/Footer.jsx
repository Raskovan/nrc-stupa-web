import React from "react";
import classes from "../../styles/Footer.module.css";
import LogoNRC from "../../assets/NRCStupa_Logo_RGB_2Colors.svg";

function Footer(props) {
  const { marginTop = false } = props;
  const currentYear = () => {
    const today = new Date();
    return today.getFullYear();
  };

  return (
    // <div style={{ height: '30px', border: 'blue dashed 1px', display: 'flex' }}>
    //   <div style={{ border: 'green solid 2px', flexGrow: 1 }}></div>
    //   <div style={{ border: 'green solid 2px', flexGrow: 1 }}></div>
    // </div>
    <div
      className={classes.footer_container}
      style={{
        marginTop: marginTop ? "166px" : "0"
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <div style={{ display: "flex" }}>
          <div>
            <img src={LogoNRC} width="100%" alt="NRC Logo" className={classes.logo} />
          </div>
          <div>
            <p className={classes.caption}>
              NORTHEAST RETREAT CENTER <br />
              1026 East Hill Road, Middleburgh, NY 12122
              <br /> <a href="mailto:nrcstupa@diamondway.org">nrcstupa@diamondway.org</a>
            </p>
            <p className={classes.caption}>
              SUPPORT THE PROJECT <br />
              <a href="https://pay.diamondway.org/stupa/donate/new" target="_new">
                Make a one-time donation
              </a>
            </p>
          </div>
        </div>

        <p className={classes.caption}>© {currentYear()} Diamond Way Buddhist Centers USA</p>
        <p className={classes.caption}>
          DWB-NRC is part of <a href="https://diamondway.org/">DWB USA</a>, a volunteer 501(c)3 non-profit organization
        </p>
      </div>
      <div style={{ flex: "0 0 43%", marginBottom: "2rem" }}>
        <p style={{ lineHeight: 1.3, fontSize: "1rem" }}>Subscribe to our newsletter to receive updates on the progress</p>
        <form
          className="js-cm-form"
          id="subForm"
          action="https://www.createsend.com/t/subscribeerror?description="
          method="post"
          data-id="30FEA77E7D0A9B8D7616376B90063231E874B691C1B93C9C61386F5EAFD3CB7A8560147D9A0356D84A6C2B6BC8013FCCFB4930947F70F4779591D47F44C8E5BD"
        >
          <input
            style={{ fontSize: "1rem", padding: 10 }}
            aria-label="Email"
            className="js-cm-email-input qa-input-email"
            id="fieldEmail"
            maxLength="200"
            name="cm-yhhjjdd-yhhjjdd"
            required=""
            placeholder="Your email"
            type="email"
          />
          <button style={{ fontSize: "1rem", padding: 10 }} type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
