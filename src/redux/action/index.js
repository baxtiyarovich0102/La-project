import product from "../../components/product";
// ADD CART
export const addCart = (product) => {
    return{
        type: "ADD_ITEM",
        payload: product
    }
}

//DELETE CART

export const deleteCart = (product) => {
    return{
        type: "DELETE_ITEM",
        payload: product
    }
}