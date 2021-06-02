import axios from 'axios'
import { API_URL } from "../config/config"
import { addTask, setTask } from '../store/taskReducer';
import { addTaskUser, setTaskUser } from '../store/taskUserReducer';

export function getTask() {
    return async dispatch => {
        try {
            let url = `${API_URL}api/task`
            const response = await axios.get(url, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            dispatch(setTask(response.data))
        } catch (e) {
            console.log(e)
        } finally {
        }
    }
}

export function createTask({ name, progressTask, dateEnd, taskListId, userId }) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/task`, {
                name,
                progressTask,
                dateEnd,
                taskListId
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            dispatch(addTask(response.data))

            dispatch(createTaskUser(userId, response.data.id))
        } catch (e) {
            console.log(e)
        }
    }
}

export function updateTask({ name, progressTask, dateEnd, taskListId, userId, taskId, id }) {
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}api/task`, {
                name,
                progressTask,
                dateEnd,
                taskListId,
                id: taskId
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            dispatch(getTaskUser())

            dispatch(updateTaskUser(userId, taskId, id))
        } catch (e) {
            console.log(e)
        }
    }
}

export function getTaskUser() {
    return async dispatch => {
        try {
            let url = `${API_URL}api/taskUser`
            const response = await axios.get(url, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            console.log(response)
            dispatch(setTaskUser(response.data.rows))
        } catch (e) {
            console.log(e.response)
        } finally {
        }
    }
}

export function createTaskUser(userId, taskId) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/taskUser`, {
                userId, taskId
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            dispatch(addTaskUser(response.data))
        } catch (e) {
            console.log(e)
            // console.log(e)
        }
    }
}

export function updateTaskUser(userId, taskId, id) {
    return async dispatch => {
        try {
            const response = await axios.put(`${API_URL}api/taskUser`, {
                userId, taskId, id
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            //! refresh
        } catch (e) {
            console.log(e)
            // console.log(e)
        }
    }
}