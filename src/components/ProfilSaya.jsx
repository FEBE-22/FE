

function ProfilSaya() {
  return (
    <div className="col-sm-10 col-md-9 col-lg-8 pe-0">
        <div className='row justify-content-center w-auto'>
            <div className='col-10 bg-white content-wrapper my-5'>
                <div className='row justify-content-center w-auto'>
                    <div className='col-12 content-header'>
                        <h2>Profil Saya</h2>
                    </div>
                    <div className='col-10'>
                        <form>
                            <div className='list-input kym'>
                                <div className='list-input-width-1 inc'>
                                    <label className='input-label'>Nama Depan</label>
                                    <div className="input-wrapper" name="for-nama-depan">
                                        <input type="text" name="Nama Depan" className='input-form-1' required />
                                    </div>
                                </div>
                                <div className='list-input-width-1 inc'>
                                    <label className='input-label'>Nama Belakang</label>
                                    <div className="input-wrapper" name="for-nama-belakang">
                                        <input type="text" name="Nama Belakang" className='input-form-1' required />
                                    </div>
                                </div>
                            </div>
                            <div className='list-input kym'>
                                <div className='list-input-width-1 inc'>
                                    <label className='input-label'>No. Telepon</label>
                                    <div className="input-wrapper" name="for-no-telepon">
                                        <input type="text" name="No Telepon" className='input-form-1' />
                                    </div>
                                </div>
                                <div className='list-input-width-1 inc'>
                                    <label className='input-label'>Jenis Kelamin</label>
                                    <div className='input-radio'>
                                        <div className='input-radio-value'>
                                            <input type="radio" id="laki" name="jenis_kelamin" value="Laki-laki" />
                                            <label htmlFor="laki" className='ms-1 jk'>Laki-laki</label>
                                        </div>
                                        <div className='ms-3 input-radio-value'>
                                            <input type="radio" id="perempuan" name="jenis_kelamin" value="Perempuan" />
                                            <label htmlFor="perempuan" className='ms-1 jk'>Perempuan</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='list-input kym inc'>
                                <div className='list-input-width-1'>
                                    <label className='input-label'>Tempat Lahir</label>
                                    <div className="input-wrapper" name="for-tempat-lahir">
                                        <input type="text" name="Tempat Lahir" className='input-form-1' />
                                    </div>
                                </div>
                                <div className='list-input-width-1 inc'>
                                    <label className='input-label'>Tanggal Lahir</label>
                                    <div className="input-wrapper" name="for-tanggal-lahir">
                                        <input type="date" name="Tanggal Lahir" className='input-form-1' />
                                    </div>
                                </div>
                            </div>
                            <div className='kym inc'>
                                <label className='input-label'>Alamat Email</label>
                                <div className="input-wrapper" name="for-alamat-email">
                                    <input type="email" name="Alamat Email" className='input-form-2' readOnly required/>
                                </div>
                            </div>
                            <div className='kym inc'>
                                <label className='input-label'>Alamat Rumah</label>
                                <div className="input-wrapper" name="for-alamat-rumah">
                                    <textarea name="Alamat Rumah" rows={5} className='input-form-2' ></textarea>
                                </div>
                            </div>
                            <div className='row justify-content-center ms-0 me-0 my-5 w-auto'>
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