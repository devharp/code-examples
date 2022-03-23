export const reduce = (value) => {
    return (dispatch) =>{
        dispatch({
            type: 'deduct',
            payload: value
        })
    }
}

export const add = (value) => {
    return (dispatch) =>{
        dispatch({
            type: 'add',
            payload: value
        })
    }
}