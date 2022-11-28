import { combineReducers, createStore } from "redux";
import registerReducer from "../reducer/registerReducer";
import loginReducer from "../reducer/loginReducer";
import isLoginReducer from "../reducer/isLoginReducer"

const allReducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    login_key: isLoginReducer
})

const store = createStore(allReducer)

export default store