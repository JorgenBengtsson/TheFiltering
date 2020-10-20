import React, { Component } from "react";

export default class CategorySelection extends Component {
  constructor() {
    super();
    this.state = { selected: [] };
  }
  onCheckBoxChange(target) {
    var res = this.state.selected;
    if (target.checked) {
      res.push(target.value);
    } else {
      const index = res.indexOf(target.value);
      if (index > -1) {
        res.splice(index, 1);
      }
    }
    this.setState({
      selected: res,
    });
    this.props.handleSelectionChange(res);
  }
  render() {
    return (
      <div>
        <div>
          <input
            type="checkbox"
            value="Bakning"
            onChange={(e) => this.onCheckBoxChange(e.target)}
          />{" "}
          Bakning
        </div>
        <div>
          <input
            type="checkbox"
            value="Målning"
            onChange={(e) => this.onCheckBoxChange(e.target)}
          />{" "}
          Målning
        </div>
      </div>
    );
  }
}
