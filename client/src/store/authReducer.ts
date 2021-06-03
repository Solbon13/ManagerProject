import { SET_CURRENT_USER, SET_IS_REGISTER } from "../type/const"
import { authStateType, UserType, actionAuthType } from "../type/type"



const defaultState: authStateType = {
    currentUser: null,
    isRegister: false
}

export default function authReducer(state = defaultState, action: actionAuthType): authStateType {
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

export const setCurrentUser = (currentUser: UserType) => ({ type: SET_CURRENT_USER, payload: currentUser })
export const setIsRegister = (isRegister: boolean) => ({ type: SET_IS_REGISTER, payload: isRegister })