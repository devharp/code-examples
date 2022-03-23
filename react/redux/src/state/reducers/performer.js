const reducer = (state = 0, action) => {
    switch(action.type){
        case "deduct":
            return state - action.payload;
        case "add":
            return state + action.payload;
        default:
            return state;
    }
}

export default reducer