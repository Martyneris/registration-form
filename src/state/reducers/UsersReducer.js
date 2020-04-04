import * as types from '../actions/all-types';
const initState = [];
const UsersReducer = (state = initState, action) => {
    console.log(action, 'client reducer');
    switch (action.type) {
        case types.ADD_USER:
            return [...state, action.payload];
        case types.UPDATE_USER:
        return state.map((item, i) => i == action.payload.key? action.payload.user : item)
        case types.REMOVE_USER:
            return state.filter((item, i) => i !== action.payload);
        case types.REMOVE_ALL_USERS:
            return [];
        default: return state
    }
};

export default UsersReducer