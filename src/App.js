import React, { Component } from "react";

import SeminarList from "./components/seminarList/seminarList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Ansikte",
          desc: "Lära sig baka kakor.",
          category: "Bakning",
          date: new Date(2020, 1, 1, 8, 0, 0),
        },
        {
          id: 2,
          name: "Clownmålning",
          desc: "Att måla roliga ansikten på personer.",
          category: "Målning",
          date: new Date(2020, 1, 3, 8, 0, 0),
        },
        {
          id: 3,
          name: "Pajkastning",
          desc: "Kasta pajer i ansiktet på folk.",
          category: "Underhållning",
          date: new Date(2020, 1, 7, 8, 0, 0),
        },
        {
          id: 4,
          name: "Tårtor",
          desc: "Lära sig baka tårtor.",
          category: "Bakning",
          date: new Date(2020, 1, 23, 8, 0, 0),
        },
        {
          id: 5,
          name: "Svansen på åsnan",
          desc: "Sätta svansen på åsnan.",
          category: "Underhållning",
          date: new Date(2020, 2, 1, 8, 0, 0),
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <SeminarList data={this.state.data} />
      </div>
    );
  }
}
