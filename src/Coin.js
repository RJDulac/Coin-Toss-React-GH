import React, { Component } from "react";
import heads from "./img/heads.jpg";

class Coin extends Component {
  static defaultProps = {
    face: heads
  };
  render() {
    const { face } = this.props;
    return (
      <div>
        <img src={face} alt="coin" />
      </div>
    );
  }
}

export default Coin;
