import { notification } from 'antd'
import axios from 'axios'
import { API_URL } from '../config/config'
import { setCurrentUser, setIsRegister } from '../store/authReducer'
import { getUser } from './mainAction'

export function registrationUser({ firstName, lastName, patronymic, email, password, departamentId }) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/user`, {
                firstName, lastName, patronymic, email, password, departamentId
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            if (response.data.error) {
                notification.error( {
                    message: 'Ошибка регистрации',
                    description:
                    response.data.error,
                  })
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(setIsRegister(true))
                dispatch(getUser())
                notification.success( {
                    message: 'Успешная регистрация',
                    description:
                    `Успешно зарегистрирован - ${response.data.email}`,
                  })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export function authUser({ email, password }) {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URL}api/user/login`, {
                email, password
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            if (response.data.error) {
                notification.error( {
                    message: 'Ошибка авторизации',
                    description:
                    response.data.error,
                  })
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(setIsRegister(true))
                localStorage.setItem('token', response.data.token)
                notification.success( {
                    message: 'Успешная регистрация',
                    description:
                    `Успешно зарегистрирован - ${response.data.user.email}`,
                  })
            }
        } catch (e) {
            console.log(e)
        }
    }
}

export function currentUser() {
    return async dispatch => {
        try {
                let response = await axios.get(`${API_URL}api/user/auth`,
                    {
                        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                    })       
            if (response.data.error) {
                notification.error( {
                    message: 'Ошибка авторизации',
                    description:
                    response.data.error,
                  })
            } else {
                dispatch(setCurrentUser(response.data.user))
                dispatch(setIsRegister(true))
                notification.success( {
                    message: 'Успешная регистрация',
                    description:
                    `Успешно зарегистрирован - ${response.data.user.email}`,
                  })
            }
        } catch (e) {
            console.log(e)
        }
    }
}