import { ADD_DEPARTAMENT, SET_CURRENT_DEPARTAMENT, SET_DEPARTAMENT, SET_TASK_LIST } from "../type/const"
import { actionAuthType, DepartamentType, mainStateType, TaskListType } from "../type/type"


const defaultState: mainStateType = {
    taskList: [] as Array<TaskListType>,
    departament: [] as Array<DepartamentType>,
    currentDepartament: 0,
}

export default function mainReducer(state = defaultState, action: actionAuthType): mainStateType {
    switch (action.type) {
        case SET_CURRENT_DEPARTAMENT:
            return {
                ...state,
                currentDepartament: action.payload,
            }
        case SET_DEPARTAMENT:
            return {
                ...state,
                departament: action.payload,
            }
        case ADD_DEPARTAMENT:
            return {
                ...state,
                departament: [...state.departament, action.payload]
            }
        case SET_TASK_LIST:
            return {
                ...state,
                taskList: action.payload,
            }
        default:
            return state
    }
}

export const setCurrentDepartament = (currentDepartament: number) => ({ type: SET_CURRENT_DEPARTAMENT, payload: currentDepartament })

export const setDepartament = (departaments: Array<DepartamentType>) => ({ type: SET_DEPARTAMENT, payload: departaments })
export const addDepartament = (departament: DepartamentType) => ({ type: ADD_DEPARTAMENT, payload: departament })

export const setTaskList = (taskList: TaskListType) => ({ type: SET_TASK_LIST, payload: taskList })