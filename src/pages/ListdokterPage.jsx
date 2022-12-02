import React from 'react'
import './ListdokterPage.css'
import Listdokter from '../components/Listdokter'
import Nav from '../components/Nav'

function ListdokterPage() {
  return (
    <>
        <Nav beranda={'Beranda'} listdokter={'List Dokter'}/>
        <Listdokter/>
    </>
  )
}

export default ListdokterPage