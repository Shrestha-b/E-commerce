const initialState = {
    cartItems: [],
    userdata: [] // Initialize as an array
};

const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            };
        case 'REMOVE_TO_CART':
        return {
            ...state,
            cartItems: state.cartItems.filter(
                (Item:any) => Item.id !== action.payload
            ),
        };  
        case 'ADD_USER_NAME':
        return {
            ...state,
            userdata: [...state.userdata, action.item]
        }
        default:
            return state;
    }
};

export default cartReducer;