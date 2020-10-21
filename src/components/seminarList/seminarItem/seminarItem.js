import React, { Component } from "react";

import "./seminarItem.css";

export default class seminarItem extends Component {
  render() {
    return (
      <div className="listItem" onClick={() => this.props.handleOnClick(this.props.id)}>
        <div>Name: {this.props.name}</div>
        <div>Date: {this.props.date.toLocaleString()}</div>
      </div>
    );
  }
}
