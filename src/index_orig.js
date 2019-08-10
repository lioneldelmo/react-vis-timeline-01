import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Timeline from "react-visjs-timeline";
import App2 from "./app";

const options = {
  width: "100%",
  //height: "400px",
  stack: false,
  showMajorLabels: true,
  showCurrentTime: true,
  zoomMin: 1000 * 5 * 60,
  zoomMax: 1000 * 5 * 60,
  zoomable: false,
  axis: "top",
  start: new Date("October 14, 2018 10:56:00"),
  end: new Date("October 14, 2018 01:00:00"),
  min: new Date("October 14, 2018 10:56:00"),
  max: new Date("October 15, 2018 12:00:00"),
  //type: "background",
  selectable: true
};
const items = [
  {
    start: new Date("October 14, 2018 10:57:00"),
    end: new Date("October 14, 2018 10:57:20"), // end is optional
    content: "a",
    type: "background"
  },
  {
    start: new Date("October 14, 2018 10:58:10"),
    end: new Date("October 14, 2018 10:58:20"), // end is optional
    content: ""
  }
];

const customTimes = {
  marker: new Date("October 14, 2018 10:56:30")
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Timeline
        selectHandler={selectHandler}
        options={options}
        items={items}
        customTimes={customTimes}
      />
    </div>
  );
}
function clickHandler(props) {
  console.log(props);
}
function selectHandler(props) {
  console.log("selected");
  console.log(props);
}

const rootElement = document.getElementById("root");
//ReactDOM.render(<Timeline selectHandler={selectHandler} clickHandler={clickHandler} options={options} items={items} />, rootElement);
ReactDOM.render(<App2 />, rootElement);
