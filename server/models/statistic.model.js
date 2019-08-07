import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const StatisticShema= new Schema({
  last_changes:{
    type: String,    
    
  },
    company_income:{
    type: Number,
     },

     user_income:{
       type: Number
     },
     
  
},{ collection: 'statistic'});

export default mongoose.model('Statistic', StatisticShema);