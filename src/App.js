import React from "react";
import "./App.css";
import Header from "./components/header.js";
import HomeContent from "./components/homeContent.js";
import Desk from "./components/desk.js";
import Footer from "./components/footer.js";
import Floorplan from "./components/floorplan.js";

class App extends React.Component {
  state = {
    onLoad: true,
  };
  handleClick = () => {
    this.setState({
      onLoad: false,
    });
  };
  render() {
    return (
      <div className="document">
        <Header />
        <HomeContent onLoad={this.state.onLoad} click={this.handleClick} />
        <Desk onLoad={this.state.onLoad} click={this.handleClick} />
        <Footer onLoad={this.state.onLoad} />
        {this.state.onLoad ? null : <Floorplan />}
      </div>
    );
  }
}
export default App;
