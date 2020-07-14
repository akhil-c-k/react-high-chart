import React, { PureComponent } from "react";
import Highcharts from "highcharts";

let json = require('../../api/Data.json');

var arr = [];
const seriesData = json.map((data) => {
    arr.push(data.dow)
})

export default class Barchart extends PureComponent {
    
  instance;
  options = {
    chart: {
      type: "bar"
    },
    title: {
      text: "Bar Chart"
    },
    series: [
      {
        data: arr
      }
    ]
  };

  componentDidMount() {
    this.instance = Highcharts.chart("my-chart", this.options);
  }

  render() {
    return (
      <div>
        <div id="my-chart" />
      </div>
    );
  }
}
