import React, { Component } from "react";
import Timeline from "react-visjs-timeline";

// add items to the DataSet

// create groups to highlight groupUpdate
const tlGroups = [{ id: 1, content: "Group 1" }, { id: 2, content: "Group 2" }];

const tlItems = [
  { id: 1, content: "Editable", editable: true, start: "2010-08-23", group: 1 },
  {
    id: 2,
    content: "Editable",
    editable: true,
    start: "2010-08-23T23:00:00",
    group: 2
  },
  {
    id: 3,
    content: "Read-only",
    editable: false,
    start: "2010-08-24T16:00:00",
    group: 1
  },
  {
    id: 4,
    content: "Read-only",
    editable: false,
    start: "2010-08-26",
    end: "2010-09-02",
    group: 2
  },
  {
    id: 5,
    content: "Edit Time Only",
    editable: { updateTime: true, updateGroup: false, remove: false },
    start: "2010-08-28",
    group: 1
  },
  {
    id: 6,
    content: "Edit Group Only",
    editable: { updateTime: false, updateGroup: true, remove: false },
    start: "2010-08-29",
    group: 2
  },
  {
    id: 7,
    content: "Remove Only",
    editable: { updateTime: false, updateGroup: false, remove: true },
    start: "2010-08-31",
    end: "2010-09-03",
    group: 1
  },
  { id: 8, content: "Default", start: "2010-09-04T12:00:00", group: 2 }
];

const tlOptions = {
  orientation: { axis: "top" },
  editable: true
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: tlOptions,
      groups: tlGroups,
      items: tlItems
    };
  }

  componentDidMount() {}

  render() {
    const { groups, items, options } = this.state;
    return (
      <div>
        <h1>Example 4</h1>
        <p>Specify individual items to be editable or readonly.</p>
        <Timeline
          ref={node => (this.tl = node)}
          options={options}
          groups={groups}
          items={items}
        />
      </div>
    );
  }
}

export default App;
