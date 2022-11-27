

function RiwayatSaya() {
  return (
    <div className="col-sm-10 col-md-9 col-lg-8 pe-0">
        <div className='row justify-content-center w-auto'>
            <div className='col-10 bg-white content-wrapper my-5'>
                <div className='row justify-content-center w-auto'>
                    <div className='col-12 content-header'>
                        <h2>Riwayat Kesehatan</h2>
                    </div>
                    <div className='col-10'>
                        <form>
                            <div className='kym inc'>
                                <label className='input-label'>Riwayat Penyakit</label>
                                <div className="input-wrapper" name="for-riwayat-penyakit">
                                    <textarea name="Alamat Rumah" rows={10} className='input-form-2' ></textarea>
                                </div>
                            </div>
                            <div className='list-input kym'>
                                <div className='riwayat-input kym inc'>
                                    <label className='input-label'>Berat Badan (kg)</label>
                                    <div className="input-wrapper" name="for-berat-badan">
                                        <input type="number" name="Berat Badan" className='input-form-3' required />
                                    </div>
                                </div>
                                <div className='riwayat-input kym inc'>
                                    <label className='input-label'>Tinggi Badan (cm)</label>
                                    <div className="input-wrapper" name="for-tinggi-badan">
                                        <input type="number" name="Tinggi Badan" className='input-form-3' required />
                                    </div>
                                </div>
                                <div className='riwayat-input kym inc'>
                                    <label className='input-label'>Golongan Darah</label>
                                    {/* <div className="input-wrapper" name="for-golongan-darah"> */}
                                        <select name="golongan-darah" className="input-form-4" required>
                                            <option>Silahkan Pilih</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="O">O</option>
                                            <option value="AB">AB</option>
                                        </select>
                                    {/* </div> */}
                                </div>
                            </div>
                            <div className='row justify-content-end ms-0 me-0 my-5 w-auto'>
                                <button type='submit' className='col-5 col-sm-3 btn-1'>Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RiwayatSaya