const cart = [];

const useCart = (state=cart,action)=>{
    const product = action.payload;
    switch (action.type) {
        case "ADD_ITEM":
            const exist = state.find((i)=> i.id === product.id);
            if (exist){
                return state.map((i)=>
                i.id === product.id ? {...i, item: i.item + 1}: i);
            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        item: 1,

                    }
                ]
            }
            break;

        case "DELETE_ITEM":
            const exist1 = state.find((i)=> i.id === product.id);
            if (exist1.item === 1){
                return state.filter((i)=> i.id !== exist1.id);
            }
            else {
                return state.map((i)=>
                    i.id === product.id ?{...i, item: i.item-1}: i
                );
            }
            break;

        default:
            return state;
            break;
    }
}

export default useCart;