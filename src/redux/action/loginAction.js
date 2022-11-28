export function userLogged(dataLogged){
    return{
        type: 'USER_LOGIN',
        payload: dataLogged
    }
}