import React, { Component } from "react";
import Timeline from "react-visjs-timeline";

const tlItems = [
  {
    id: 1,
    start: new Date(new Date().getTime() - 60 * 1000),
    end: new Date(),
    content: "Dynamic event"
  }
];

const tlOptions = {
  orientation: { axis: "top" },
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

  initTimeline = () => {
    const timeline = this.tl.$el;

    timeline.addCustomTime(new Date());

    // add event listener
    timeline.on("timechange", event => {
      const { items } = this.state;

      document.getElementById("customTime").innerHTML =
        "Custom Time: " + event.time;

      var item = items.find(i => i.id === 1);

      console.log("item", item);

      if (event.time > item.start) {
        console.log("before", item.end);
        item.end = new Date(event.time);
        console.log("after", item.end);
        var now = new Date();
        if (event.time < now) {
          item.content = "Dynamic event (past)";
          item.className = "past";
        } else if (event.time > now) {
          item.content = "Dynamic event (future)";
          item.className = "future";
        } else {
          item.content = "Dynamic event (now)";
          item.className = "now";
        }

        // data.update(item);
        this.setState({
          items: [...items]
        });
      }
    });

    // set a custom range from -2 minute to +3 minutes current time
    var start = new Date(new Date().getTime() - 2 * 60 * 1000);
    var end = new Date(new Date().getTime() + 3 * 60 * 1000);
    timeline.setWindow(start, end, { animation: false });
  };
  componentDidMount() {
    this.initTimeline();
  }

  render() {
    const { items, options } = this.state;
    return (
      <div>
        <h1>Example 5</h1>
        <p>
          When the custom time bar is shown, the user can drag this bar to a
          specific time. The Timeline sends an event that the custom time is
          changed, after which the contents of the timeline can be changed
          according to the specified time in past or future.
        </p>

        <div id="customTime">&nbsp;</div>

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
