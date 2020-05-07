import React from "react";
import "./desk.css";
import desk from "../images/desk.png";

class Desk extends React.Component {
  state = {
    showDesk: true,
  };
  /*componentDidUpdate() {
    if (this.state.showDesk) {
      setTimeout(() => {
        this.setState({ showDesk: false });
      }, 750);
    }
  }*/
  render() {
    let btnClassDesk = this.props.onLoad
      ? "onLoadClassDesk"
      : "onClickClassDesk";
    let deskImg = this.state.showDesk ? (
      <img className={`desk ${btnClassDesk}`} src={desk} alt="desk" />
    ) : null;
    return <>{deskImg}</>;
  }
}
export default Desk;
