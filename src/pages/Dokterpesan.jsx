import './Dokterpesan.css'
import DetailDokter from '../components/DetailDokter'
import Nav from '../components/Nav'
import React from 'react'


function Dokterpesan() {
    return(
        <>
            <Helmet>
                <title>Pesan Dokter - TeleDoc</title>
            </Helmet>
            <Nav/>
            <DetailDokter/>
        </>

    )
}

export default Dokterpesan