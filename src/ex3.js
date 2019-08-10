import React, { Component } from "react";
import Timeline from "react-visjs-timeline";

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
  // timeAxis: { scale: "day", step: 1 },
  start: "2014-01-10",
  end: "2014-02-10"
  //editable: true,
  //showCurrentTime: true
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: tlOptions,
      items: tlItems
    };
  }

  stringifyObject = object => {
    if (!object) return;
    var replacer = function(key, value) {
      if (value && value.tagName) {
        return "DOM Element";
      } else {
        return value;
      }
    };
    return JSON.stringify(object, replacer);
  };

  logEvent = (event, properties) => {
    var log = document.getElementById("log");
    var msg = document.createElement("div");
    msg.innerHTML =
      "event=" +
      JSON.stringify(event) +
      ", " +
      "properties=" +
      this.stringifyObject(properties);
    log.firstChild
      ? log.insertBefore(msg, log.firstChild)
      : log.appendChild(msg);
  };

  setHoveredItem = id => {
    var hoveredItem = document.getElementById("hoveredItem");
    hoveredItem.innerHTML = "hoveredItem=" + id;
  };

  componentDidMount() {
    console.log(this.tl);

    const timeline = this.tl.$el;

    timeline.on("rangechange", properties => {
      this.logEvent("rangechange", properties);
    });

    timeline.on("rangechanged", function(properties) {
      this.logEvent("rangechanged", properties);
    });

    timeline.on("select", function(properties) {
      this.logEvent("select", properties);
    });

    timeline.on("itemover", function(properties) {
      this.logEvent("itemover", properties);
      this.setHoveredItem(properties.item);
    });

    timeline.on("itemout", function(properties) {
      this.logEvent("itemout", properties);
      this.setHoveredItem("none");
    });

    timeline.on("click", function(properties) {
      this.logEvent("click", properties);
    });

    timeline.on("doubleClick", function(properties) {
      this.logEvent("doubleClick", properties);
    });

    timeline.on("contextmenu", function(properties) {
      this.logEvent("contextmenu", properties);
    });

    timeline.on("mouseDown", function(properties) {
      this.logEvent("mouseDown", properties);
    });

    timeline.on("mouseUp", function(properties) {
      this.logEvent("mouseUp", properties);
    });
  }

  render() {
    const { items, options } = this.state;
    return (
      <div>
        <h1>Example 3</h1>
        <p>
          This example listens for events <code>select</code>,{" "}
          <code>click</code>, <code>doubleClick</code>, <code>rangechange</code>
          , and <code>rangechanged</code> of the Timeline (other possible
          events: <code>mouseDown</code>, <code>mouseUp</code>,{" "}
          <code>mouseOver</code>, <code>mouseMove</code>), and listens for
          changes in the DataSet (<code>add</code>, <code>update</code>, or{" "}
          <code>remove</code> items).
        </p>
        <Timeline
          ref={node => (this.tl = node)}
          options={options}
          items={items}
        />

        <div id="hoveredItem" />
        <div id="log" />
      </div>
    );
  }
}

export default App;
