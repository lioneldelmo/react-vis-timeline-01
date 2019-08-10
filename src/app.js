import React, { Component } from "react";
import Timeline from "react-visjs-timeline";

const options = {
  width: "100%",
  // height: "calc(100vh - 100px)",
  height: "150px",
  stack: false,
  editable: true,
  showMajorLabels: true,
  showCurrentTime: false,
  zoomMin: 1000 * 60 * 60,
  zoomMax: 1000 * 60 * 60 * 2,
  zoomable: false,
  horizontalScroll: true,
  zoomKey: "ctrlKey",
  orientation: { axis: "top" },
  timeAxis: { scale: "minute", step: 5 },
  start: new Date("October 14, 2018 10:00:00"),
  end: new Date("October 15, 2018 15:00:00"),
  min: new Date("October 13, 2018 10:56:00"),
  max: new Date("October 16, 2018 12:00:00"),
  //type: "background",
  selectable: true
};

const itemsData = [
  {
    start: new Date("October 14, 2018 10:55:00"),
    end: new Date("October 14, 2018 10:59:59"), // end is optional
    content: "a",
    type: "background"
  },
  {
    start: new Date("October 14, 2018 10:58:00"),
    end: new Date("October 14, 2018 10:58:30"), // end is optional
    content: ""
  }
];

class App2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: options,
      items: itemsData,

      customTimes: {
        marker: new Date("October 14, 2018 10:56:30")
      }
    };
  }

  selectHandler = props => {
    console.log("selected");
    console.log(props);
  };

  _updateItems = () => {
    let { items } = this.state;
    this.setState({
      items: items.length === 0 ? itemsData : []
    });
  };

  componentDidMount() {
    setInterval(this._updateItems, 60000);
  }

  render() {
    const { items, options, customTimes } = this.state;
    return (
      <div>
        <h1>Settings component</h1>
        <Timeline
          ref={node => (this.tl = node)}
          selectHandler={this.selectHandler}
          options={options}
          items={items}
          customTimes={customTimes}
        />
      </div>
    );
  }
}

export default App2;
