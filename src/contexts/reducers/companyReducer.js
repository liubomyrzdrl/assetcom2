import React,{useEffect,useState} from 'react';

export const CompanyReducer=(state,action)=>{

    switch(action.type){
        case 'GET_DATA_COMPANY': return action.payload;
        case 'UPDATE_COSTSASSET_COMPANY': return action.payload
        case 'UPDATE_INCOME_COMPANY':   return  action.payload;
        default: return '';
    }
}
   
