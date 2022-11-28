
const initialState = []

function loginReducer(state = initialState, action){
    switch(action.type) {
        case 'USER_LOGIN':
            return [action.payload]
        default:
            return state
    }
}

export default loginReducer