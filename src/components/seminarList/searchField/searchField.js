import React, { Component } from "react";

export default class SearchField extends Component {
  constructor() {
    super();
    this.state = { text: "" };
  }
  render() {
    return (
      <div>
        <input
          text={this.state.text}
          placeholder="Search"
          onChange={(e) => {
            this.setState({ text: e.target.value });
            this.props.handleSearchChange(e.target.value);
          }}
        />
      </div>
    );
  }
}
