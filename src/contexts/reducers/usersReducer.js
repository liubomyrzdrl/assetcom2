export const usersReducer=(state,action)=>{
    
 
    switch(action.type){
        case 'GET_DATA_USERS': return  action.payload;
        case 'UPDATE_DATA_USERS':   return action.payload;
        case 'ADD_USER':   return [...state,action.payload];
           default: return state;
    }
}
   
