import React, { Component } from "react";
import Konva from "konva";
import {
  Stage,
  Layer,
  Rect,
  Text,
  Circle,
  Line,
  Group,
  Image,
} from "react-konva";
import floorplan from "../officeImages/250_updated.png";
import homeButton from "../officeImages/Home_button.png";
import f1 from "../officeImages/F1.png";
import d1 from "../officeImages/D1.png";
import d2 from "../officeImages/D2.png";
import d3 from "../officeImages/D3R.png";
import d4 from "../officeImages/D4R.png";
import d5 from "../officeImages/D5.png";
import f2 from "../officeImages/F2.png";
import e1 from "../officeImages/E1R.png";
import e2 from "../officeImages/E2.png";
import c from "../officeImages/CR.png";
import g from "../officeImages/G.png";
import b from "../officeImages/B.png";
import bprice from "../officeImages/BPrice.png";
import Popupbox from "./popupbox.js";

const Floorplan = new window.Image();
Floorplan.src = floorplan;
const HomeButton = new window.Image();
HomeButton.src = homeButton;
const F1 = new window.Image();
F1.src = f1;
const D1 = new window.Image();
D1.src = d1;
const D2 = new window.Image();
D2.src = d2;
const D3 = new window.Image();
D3.src = d3;
const D4 = new window.Image();
D4.src = d4;
const D5 = new window.Image();
D5.src = d5;
const F2 = new window.Image();
F2.src = f2;
const E1 = new window.Image();
E1.src = e1;
const E2 = new window.Image();
E2.src = e2;
const C = new window.Image();
C.src = c;
const G = new window.Image();
G.src = g;
const B = new window.Image();
B.src = b;
const Bprice = new window.Image();
Bprice.src = bprice;

class Offices extends Component {
  state = {
    visible: false,
    y: null,
    showPop: false,
  };

  handleMouseover = (e, id) => {
    document.body.style.cursor = "pointer";
    e.target.to({
      opacity: 1,
      scaleX: 1.05,
      scaleY: 1.05,
      duration: 0.14,
    });
    this.setState({ visible: true });
    if (id === "B") {
      this.setState({ y: 340 });
    }
    if (id === "C") {
      this.setState({ y: 400 });
    }
    if (id === "D") {
      this.setState({ y: 468 });
    }
    if (id === "E") {
      this.setState({ y: 530 });
    }
    if (id === "F") {
      this.setState({ y: 595 });
    }
    if (id === "G") {
      this.setState({ y: 660 });
    }
  };
  handleMouseout = (e) => {
    document.body.style.cursor = "default";
    e.target.to({
      opacity: 0,
      scaleX: 1,
      scaleY: 1,
      duration: 0.14,
    });
    this.setState({ visible: false });
  };
  homeMouseOver = (e) => {
    document.body.style.cursor = "pointer";
    e.target.to({
      strokeWidth: 2,
    });
  };
  homeMouseOut = (e) => {
    document.body.style.cursor = "default";
    e.target.to({
      strokeWidth: 0.25,
    });
  };

  togglePop = () => {
    this.setState({
      showPop: !this.state.showPop,
    });
  };

  render() {
    return (
      <div>
        {this.state.showPop ? <Popupbox toggle={this.togglePop} /> : null}
        <Stage width={1310} height={window.innerHeight}>
          <Layer>
            <Group scaleX={0.8} scaleY={0.8}>
              <Image image={Floorplan} />
              <Image
                image={HomeButton}
                x={60}
                y={73}
                stroke="white"
                strokeWidth={0.25}
                onMouseOver={this.homeMouseOver}
                onMouseOut={this.homeMouseOut}
              />
              <Rect
                x={35}
                y={this.state.y}
                height={60}
                width={350}
                stroke="white"
                strokeWidth={3}
                visible={this.state.visible}
              />
              <Image
                image={F1}
                x={574}
                y={187}
                onMouseover={(e) => this.handleMouseover(e, "F")}
                onMouseout={this.handleMouseout}
                offsetX={50}
                offsetY={50}
                opacity={0}
                onClick={this.togglePop}
              />
              <Image
                image={D1}
                x={723}
                y={188}
                onMouseover={(e) => this.handleMouseover(e, "D")}
                onMouseout={this.handleMouseout}
                offsetX={50}
                offsetY={50}
                opacity={0}
              />
              <Image
                image={D2}
                x={822}
                y={188}
                onMouseover={(e) => this.handleMouseover(e, "D")}
                onMouseout={this.handleMouseout}
                offsetX={50}
                offsetY={50}
                opacity={0}
              />
              <Image
                image={D3}
                x={920}
                y={188}
                //onMouseover={this.handleMouseover}
                //onMouseout={this.handleMouseout}
                offsetX={50}
                offsetY={50}
                //opacity={0}
              />
              <Image
                image={D4}
                x={1016}
                y={188}
                //onMouseover={this.handleMouseover}
                //onMouseout={this.handleMouseout}
                offsetX={50}
                offsetY={50}
                //opacity={0}
              />
              <Image
                image={D5}
                x={1110}
                y={188}
                onMouseover={(e) => this.handleMouseover(e, "D")}
                onMouseout={this.handleMouseout}
                offsetX={50}
                offsetY={50}
                opacity={0}
              />
              <Image
                image={F2}
                x={1210}
                y={188}
                onMouseover={(e) => this.handleMouseover(e, "F")}
                onMouseout={this.handleMouseout}
                offsetX={50}
                offsetY={50}
                opacity={0}
              />
              <Image
                image={E1}
                x={1209}
                y={356}
                //onMouseover={this.handleMouseover}
                //onMouseout={this.handleMouseout}
                offsetX={50}
                offsetY={50}
                //opacity={0}
              />
              <Image
                image={E2}
                x={1210}
                y={477}
                onMouseover={(e) => this.handleMouseover(e, "E")}
                onMouseout={this.handleMouseout}
                offsetX={50}
                offsetY={50}
                opacity={0}
              />
              <Image
                image={C}
                x={893}
                y={590}
                //onMouseover={this.handleMouseover}
                //onMouseout={this.handleMouseout}
                offsetX={50}
                offsetY={50}
                //opacity={0}
              />
              <Image
                image={B}
                id="B"
                x={868}
                y={688}
                onMouseover={(e) => this.handleMouseover(e, "B")}
                onMouseout={this.handleMouseout}
                offsetX={50}
                offsetY={50}
                opacity={0}
              />
              <Image
                image={G}
                x={1020}
                y={590}
                onMouseover={(e) => this.handleMouseover(e, "G")}
                onMouseout={this.handleMouseout}
                offsetX={50}
                offsetY={50}
                opacity={0}
              />
            </Group>
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default Offices;
