import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { editProfil } from "../redux/action/registerAction";
import React from 'react'

function ProfilSaya() {
  const dispatch = useDispatch()
  const dataLogin = useSelector(state => state.login)
  const dataUser = useSelector(state => state.register)
  const dataUserLogin = dataUser.filter((item) => item.email == dataLogin[0].email)
  const [namaDepan, setNamaDepan] = useState('')
  const [namaBelakang, setNamaBelakang] = useState('')
  const [telepon,setTelepon]= useState('')
  const [jenisKelamin, setJenisKelamin] = useState('')
  const [tempatLahir, setTempatLahir] = useState('')
  const [tanggalLahir, setTanggalLahir] = useState('')
  const [email,setEmail]= useState('')
  const [alamat, setAlamat] = useState('')

  useEffect(() => {
    dataUserLogin.map((item) => {
        setNamaDepan(item.namaDepan)
        setNamaBelakang(item.namaBelakang)
        setTelepon(item.telepon)
        setJenisKelamin(item.jk)
        setTempatLahir(item.tempatLahir)
        setTanggalLahir(item.tanggalLahir)
        setEmail(item.email)
        setAlamat(item.alamat)
    })
  }, [])

  function handleEditProfil(e){
    e.preventDefault()

    const newData = {
        namaDepan: namaDepan,
        namaBelakang: namaBelakang,
        email: email,
        telepon: telepon,
        jk: jenisKelamin,
        tempatLahir: tempatLahir,
        tanggalLahir: tanggalLahir,
        alamat: alamat
    }

    alert('Profil Berhasil Diubah')

    dispatch(editProfil(newData))
  }

  return (
    <div className="col-md-8">
        <div className='row justify-content-center'>
            <div className='col-10 bg-white content-wrapper my-5'>
                <div className='row justify-content-center'>
                    <div className='col-12 content-header'>
                        <h2>Profil Saya</h2>
                    </div>
                    <div className='col-10'>
                        <form onSubmit={handleEditProfil}>
                            <div className='list-input kym'>
                                <div className='list-input-width inc'>
                                    <label className='input-label'>Nama Depan</label>
                                    <div className="input-wrapper" name="for-nama-depan">
                                        <input type="text" name="Nama Depan" className='input-form-1' value={namaDepan||""} onChange={(e) => setNamaDepan(e.target.value)} required />
                                    </div>
                                </div>
                                <div className='list-input-width inc'>
                                    <label className='input-label'>Nama Belakang</label>
                                    <div className="input-wrapper" name="for-nama-belakang">
                                        <input type="text" name="Nama Belakang" className='input-form-1' value={namaBelakang||""} onChange={(e) => setNamaBelakang(e.target.value)} required />
                                    </div>
                                </div>
                            </div>
                            <div className='list-input kym'>
                                <div className='list-input-width inc'>
                                    <label className='input-label'>No. Telepon</label>
                                    <div className="input-wrapper" name="for-no-telepon">
                                        <input type="text" name="No Telepon" className='input-form-1' value={telepon} onChange={(e) => setTelepon(e.target.value)} />
                                    </div>
                                </div>
                                <div className='list-input-width inc'>
                                    <label className='input-label'>Jenis Kelamin</label>
                                    <div className='input-radio'>
                                        <div className='input-radio-value'>
                                            <input type="radio" id="laki" name="jenis_kelamin" value="Laki-laki" onClick={(e) => setJenisKelamin(e.target.value)} />
                                            <label htmlFor="laki" className='ms-1 jk'>Laki-laki</label>
                                        </div>
                                        <div className='ms-3 input-radio-value'>
                                            <input type="radio" id="perempuan" name="jenis_kelamin" value="Perempuan" onClick={(e) => setJenisKelamin(e.target.value)} />
                                            <label htmlFor="perempuan" className='ms-1 jk'>Perempuan</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='list-input kym inc'>
                                <div className='list-input-width'>
                                    <label className='input-label'>Tempat Lahir</label>
                                    <div className="input-wrapper" name="for-tempat-lahir">
                                        <input type="text" name="Tempat Lahir" className='input-form-1' value={tempatLahir} onChange={(e) => setTempatLahir(e.target.value)} />
                                    </div>
                                </div>
                                <div className='list-input-width inc'>
                                    <label className='input-label'>Tanggal Lahir</label>
                                    <div className="input-wrapper" name="for-tanggal-lahir">
                                        <input type="date" name="Tanggal Lahir" className='input-form-1' value={tanggalLahir} onChange={(e) => setTanggalLahir(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className='kym inc'>
                                <label className='input-label'>Alamat Email</label>
                                <div className="input-wrapper" name="for-alamat-email">
                                    <input type="email" name="Alamat Email" className='input-form-2' value={email||""} onChange={(e) => setEmail(e.target.value)} readOnly required/>
                                </div>
                            </div>
                            <div className='kym inc'>
                                <label className='input-label'>Alamat Rumah</label>
                                <div className="input-wrapper" name="for-alamat-rumah">
                                    <textarea name="Alamat Rumah" rows={5} className='input-form-2' value={alamat} onChange={(e) => setAlamat(e.target.value)}></textarea>
                                </div>
                            </div>
                            <div className='row justify-content-center my-5'>
                                <button type='submit' className='col-5 btn-1'>Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilSaya