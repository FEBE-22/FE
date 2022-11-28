import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addUser } from '../redux/action/registerAction'

function FormRegister() {
  const dispatch = useDispatch()
  const [namaDepan, setNamaDepan] = useState('')
  const [namaBelakang, setNamaBelakang] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const validasiHuruf = /^[a-zA-Z ]+$/;

  function handleRegister(e){
    e.preventDefault()

    if (namaDepan.match(validasiHuruf) && namaBelakang.match(validasiHuruf)) {
        if (password.length >= 6){
            if (password == confirmPassword){
                const newDataUser = {
                    namaDepan: namaDepan,
                    namaBelakang: namaBelakang,
                    email: email,
                    password: password,
                    telepon: '',
                    jk: '',
                    tempatLahir: '',
                    tanggalLahir: '',
                    alamat: ''
                }
                
                alert("Terima kasih sudah mendaftar, silahkan login")
                
                setNamaDepan('')
                setNamaBelakang('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')

                dispatch(addUser(newDataUser))
            }else{
                alert("Password dan Konfirmasi Password tidak sesuai")
            }
        }else{
            alert("Format password tidak sesuai")
        }
    }else{
        alert("Format nama wajib huruf!")
    }
  }

  return (
    <>
        <header className='register-header'>
            <div>
                <p>Selamat Datang di <span name="tele">Tele</span><span name="doc">Doc</span></p>
            </div>
        </header>

        <main className='register-main'>
            <div>
                <div>
                    <div>
                        <h5>Silahkan Register Di Sini</h5>
                    </div>
                    <form id="frm" onSubmit={handleRegister}>
                        <div className="form-box" id="nama-depan-belakang">
                            <div>
                                <label>Nama Depan</label>
                                <div className="input-wrapper" name="for-nama-depan">
                                    <input type="text" name="Nama Depan" className="input-form-nama" id="namadepan" value={namaDepan} onChange={(e) => setNamaDepan(e.target.value)} required />
                                </div>
                            </div>
                            <div id="nama-belakang">
                                <label>Nama Belakang</label>
                                <div className="input-wrapper" name="for-nama-belakang">
                                    <input type="text" name="Nama Belakang" className="input-form-nama" id="namabelakang" value={namaBelakang} onChange={(e) => setNamaBelakang(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                        <div className="form-box">
                            <label>Email</label>
                            <div className="input-wrapper">
                                <input type="email" name="Email" className="input-form" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                        </div>
                        <div className="form-box">
                            <label>Password</label>
                            <div className="input-wrapper">
                                <input type="password" name="Password" className="input-form" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <span>Minimal 6 karakter</span>
                        </div>
                        <div className="form-box">
                            <label>Konfirmasi Password</label>
                            <div className="input-wrapper">
                                <input type="password" name="Konfirmasi Password" className="input-form" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                            </div>
                        </div>
                        <div className="form-box">
                            <input type="checkbox" required />
                            <span>Saya setuju dengan syarat dan ketentuan</span>
                        </div>
                        <button type="submit">Register</button>
                    </form>
                    <p>Sudah Punya Akun ? <Link to={'/login'}><span name='login'>Login</span></Link> Di Sini</p>
                </div>
            </div>
        </main>
    </>
  )
}

export default FormRegister