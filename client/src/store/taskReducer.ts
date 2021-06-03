import { actionAuthType, TaskStateType, TaskType } from "../type/type"
import { SET_TASK, ADD_TASK } from "../type/const"

const defaultState: TaskStateType = {
    task: [] as Array<TaskType>,
}

export default function taskReducer (state = defaultState, action: actionAuthType): TaskStateType {
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

export const setTask = (tasks: Array<TaskType>) => ({type: SET_TASK, payload: tasks})
export const addTask = (task: TaskType) => ({ type: ADD_TASK, payload: task })