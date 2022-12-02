import './Login.css'
import LoginForm from '../components/LoginForm'
import Nav from '../components/Nav'
import React from 'react'

function Login() {
    return(
        <>
            <Nav beranda={'Beranda'} listdokter={'List Dokter'} log={'Login'}/>
            <LoginForm/>
        </>
        
    )
}

export default Login