import React,{useContext,useState} from 'react';
import {StatisticContext} from '../../../contexts/StatisticContext';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './stat.sass'

const UserStatistic = () => {
    const{ststate}=  useContext(StatisticContext);
    const [state,setState] = useState({});
   
    return (
        <div className="users-income_stat">
            <h3  className="user-income_stat">Доходи працівників</h3>
            <LineChart width={1000} height={300} data={ststate}
                
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                   <XAxis dataKey="last_changes"/>
                   <YAxis/>
                   <CartesianGrid strokeDasharray="3 3"/>
                   <Tooltip/>
                   <Legend />
       <Line type="monotone" dataKey="user_income" stroke="#82ca9d" activeDot={{r: 8}}/>
       
      </LineChart>
        </div>
    )
}

export default UserStatistic
