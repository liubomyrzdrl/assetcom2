export const statisticReducer=(state,action)=>{
    switch(action.type){
        case 'GET_STAT_DATA': return action.payload ;
        case 'POST_STAT_DATA':   return [...state,action.payload];
        default: return state;
    }
}
   
