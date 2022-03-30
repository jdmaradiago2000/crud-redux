const INITIAL_STATE = {
    products: [
        {
            id: 1,
            name: "Pollo Frito",
            price: 2
        },
        {
            id: 2,
            name: "Jabón",
            price: 3
        }
    ],
    productEdit: null
};

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){

        default:
            return state;
    }
}

export default reducer;