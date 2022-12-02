import React from 'react'
import Admin from '../components/Admin'
import Nav from '../components/Nav'
import './AdminPage.css'

function AdminPage() {
  return (
    <>
      <Helmet>
            <title>Admin - TeleDoc</title>
        </Helmet>
        <Nav style1={'hidden'}/>
        <Admin/>
    </>
  )
}

export default AdminPage