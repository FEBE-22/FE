import React from 'react'
import DocPhoto from '../assets/dalton-doctor.svg'
import { FaRegHospital, FaTrashAlt } from "react-icons/fa";
import { RiStethoscopeLine } from "react-icons/ri";
import { BiLike, BiBriefcaseAlt } from "react-icons/bi";

function Listdokter() {
  return (
    <>
        <div className='row justify-content-center mt-5'>
            <div className='col-10 g-0 text-center text-md-start'>
                <h1 className='listdoc-title'>Rekomendasi Dokter</h1>
                <h4 className='listdoc-sub-title'>Buat janji dengan dokter plihan</h4>
            </div>
        </div>
        <div className='row justify-content-center mt-4'>
            <div className='col-9'>
                <div className='row justify-content-center justify-content-lg-between flex-wrap w-auto'>
                    <div className='col-10 col-lg-5 mb-5 border border-dark rounded'>
                        <div className='row flex-wrap ms-0 me-0 mt-4 w-auto'>
                            <div className='col-12 col-sm-4 align-self-center order-0 order-sm-0 text-center'>
                                <img src={DocPhoto} alt="Doctor-Photo" className='doc-photo' />
                            </div>
                            <div className='col'>
                                <div className='row h-100'>
                                    <div className='col-12'>
                                        <div className='row w-auto'><span className='listdoc-name'>Dr. Andry Wahyudi A. Sp.P</span></div>
                                    </div>
                                    <div className='col-12 align-self-center'>
                                        <div className='row align-items-center justify-content-center w-auto'>
                                            <div className='col-1 w-auto'><RiStethoscopeLine className='listdoc-icon-1' size={'100%'}/></div>
                                            <div className='col p-0'><span className='listdoc-detail-1'>Sp. Penyakit Paru</span></div>
                                        </div>
                                    </div>
                                    <div className='col-12 align-self-end'>
                                        <div className='row '>
                                            <div className='col'>
                                                <div className='row align-items-center justify-content-center w-auto'>
                                                    <div className='col-1 w-auto'><BiLike className='listdoc-icon-2' size={'100%'}/></div>
                                                    <div className='col p-0'><span className='listdoc-detail-2'>100%</span></div>
                                                </div>
                                            </div>
                                            <div className='col pe-0'>
                                                <div className='row align-items-center justify-content-center w-auto'>
                                                    <div className='col-1 w-auto'><BiBriefcaseAlt className='listdoc-icon-2' size={'100%'}/></div>
                                                    <div className='col p-0'><span className='listdoc-detail-2'>12 tahun</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-end ms-0 me-0 my-4 w-auto'>
                            <button type='submit' className='col-4 col-sm-3 btn-2'>Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Listdokter