import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"

import taskReducer from "./taskReducer";
import mainReducer from "./mainReducer";
import taskUserReducer from "./taskUserReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

let rootReducer = combineReducers({
    user: userReducer,
    main: mainReducer,
    task: taskReducer,
    tasksUser: taskUserReducer,
    auth: authReducer
})

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.store = store;

export default store