import React,{Fragment,useState } from 'react'
import '../chart/chartbox.css'
import Donut from '../chart/Donut'
import Linechart from '../chart/Line'
import CustomizedTables from '../chart/TableView'
import CenteredTabs from '../chart/Togglechart'
import Divider from '@material-ui/core/Divider';
import Barchart from './Barchart'
import Grow from '@material-ui/core/Grow';



const ChartBox = () => 
 {
    const [barchartEnabled,clickBarchart] = useState(false)
    const toggleLinechart = () => 
    {
       clickBarchart(false)
    }

    const toggleBarchart = () => 
     {
        clickBarchart(true)
     }

     return (
         <Fragment>
             <div className="main-wrapper">
               <Fragment>
                   <Fragment>
                     <div className="tab-wrapper">
                       <CenteredTabs toggleLinechart={toggleLinechart} toggleBarchart={toggleBarchart}/>
                      
                     </div>
                   </Fragment>
                   <div className="chart-wrapper">
                       <Fragment>
                         <Grow>
                          {barchartEnabled ? <Linechart/> : <Barchart/>}
                          </Grow>
                       </Fragment>
                       <Divider orientation="vertical" flexItem />
                       <Fragment>
                          <Donut/>
                       </Fragment>
                   </div>
                </Fragment>

                <Fragment className="table-view">
                     <div className="table-view">
                        <CustomizedTables/>
                     </div>
                </Fragment>
            </div>
            
        </Fragment>
     )
 }

 export default ChartBox;