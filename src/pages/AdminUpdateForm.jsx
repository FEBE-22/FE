import React from 'react'
import Nav from '../components/Nav'
import UpdateForm from '../components/UpdateForm'
import './AdminPage.css'

function AdminUpdateForm() {
  return (
    <>
        <Helmet>
            <title>Update Dokter - TeleDoc</title>
        </Helmet>
        <Nav style1={'hidden'}/>
        <UpdateForm/>
    </>
  )
}

export default AdminUpdateForm