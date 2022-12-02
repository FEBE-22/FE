import './Register.css'
import FormRegister from '../components/FormRegister'
import Nav from '../components/Nav'
import React from 'react'

function Register() {
  return (
    <>
        <Nav beranda={'Beranda'} listdokter={'List Dokter'} log={'Login'}/>
        <FormRegister/>
    </>
  )
}

export default Register