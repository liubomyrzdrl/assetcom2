import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserShema= new Schema({
  
  first_name:{
    type: String,
       
  },
    last_name:{
    type: String,
     },
     email:{
       type: String,
       required: ''
     },
     password:{
       type: String,
       required: ''
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