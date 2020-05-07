import React from "react";
import "./footer.css";
import footer_logo from "../images/footer_logo.png";

class Footer extends React.Component {
  render() {
    let footerClass = this.props.onLoad ? "footer" : "small-footer";
    let footerLogoClass = this.props.onLoad
      ? "footer-logo"
      : "footer-logo-hidden";
    return (
      <>
        <div className={footerClass}>
          <img
            className={footerLogoClass}
            src={footer_logo}
            alt="footer-logo"
          />
          <p className="footer-content1">
            Contact
            <br /> Email us ba@wearep3.com
            <br /> for more details
          </p>
          <p className="footer-content2">
            Address
            <br />
            200 Broadacres Dr.
            <br />
            Bloomfield NJ 07003
          </p>
        </div>
      </>
    );
  }
}

export default Footer;
