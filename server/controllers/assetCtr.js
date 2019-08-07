import AssetsModule from '../models/assetsmodule.model';
import Users from '../models/user.model';
import  async,{done} from 'async';
require("@babel/polyfill");

 
// Get 
const getAssData = async (req,res)=>{
 const data = await  AssetsModule.findOne({});
   try{
     console.log(data);
     res.send(data)
   }catch(err){
     console.log("Error"+err);

   }
     
}

//Put Зміна процентної ставки
const updateAssData =  async (req,res)=>{
   
   try{
    const data = await AssetsModule.findOne({});  
     
    data.costassets= req.body.costassets;
   
       data.save();
     return res.json(data)
   }catch(err){
    console.log("Error"+err);

  }
      
  }
//inIncome
const infIncome = async (req,res)=>{
  try{
     const data = await  AssetsModule.findOne({});
      data.income= req.body.income;
     console.log(req.body.income);

   data.save(req.body.income)
    return res.json(data)
   }catch(err){
   console.log("Error"+err);
     }
}

//Нарахування щомісячного доходу компанії і спасання на зарплати працівникам
const payrollSalary = async (req,res)=>{
  try{
   const data = await  Users.find({});
    var cost=0;
     for(let i in data){
     // data[i].user_income =data[i].user_income+data[i].salary;
           cost = cost+ data[i].salary;    
       console.log("Cost"+  cost );
    
     }
     
        console.log("cost"+cost);

       
        const asdata = await  AssetsModule.findOne({});
        console.log( "asdata"+ asdata);
        asdata.income=asdata.income-cost+3000;
          async.mapLimit(asdata, asdata.length, function(document, next){
          document.save(next);
        }, done);
        console.log( "asdata.income"+ asdata.income);
    return res.json( asdata);
   }catch(err){
   console.log("Error"+err);
     }
}

 export default {getAssData,
            updateAssData,
            infIncome,
            payrollSalary
          }