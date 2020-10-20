import React, { Component } from "react";

import "./seminarItem.css";

export default class seminarItem extends Component {
  render() {
    return (
      <div className="listItem">
        <div>Name: {this.props.name}</div>
        <div>Category: {this.props.category}</div>
        <div>Desc: {this.props.desc}</div>
        <div>Date: {this.props.date.toLocaleString()}</div>
      </div>
    );
  }
}
