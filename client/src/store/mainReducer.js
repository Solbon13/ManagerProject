const SET_DEPARTAMENT = 'SET_DEPARTAMENT'
const ADD_DEPARTAMENT = 'ADD_DEPARTAMENT'

const SET_CURRENT_DEPARTAMENT = 'SET_CURRENT_DEPARTAMENT'

const SET_TASK_LIST = 'SET_TASK_LIST'

const defaultState = {
    taskList: [
        {
            id: 1,
            name: "Постоянные задачи",
            departamentId: 1
        },
        {
            id: 2,
            name: "Входящие задачи",
            departamentId: 1
        },
        {
            id: 3,
            name: "Задачи в процессе",
            departamentId: 1
        },
        {
            id: 4,
            name: "Исполненые задачи",
            departamentId: 1
        },
    ],
    departament: [
        {
            id: 1,
            name: "Главная"
        },
        {
            id: 2,
            name: "Отдел информационных систем"
        }
    ],
    currentDepartament: 0,
}

export default function mainReducer(state = defaultState, action) {
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

export const setCurrentDepartament = (currentDepartament) => ({ type: SET_CURRENT_DEPARTAMENT, payload: currentDepartament })

export const setDepartament = (departaments) => ({ type: SET_DEPARTAMENT, payload: departaments })
export const addDepartament = (departament) => ({ type: ADD_DEPARTAMENT, payload: departament })

export const setTaskList = (taskList) => ({ type: SET_TASK_LIST, payload: taskList })