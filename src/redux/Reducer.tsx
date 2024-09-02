import { ADD_TO_CART } from "./Constant";


const initailaStore:any = [];
 
export const reducer = (state=initailaStore,action:any) => {
    switch(action.type){
        case ADD_TO_CART:
            return[
                ...state,
                action.data
            ]
            default:
                return state
    }
    
}