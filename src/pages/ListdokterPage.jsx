import React from 'react'
import './ListdokterPage.css'
import Listdokter from '../components/Listdokter'
import Nav from '../components/Nav'
import Search from '../components/Search'

function ListdokterPage() {
  return (
    <>
        <Nav/>
        <Search/>
        <Listdokter/>
    </>
  )
}

export default ListdokterPage