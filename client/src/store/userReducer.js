const SET_USER = 'SET_USER'

const defaultState = {
    users: null
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                users: action.payload,
            }
        default:
            return state
    }
}

export const setUsers = (users) => ({ type: SET_USER, payload: users })