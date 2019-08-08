import React,{useContext,useState} from 'react';
import { CompanyContext } from '../../../contexts/CompanyContext';
import Paper from '@material-ui/core/Paper';
import EditeCostAsset from './EditeCostAsset';
import PayrollIncomeCompany from './PayrollInomeCompany';
import './managment.sass'
import { UserContext } from '../../../contexts/UserContext';
import PropTypes from 'prop-types'; 


const  Managment=()=> {
      const{cstate }= useContext(CompanyContext);
      const{usdata }= useContext(UserContext);
      console.log(usdata);
      
      let salary=0;
    for(let i in usdata) {
      salary=salary+usdata[i].salary;
    }

      console.log("SAAAAAKLLLLL"+salary);
    return (
         
          <Paper className="manag-cont" >
             <div className="manag-title"> 
                  <h3>Managment</h3>
            </div> 

            <div className="manag-inf">
               <div className="manag-inf_cont">
                  <div>Поточний дохід компанії    </div>
                  <div className="manag-inf_cont_inf" style={{color:"red"}}> { cstate.income} </div>
               </div>

               <div className="manag-inf_cont">
                  <div> Процентна ставка    </div>
                  <div className="manag-inf_cont_inf_ass" style={{color:"red"}}>{cstate.costassets}   </div>
               </div>

               <div className="manag-inf_cont">
                 <div> Щомісячне нарахування     </div>
               <div className="manag-inf_cont_inf" style={{color:"red"}}> {cstate.month_income}  </div>
            </div>
                 
            </div>

             <div className="manag-adg">
                    <div className="manag-adg_cost_ass">
                            <EditeCostAsset/>
                    </div>   
                    
                    <div className="manag-adg_cost_ass">
                            <PayrollIncomeCompany salary ={salary}/>
                    </div>      
                              
            </div>   

               
                </Paper>
         
    )
} 
export default Managment

Managment.propTypes = { 
   
   salary: PropTypes.number, 
 
} 