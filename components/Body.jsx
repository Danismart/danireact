import React, { Component } from "react";

class Body extends Component {
  gretting = name => {
    return <p>Hola {name}</p>;
  };

  render() {
    let name = "Daniela";
    return this.gretting(name);
  }
}

export default Body;
