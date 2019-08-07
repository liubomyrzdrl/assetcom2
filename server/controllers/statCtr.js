import Statistic from '../models/statistic.model';
require("@babel/polyfill");


// Get Статистична інформація про доходи кампанії та працівників
const getStatData = async (req,res)=>{
    try{
       const data = await  Statistic.find({});
       console.log(data);
      res.send(data)
     }catch(err){
     console.log("Error"+err);
       }
  }
 
  //Post  Додає дані на сайт
const addStaticData = async (req,res)=>{
    try{
       const data = await  Statistic.create(req.body);
       console.log(data);
      res.send(data)
     }catch(err){
     console.log("Error"+err);
       }
  }

  export default {
    getStatData,
    addStaticData     
  }