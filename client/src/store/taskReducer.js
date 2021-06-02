const SET_TASK = 'SET_TASK'
const ADD_TASK = 'ADD_TASK'

const defaultState = {
    task: null,
}

export default function taskReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_TASK:
            return {
                ...state,
                task: action.payload,
            }
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload],
            }
        default:
            return state
    }
}

export const setTask = (tasks) => ({type: SET_TASK, payload: tasks})
export const addTask = (task) => ({ type: ADD_TASK, payload: task })