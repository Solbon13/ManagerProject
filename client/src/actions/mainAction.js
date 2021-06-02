import axios from 'axios'
import { API_URL } from "../config/config"
import { addDepartament, setDepartament, setTaskList } from '../store/mainReducer';
import { setUsers } from '../store/userReducer';

export function getDepartament() {
    return async dispatch => {
        try {
            let url = `${API_URL}api/departament`
            const response = await axios.get(url, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            dispatch(setDepartament(response.data))
        } catch (e) {
            console.log(e)
        } finally {
        }
    }
}

export function getUser() {
    return async dispatch => {
        try {
            let url = `${API_URL}api/user`
            const response = await axios.get(url, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            dispatch(setUsers(response.data))
        } catch (e) {
            console.log(e)
        } finally {
        }
    }
}

export function createDepartament({ name }) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/departament`, {
                name,
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            dispatch(addDepartament(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export function getTaskList() {
    return async dispatch => {
        try {
            let url = `${API_URL}api/taskList`
            const response = await axios.get(url, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            dispatch(setTaskList(response.data))
        } catch (e) {
            console.log(e)
        } finally {
        }
    }
}