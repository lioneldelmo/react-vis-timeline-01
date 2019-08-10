import React, { Component } from "react";
import Timeline from "react-visjs-timeline";

// https://visjs.github.io/vis-timeline/examples/timeline/interaction/animateWindow.html

// add items to the DataSet
const tlItems = [
  { id: 1, content: "item 1<br>start", start: "2014-01-23" },
  { id: 2, content: "item 2", start: "2014-01-18" },
  { id: 3, content: "item 3", start: "2014-01-21" },
  { id: 4, content: "item 4", start: "2014-01-19", end: "2014-01-24" },
  { id: 5, content: "item 5", start: "2014-01-28", type: "point" },
  { id: 6, content: "item 6", start: "2014-01-26" }
];

const tlOptions = {
  orientation: { axis: "top" },
  timeAxis: { scale: "day", step: 1 },
  start: "2014-01-10",
  end: "2014-02-10",
  editable: true,
  showCurrentTime: true
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: tlOptions,
      items: tlItems
    };
  }

  onButtonClick = param => e => {
    console.log(param);
    const timeline = this.tl.$el;
    if (this.tl) {
      if (param === "window1") {
        timeline.setWindow("2014-01-01", "2014-04-01");
      } else if (param === "window2") {
        timeline.setWindow("2014-01-01", "2014-04-01", { animation: false });
      } else if (param === "fit") {
        timeline.fit();
      } else if (param === "select") {
        timeline.setSelection([5, 6], { focus: true });
      } else if (param === "focus1") {
        timeline.focus(2);
      } else if (param === "focus2") {
        timeline.focus([5, 6], {
          animation: { duration: 3000, easingFunction: "linear" }
        }); // ms
      } else if (param === "focus3") {
        const selection = timeline.getSelection();
        timeline.focus(selection);
      } else if (param === "moveTo") {
        timeline.moveTo("2014-02-01");
      }
    }
  };

  render() {
    const { items, options } = this.state;
    return (
      <div>
        <h1>Example 2</h1>
        <h4>
          This example demonstrates functions to programmatically adjust the
          visible window of the Timeline.{" "}
        </h4>
        <p>
          <input
            type="button"
            id="window1"
            value="Set window from 2014-01-01 to 2014-04-01"
            onClick={this.onButtonClick("window1")}
          />
          <br />
          <input
            type="button"
            id="window2"
            value="Set window from 2014-01-01 to 2014-04-01 without animation"
            onClick={this.onButtonClick("window2")}
          />
          <br />
          <input
            type="button"
            id="moveTo"
            value="Move to 2014-02-01"
            onClick={this.onButtonClick("moveTo")}
          />
          <br />
          <input
            type="button"
            id="fit"
            value="Fit all items"
            onClick={this.onButtonClick("fit")}
          />
          <br />
          <input
            type="button"
            id="select"
            value="Select & focus items 5 and 6"
            onClick={this.onButtonClick("select")}
          />
          <br />
          <input
            type="button"
            id="focus1"
            value="Focus item 2"
            onClick={this.onButtonClick("focus1")}
          />
          <br />
          <input
            type="button"
            id="focus2"
            value="Focus items 5 and 6 (slow and linear animation)"
            onClick={this.onButtonClick("focus2")}
          />
          <br />
          <input
            type="button"
            id="focus3"
            value="Focus current selection"
            onClick={this.onButtonClick("focus3")}
          />
          <br />
        </p>

        <Timeline
          ref={node => (this.tl = node)}
          options={options}
          items={items}
        />
      </div>
    );
  }
}

export default App;
