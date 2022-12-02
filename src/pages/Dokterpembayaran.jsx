import React from "react";
import Nav from "../components/Nav";
import Bayar from "../components/Bayar"
import './Dokterpembayaran.css'

function Dokterpembayaran(){
    return (
        <>
            <Helmet>
                <title>Pembayaran - TeleDoc</title>
            </Helmet>
            <Nav/>
            <Bayar/>
        </>
        
    )
}


export default Dokterpembayaran
