import React from "react"
import FotoD from "./img/doc1.jpg"

function DetailDokter() {
    return (
        <div className="wrap-dokter">
            <h3>Detail dan Jadwal Dokter</h3>
            <div className="detail-dokter">
                <div className="dd-left">
                    <img src={FotoD} alt="dokter" className="dd-img"/>
                </div>
                <div className="dd-right">
                    <p className="right-p">Nama Dokter</p>
                    <p className="right-p">Kriteria Dokter</p>
                    <p className="right-p">Pengalaman Dokter</p>
                    <p className="right-p">Harga</p>
                </div>
            </div>
            <form className="detail-info-submit">
                <h4>Detail Info</h4>
                <div className="info-text">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                </div>
                <h4>Pilih Waktu Kunjungan</h4>
                <div className="visit-check">
                    <div className="input-container">
                        <input type='radio' className="sch-check" id="day1" name="jadwal"/>
                        <div className="b-label">
                            <label for="day1">Senin 09:00-12:00</label>
                        </div>
                    </div>
                    <div className="input-container">
                        <input type='radio' className="sch-check" id="day2" name="jadwal"/>
                        <div className="b-label">
                            <label for="day2">Rabu 09:00-12:00</label>
                        </div>
                    </div>
                    <div className="input-container">
                        <input type='radio' className="sch-check" id="day3" name="jadwal"/>
                        <div className="b-label">
                            <label for="day3">Jum'at 15:00-17:00</label>
                        </div>
                    </div>
                </div>
                <div className="wrap-pesan">
                    <button type="submit" className="order-submit">Pesan</button>
                </div>
                
            </form>
        </div>
    )
}

export default DetailDokter