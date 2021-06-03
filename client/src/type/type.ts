export type UserType = {
    id: number,
    firstName: string,
    lastName: string,
    patronymic: string,
    email: string,
    password: string,
    departamentId: number,
    role: string,
    createAt:  Date,
    updateAt:  Date,
}

export type authStateType = {
    currentUser: null | UserType,
    isRegister: boolean
}

export interface actionAuthType {
    type: string
    payload: any
}

export type TaskListType = {
    id: number,
    name: string
}

export type DepartamentType = {
    id: number,
    name: string
}

export type mainStateType = {
    taskList: Array<TaskListType>,
    departament: Array<DepartamentType>,
    currentDepartament: number
}

export type TaskType = {
    id: number,
    name: string,
    progressTask: string,
    dateEnd: string,
}

export type TaskStateType = {
    task: Array<TaskType>,
}