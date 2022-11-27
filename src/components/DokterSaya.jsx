import ListDokterReport from '../assets/report 1.svg'
import DoctorPhoto from '../assets/dalton-doctor.svg'
import { FaRegHospital, FaTrashAlt } from "react-icons/fa";
import { RiStethoscopeLine } from "react-icons/ri";
import { BiLike, BiBriefcaseAlt } from "react-icons/bi";

function DokterSaya() {
  return (
    // <div className="col-sm-10 col-md-9 col-lg-8 pe-0">
    //     <div className='row justify-content-center w-auto'>
    //         <div className='col-10 bg-white content-wrapper my-5'>
    //             <div className='row justify-content-center w-auto'>
    //                 <div className='col-12 content-header'>
    //                     <h2>Dokter Favorit</h2>
    //                 </div>
    //                 <div className='col-10'>
    //                     <div>
    //                         <div className='row justify-content-center ms-0 me-0 my-5 w-auto'>
    //                             <img src={ListDokterReport} alt="List Dokter Report" className='col-6 col-sm-5' />
    //                         </div>
    //                         <div className='row ms-0 me-0 my-2 w-auto text-center'>
    //                             <span className='no-doctor'>Belum Terdapat Dokter Favorit</span>
    //                         </div>
    //                         <div className='row ms-0 me-0 my-2 w-auto text-center'>
    //                             <span className='please-find-doctor'>Silahkan cari dokter sesuai kebutuhan</span>
    //                         </div>
    //                         <div className='row justify-content-center ms-0 me-0 my-5 w-auto'>
    //                             <button type='submit' className='col-5 col-sm-5 btn-1'>Cari Dokter</button>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className="col-sm-10 col-md-9 col-lg-8 pe-0">
        <div className='row justify-content-center w-auto'>
            <div className='col-10 bg-white content-wrapper my-5'>
                <div className='row justify-content-center w-auto'>
                    <div className='col-12 content-header'>
                        <h2>Dokter Favorit</h2>
                    </div>
                    <div className='col-11 mb-4'>
                        <div className='border border-dark rounded p-4'>
                            <div className='row flex-wrap ms-0 me-0 w-auto'>
                                <div className='col-10 col-sm-4 align-self-center order-0 order-sm-0 text-center'>
                                    <img src={DoctorPhoto} alt="Doctor-Photo" className='doc-photo' />
                                </div>
                                <div className='col order-2 order-sm-1'>
                                    <div className='row h-100'>
                                        <div className='col-12'>
                                            <div className='row w-auto'><span className='docfav-name'>Dr. Andry Wahyudi A. Sp.P</span></div>
                                        </div>
                                        <div className='col-12 align-self-center'>
                                                <div className='row align-items-center justify-content-center my-1 w-auto'>
                                                    <div className='col-1 w-auto'><RiStethoscopeLine className='docfav-icon-1' size={'100%'}/></div>
                                                    <div className='col p-0'><span className='docfav-detail-1'>Sp. Penyakit Paru</span></div>
                                                </div>
                                                <div className='row align-items-center justify-content-center my-1 w-auto'>
                                                    <div className='col-1 w-auto'><FaRegHospital className='docfav-icon-1' size={'100%'}/></div>
                                                    <div className='col p-0'><span className='docfav-detail-1'>Rumah Sakit Bhakti Negara</span></div>
                                                </div>
                                        </div>
                                        <div className='col-12 align-self-end'>
                                                <div className='row '>
                                                    <div className='col'>
                                                        <div className='row align-items-center justify-content-center w-auto'>
                                                            <div className='col-1 w-auto'><BiLike className='docfav-icon-2' size={'100%'}/></div>
                                                            <div className='col p-0'><span className='docfav-detail-2'>100%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className='col pe-0'>
                                                        <div className='row align-items-center justify-content-center w-auto'>
                                                            <div className='col-1 w-auto'><BiBriefcaseAlt className='docfav-icon-2' size={'100%'}/></div>
                                                            <div className='col p-0'><span className='docfav-detail-2'>12 tahun</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2 col-sm-1 order-1 order-sm-2 text-center'>
                                    <FaTrashAlt className='docfav-icon-3' size={'!00%'}/>
                                </div>
                            </div>
                            <div className='row justify-content-end ms-0 me-0 mt-4 w-auto'>
                                <button type='submit' className='col-4 col-sm-3 btn-2'>Book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DokterSaya