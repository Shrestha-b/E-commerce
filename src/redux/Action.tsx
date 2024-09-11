// actions.ts
export const addToCart = (item: any) => ({
    type: 'ADD_TO_CART',
    payload: item,
});
export const removeToCart  = (Item :any) => ({
    type: 'REMOVE_TO_CART',
    payload:Item
})