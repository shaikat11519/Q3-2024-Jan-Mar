const initialState = {
    cartData: []
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                cartData: [...state.cartData, action.payload]
            }
            break;
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartData:state.cartData.filter(x=>x._id!=action.payload._id)
            }
            break;
        case "CLEAR_FROM_CART":
                return {
                    ...state,
                    cartData: []
                }
                break;
        default:
            return state;
    }
}

export {
    initialState,
    cartReducer
}