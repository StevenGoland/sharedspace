import React from "react";
import "./floorplan.css";
import floorplan from "../images/floorplan.png";

class Floorplan extends React.Component {
  render() {
    return (
      <div className="fp-container">
        <img className="floorplan" src={floorplan} alt="floorplan" />
      </div>
    );
  }
}

export default Floorplan;
