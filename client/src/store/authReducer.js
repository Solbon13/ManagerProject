const SET_CURRENT_USER = 'SET_CURRENT_USER'
const SET_IS_REGISTER = 'SET_IS_REGISTER'

const defaultState = {
    currentUser: null,
    isRegister: false
}

export default function authReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        case SET_IS_REGISTER:
            return {
                ...state,
                isRegister: action.payload,
            }
        default:
            return state
    }
}

export const setCurrentUser = (currentUser) => ({ type: SET_CURRENT_USER, payload: currentUser })
export const setIsRegister = (isRegister) => ({ type: SET_IS_REGISTER, payload: isRegister })