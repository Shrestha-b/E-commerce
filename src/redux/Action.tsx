import { ADD_TO_CART } from "./Constant"

export function AddToCart(item:any){
return{
    type: ADD_TO_CART,
    data: item
}
}