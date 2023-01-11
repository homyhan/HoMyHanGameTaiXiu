import React, { Component } from "react";
import Content from "./Content";
import Result from "./Result";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div style={{backgroundImage: 'url(./img/bgGame.png)', width: '100%', height: '100%'}}>
        <div className="container">
          <h1 style={{padding: '40px 0px'}} className="text-center">GAME TÀI XỈU </h1>
          <Content></Content>
          <Result></Result>
        </div>
      </div>
    );
  }
}

export default Home;
