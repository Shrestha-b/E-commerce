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
        default:
            return state;
    }
};

export default cartReducer;