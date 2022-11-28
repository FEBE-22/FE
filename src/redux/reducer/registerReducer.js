import { EDIT_PROFIL, USER_REGISTER } from "../action/registerAction"

const initialState = [
    {
        namaDepan: 'John',
        namaBelakang: 'Cena',
        email: 'johncena@gmail.com',
        password: 'thechampishere',
        telepon: '',
        jk: '',
        tempatLahir: '',
        tanggalLahir: '',
        alamat: ''
    }
]

function registerReducer(state = initialState, action){
    switch (action.type) {
        case USER_REGISTER:
            return [...state, action.payload]
        case EDIT_PROFIL:
            const data = action.payload
            const editedArray = []
            state.map((item) => {
                if (item.email === data.email) {
                    item.namaDepan = data.namaDepan
                    item.namaBelakang = data.namaBelakang
                    item.telepon = data.telepon
                    item.jk = data.jk
                    item.tempatLahir = data.tempatLahir
                    item.tanggalLahir = data.tanggalLahir
                    item.alamat = data.alamat
                }
                editedArray.push(item)
            })
            return editedArray
        default:
            return state
    }
}

export default registerReducer