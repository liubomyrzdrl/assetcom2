import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AssetsModuleShema= new Schema({
    income: {
        type: Number,
   
          },
     costassets: {
       type: Number,
       required: 'costassets is required'
    },
    month_income:{
        type: Number,
         
    }    
});

export default mongoose.model('AssetsModule', AssetsModuleShema);