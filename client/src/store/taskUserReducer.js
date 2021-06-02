const SET_TASK_USER = 'SET_TASK_USER'
const ADD_TASK_USER = 'ADD_TASK_USER'

const defaultState = {
    tasksUser: [
        {
            id: 1,
            taskId: 1,
            task: {
                id: 1,
                name: "Задание 1",
                taskListId: "1",
                progressTask: 50,
                dateEnd: "30.05.2021"
            },
            userId: 1,
            executor:  {
                id: 1,
                name: "Исполнитель 1",
            }, 
        }
    ],
}

export default function taskUserReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_TASK_USER:
            return {
                ...state,
                tasksUser: action.payload,
            }
        case ADD_TASK_USER:
            return {
                ...state,
                tasksUser: [...state.tasksUser, action.payload],
            }
        default:
            return state
    }
}

export const setTaskUser = (tasksUser) => ({type: SET_TASK_USER, payload: tasksUser})
export const addTaskUser = (taskUser) => ({ type: ADD_TASK_USER, payload: taskUser })