import React from 'react';
import Statistic from './Statistic/Statistic';
import Managment from './Managment/Managment'; 
import './admin.css';
 

const  Admin=()=> {
    return (
        <div className="admin-block" >
            <div className="admin-title_block" >
                <h3>Administrator</h3>
            </div>

            <div  className="admin-secs_block">
                    <div className="manag-block"> 
                        <div  className="manag-block_cont">     
                           <Managment/>
                        </div> 
                    </div>
                    
                    <div className="stat-blockinf">       
                        <Statistic/>
                    </div>
                    
            </div>
        </div>
    )
} 
export default Admin
