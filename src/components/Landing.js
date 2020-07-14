import React from 'react'
import './landing.css'
import Header from '../components/header/header'
import ChartBox from '../components/chart/ChartBox'

const Landing = () =>  {
       return (
           <div className="landing-warpper">
              <Header/>
              <ChartBox/>
           </div>
       )
}

export default Landing;
