import React,{useContext} from 'react';
import {StatisticContext} from '../../../contexts/StatisticContext';
import CompanyStatistic from './CompanyStatistic';
import UserStatistic from './UserStatistic';
import Paper from '@material-ui/core/Paper';
import './stat.sass'
 const Statistic=()=> {
  const{ststate}=  useContext(StatisticContext);
  const last_date=null;
   
    return (
        <Paper className="stat-block">
             <CompanyStatistic/>
             <UserStatistic/>
          
        </Paper>
    )
}

export default Statistic

