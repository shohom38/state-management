const initialState = {
    count: 0,
}

function CountingReducer(state = initialState, action) {
    switch (action.type) {
        case 'push': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        default:
            return state;
    }
}

export default CountingReducer;