export const USER_REGISTER = 'USER_REGISTER'
export const EDIT_PROFIL = 'EDIT_PROFIL'

export function addUser(dataUser){
    return{
        type: USER_REGISTER,
        payload: dataUser
    }
}

export function editProfil(newData){
    return{
        type: EDIT_PROFIL,
        payload: newData
    }
}