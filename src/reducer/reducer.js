export const initialState=[];
export const reducer=(state=initialState,action)=>{
    switch(action.type){
     case "INSERT":
         return [...state,action.payload];
        default:
            return state;
    }
}