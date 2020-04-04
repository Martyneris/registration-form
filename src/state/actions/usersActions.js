import * as types from './all-types';

export function addUser(user) {
    return {
        type: types.ADD_USER,
        payload: user
    }
}

export function updateUser(user, key) {
    return {
        type: types.UPDATE_USER,
        payload: { user, key }
    }
}

export function removeUser(i) {
    return {
        type: types.REMOVE_USER,
        payload: i
    }
}

export function removeAllUsers() {
    return {
        type: types.REMOVE_ALL_USERS,
    }
}