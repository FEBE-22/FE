import React from "react";
import CheckComp from "../components/CheckComp";
import Nav from "../components/Nav";
import './CheckoutPage.css'

function CheckoutPage() {
    return(
        <>
            <Helmet>
                <title>Checkout Pembayaran - TeleDoc</title>
            </Helmet>
            <Nav/>
            <CheckComp/>
        </>
    )
}

export default CheckoutPage