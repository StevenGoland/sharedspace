import React from "react";
import titlecapture from "../images/titlecapture.PNG";
import "./homeContent.css";

class HomeContent extends React.Component {
  render() {
    let btnClassText = this.props.onLoad
      ? "onLoadClassText"
      : "onClickClassText";

    return (
      <>
        <img
          className={`title ${btnClassText}`}
          src={titlecapture}
          alt="title"
        />
        <p className={`description ${btnClassText}`}>
          We have private offices and dedicated desks available. Amenities
          include a conference room, fitness center, Café, Lounge and daily
          minyan for Mincha. Our fully furnished offices are move-in ready and
          commitment free with agreements starting at one month.
          <br />
          <br />
          Spaces are limited and in high demand. Check availability now.
        </p>
        <button
          class={`avail_button ${btnClassText}`}
          onClick={this.props.click}
        >
          Availability
        </button>
      </>
    );
  }
}

export default HomeContent;
