
import Users from '../models/user.model';
import AssetsModule from '../models/assetsmodule.model'
import  async,{done} from 'async';
const {ObjectId} = require('mongodb')
require("@babel/polyfill");


// Get 
const getUsers = async (req,res)=>{
  try{
     const data = await  Users.find({});
     console.log(data);
    res.send(data)
   }catch(err){
   console.log("Error"+err);
     }
}
//Post  create user
 
const createUser = async (req,res)=>{
    try{
       const data = await  Users.create(req.body);
       console.log(data);
      res.send(data)
     }catch(err){
     console.log("Error"+err);
       }
  }

//get by id
 const  getUserById =async (req,res)=>{
    try{
       const data = await  Users.findOne({_id:req.params.id});
       console.log(data);
      res.send(data)
     }catch(err){
     console.log("Error"+err);
       }
  }

//update  by id
const updateUserByid =async (req,res)=>{
    try{
       const data = await  Users.findByIdAndUpdate({_id:req.params.id},req.body);
       console.log(data);
      
      return res.json(data)
     }catch(err){
     console.log("Error"+err);
       }
  }
  //update assets
  const updateAssetUserByid =async (req,res)=>{
    try{
       const data = await  Users.findOne({_id:req.params.id});
    
      
        
     console.log(req.body.salary);
       data.salary= req.body.salary;
       data.assets_pack= req.body.assets_pack;
       
       data.save(err=>{
           if(err){
            console.log("err"+err);
           }else{
            console.log("ok");
           }
       });
       console.log(data);
      
      return res.json(data)
     }catch(err){
     console.log("Error"+err);
       }
  }


  //delete User  by is
  const deleteUserByid =async (req,res)=>{
    try{
      console.log('IDDDDD'+req.params.id);
       const data = await  Users.findOne({_id:req.params.id});
       console.log("DAta",data);
      data.remove(err=>{
        if(!err){
          console.log('Ok');
        }else{
          console.log('ERRRR');
        }
      });
      return res.json(data)
     }catch(err){
     console.log("Error"+err);
       }
  }
 //Нарахування щомісячного доходу всім працівникам списання з доходу компанії
const infSalary = async (req,res)=>{
    try{
     const data = await  Users.find({});
      var cost=0;
       for(let i in data){
        data[i].user_income =data[i].user_income+data[i].salary;
             cost = cost+ data[i].salary;    
         console.log("asdfasd"+  data[i].salary );
      
       }
       
          console.log("cost"+cost);
 
          async.mapLimit(data, data.length, function(document, next){
            document.save(next);
          }, done);
         
          const asdata = await  AssetsModule.findOne({});
          console.log( "asdata"+ asdata);
          asdata.income=asdata.income-cost;
          console.log( "asdata.income"+ asdata.income);
      return res.json( asdata);
     }catch(err){
     console.log("Error"+err);
       }
  }
//Autentefication
const authAutent= async(req,res)=>{
    try{
        const data = await  Users.findOne({email:req.body.email});
        console.log(data._id);
    return    res.json(
        {  "status": "ok",
          "data": {
            "id": data._id, 
            "role": data.role, 
            "salary": data.salary,
           "assets_pack": data.assets_pack
         }
    }
        )
     
      }catch(err){
      console.log("Error"+err); 
      res.json(
             { "status": "err",
               "message": "Wrong email or password" }
  
        )
        }
}

    export default  {
        getUsers,
        createUser,
        getUserById,
        updateUserByid,
        deleteUserByid,
        authAutent,
        updateAssetUserByid,
        infSalary 

     }