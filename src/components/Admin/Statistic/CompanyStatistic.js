import React,{useContext,useState} from 'react';
import {StatisticContext} from '../../../contexts/StatisticContext';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
 import './stat.sass'


const CompanyStatistic = () => {
    const{ststate}=  useContext(StatisticContext);
    const [state,setState] = useState({});
   
    return (
        <div  className="company-income_stat">
            <h3  className="company-income_stat">Доходи компанії</h3>
            <LineChart width={1000} height={300} data={ststate}
                
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                   <XAxis dataKey="last_changes"/>
                   <YAxis/>
                   <CartesianGrid strokeDasharray="3 3"/>
                   <Tooltip/>
                   <Legend />
       <Line type="monotone" dataKey="company_income" stroke="#8884d8" activeDot={{r: 8}}/>
       
      </LineChart>
        </div>
    )
}

export default CompanyStatistic
