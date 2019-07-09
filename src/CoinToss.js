import React, { Component } from "react";
import Coin from "./Coin";
import heads from "./img/heads.jpg";
import tails from "./img/tails.jpg";

class CoinToss extends Component {
  state = {
    isHeads: true,
    tosses: 0,
    heads: 0,
    tails: 0,
    image: heads,
    isTossing: false
  };
  //methods
  //toss counter
  incrementTosses = curState => {
    return { tosses: curState.tosses + 1 };
  };
  //heads counter
  incrementHeads = curState => {
    return { heads: curState.heads + 1 };
  };
  //tails counter
  incrementTails = curState => {
    return { tails: curState.tails + 1 };
  };
  //image change to heads
  changeToHeads = curState => {
    return { image: (curState.image = heads) };
  };
  //image change to tails
  changeToTails = curState => {
    return { image: (curState.image = tails) };
  };
  disableButton = () => {
    this.setState({ isTossing: true });
  };
  enableButton = () => {
    this.setState({ isTossing: false });
  };
  alternateImage = () => {
    setInterval(() => {
      this.state.image === heads
        ? this.setState(this.changeToTails)
        : this.setState(this.changeToHeads);
    }, 100);
  };
  clearAllIntervals = () => {
    for (var i = 1; i < 99999; i++) clearInterval(i);
  };
  randomToss = () => {
    this.setState(this.incrementTosses);
    let result = Math.floor(Math.random() * 2) + 1;
    console.log(result);
    return result === 1
      ? this.setState({ isHeads: true })
      : this.setState({ isHeads: false });
  };
  changeImage = () => {
    this.state.isHeads
      ? this.setState(this.changeToHeads)
      : this.setState(this.changeToTails);
  };
  increment = () => {
    this.state.isHeads
      ? this.setState(this.incrementHeads)
      : this.setState(this.incrementTails);
  };

  //handlers
  //disable button later
  clickHandler = () => {
    this.disableButton();
    this.alternateImage();
    setTimeout(() => {
      this.clearAllIntervals();
      this.changeImage();
      this.increment();
      this.randomToss();
      this.enableButton();
    }, 2000);
  };
  render() {
    return (
      <div>
        <Coin face={this.state.image} />
        <h3>
          {this.state.tosses} tosses, {this.state.heads} heads, and{" "}
          {this.state.tails} tails
        </h3>
        <button
          className="btn"
          disabled={this.state.isTossing}
          onClick={this.clickHandler}
        >
          Toss me!
        </button>
      </div>
    );
  }
}

export default CoinToss;
