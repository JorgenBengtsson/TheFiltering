import React, { Component } from "react";

import "./seminarList.css"

import SeminarItem from "./seminarItem/seminarItem";
import SearchField from "./searchField/searchField";
import CategorySelection from "./categorySelection/categorySelection";

export default class SeminarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      filteredData: props.data,
      filterText: "",
      filterCategories: [],
    };
  }
  filter() {
    var outData = [];
    this.state.data.forEach((item) => {
      if (
        this.compareSearchTextWithObject(item, this.state.filterText) &&
        this.compareCategoryForObject(item, this.state.filterCategories)
      )
        outData.push(item);
    });
    this.setState({ filteredData: outData });
  }
  compareCategoryForObject(item, categories) {
    if (categories.length === 0) return true;
    var found = false;
    categories.forEach((catItem) => {
      if (catItem === item.category) found = true;
    });
    return found;
  }
  compareSearchTextWithObject(item, filterText) {
    return (
      item.name.toLowerCase().search(filterText.toLowerCase()) >= 0 ||
      item.desc.toLowerCase().search(filterText.toLowerCase()) >= 0
    );
  }
  render() {
    return (
      <div>
				<div className="header">
        <SearchField
          handleSearchChange={(text) => {
            this.setState({ filterText: text }, () => this.filter());
          }}
        />
        <CategorySelection
          handleSelectionChange={(categories) =>
            this.setState({ filterCategories: categories }, () => this.filter())
          }
        />
				</div>
        {this.state.filteredData.map((item) => (
          <SeminarItem
						key={item.id}
						id={item.id}
            name={item.name}
						date={item.date}
						handleOnClick={(id) => this.props.handleSeminarSelect(id)}
          />
        ))}
      </div>
    );
  }
}
