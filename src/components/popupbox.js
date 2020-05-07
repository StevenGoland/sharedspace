import React from "react";
import "./popupbox.css";
import testimg from "../officeImages/testplan.jpg";

class Popupbox extends React.Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="modal">
        <div className="popup_location">
          <div className="modal_header">
            <span className="close" onClick={this.handleClick}>
              &times;
            </span>
            <h4>Shared Space: Unit F1</h4>
          </div>
          <div className="modal_content">
            <p>Awesome info about this unit!/</p>
            <p>sickkkk amenity info</p>
            <p>dopppppppe property info</p>
            <img className="test_img" src={testimg} alt="hi" />
          </div>
        </div>
      </div>
    );
  }
}

export default Popupbox;
