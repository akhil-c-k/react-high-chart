import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

let json = require('../../api/Data.json');

var arr = [];
const seriesData = json.map((data) => {
    arr.push(data.dow)
})

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: arr
  }]
}
 
const Linechart = () => 
 {
     return(
         <div>
           <HighchartsReact
            highcharts={Highcharts}
            options={options}
            />
         </div>
     )
 }

 export default Linechart;