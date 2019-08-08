import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserShema= new Schema({
  id:{
 type: String,
  },
  first_name:{
    type: String,
       
  },
    last_name:{
    type: String,
     },
     email:{
       type: String,
       require: "Email reqiure"
    
     },
     password:{
       type: String,
       require: "password reqiure"
     },
   user_income:{
       type: Number,
      
      },
    assets_pack:{
        type: Number,
     
    } , 
   role: {
        type: String,
          }
          , 
     salary: {
          type: Number,
         }
},{ collection: 'users'});

export default mongoose.model('Users', UserShema);