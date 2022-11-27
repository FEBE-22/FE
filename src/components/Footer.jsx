import {Icon} from 'react-icons-kit'
import {home} from 'react-icons-kit/icomoon/home'
import {phone} from 'react-icons-kit/fa/phone'
import {mail} from 'react-icons-kit/entypo/mail'
import {instagram} from 'react-icons-kit/fa/instagram'
import { useState } from 'react'
import React from 'react'

function Footer() {
    const [namaLengkap, setNamaLengkap] = useState('')
    const [emailKeluhan, setEmailKeluhan] = useState('')
    const [keluhan, setKeluhan] = useState('')
    const [dataKeluhan,setDataKeluhan] = useState([])

    let dataKeluhanString = JSON.stringify(dataKeluhan)
    localStorage.setItem('keluhanKey', dataKeluhanString)

    function handleSubmitKeluhan(e) {
        e.preventDefault()
        const newKeluhan = {
            namalengkap: namaLengkap,
            email: emailKeluhan,
            keluhan: keluhan
        }

        setDataKeluhan([...dataKeluhan, newKeluhan])

        setNamaLengkap('')
        setEmailKeluhan('')
        setKeluhan('')

        alert('Keluhan Sudah Dikirim, Terima Kasih Atas Keluhan Anda')
    }

  return (
    <footer>
        <div id="footer-no-1">
            <h1>Contact Us</h1>
            <table>
                <tbody>
                    <tr>
                        <td className="contact-i"><Icon icon={home} className="footer-icon" size={'100%'} /></td>
                        <td className="contact-p">Jalan Kemayoran Baru 54 Jakarta 66353</td>
                    </tr>
                    <tr>
                        <td className="contact-i"><Icon icon={phone} className="footer-icon" size={'100%'} /></td>
                        <td className="contact-p">(0539) 9876987</td>
                    </tr>
                    <tr>
                        <td className="contact-i"><Icon icon={mail} className="footer-icon" size={'100%'} /></td>
                        <td className="contact-p">tele@docmail.com</td>
                    </tr>
                    <tr>
                        <td className="contact-i"><Icon icon={instagram} className="footer-icon" size={'100%'} /></td>
                        <td className="contact-p">@teledoc</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="footer-no-2">
            <h3>Anda memiliki keluhan saat menggunakan website ini ?</h3>
            <form id="frm" onSubmit={handleSubmitKeluhan}>
                <div>
                    <label>Nama Lengkap</label>
                    <div className="input-wrapper">
                        <input type="text" id="nama-lengkap" value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <div className="input-wrapper">
                        <input type="email" id="email" value={emailKeluhan} onChange={(e) => setEmailKeluhan(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label>Keluhan</label>
                    <div className="input-wrapper">
                        <textarea name="keluhan" id="keluhan" value={keluhan} onChange={(e) => setKeluhan(e.target.value)} ></textarea>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </footer>
  )
}

export default Footer