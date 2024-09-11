const initialState = {
    cartItems: []  // Initialize as an array
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
        default:
            return state;
    }
};

export default cartReducer;