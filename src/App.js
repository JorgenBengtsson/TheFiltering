import React, { Component } from "react";

import "./App.css"
import SeminarList from "./components/seminarList/seminarList";
import Seminar from "./components/seminar/seminar"
import { listData } from "./listData"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
			data: listData,
			displayId: null
    };
	}
	returnSeminarById(id) {
		return this.state.data.find(element => element.id === id);
	}
  render() {
    return (
      <div className="App">
				{this.state.displayId === null ?
        <SeminarList data={this.state.data} handleSeminarSelect={(id) => this.setState({ displayId: id})} /> :
				<Seminar data={this.returnSeminarById(this.state.displayId)} handleBack={() => this.setState({ displayId: null })} />}
      </div>
    );
  }
}
