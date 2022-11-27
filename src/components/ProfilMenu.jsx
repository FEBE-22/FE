import { FaUserMd, FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { BiPlusMedical } from "react-icons/bi";

function ProfilMenu({style1, style2, style3}) {
  return (
    <div className="col-sm-2 col-md-3 col-lg-4 bg-white pe-0">
        <div className='profil-left'>
            <div className='list-menu-phone'>
                <div className='my-4 profil-menu' style={{backgroundColor: style1}}>
                    <div className="row align-items-center justify-content-center">
                        <div className='col-lg-1 w-auto m-auto'><FaUser className='profil-icon' size={'100%'}/></div>
                        <div className='col loh'><span className='profil-menu-title'>Profil Saya</span></div>
                    </div>
                </div>
                <div className='my-4 border border-0 profil-menu' style={{backgroundColor: style2}}>
                    <div className="row align-items-center justify-content-center">
                        <div className='col-lg-1 w-auto m-auto'><BiPlusMedical className='profil-icon' size={'100%'}/></div>
                        <div className='col loh'><span className='profil-menu-title'>Riwayat Kesehatan</span></div>
                    </div>
                </div>
                <div className='my-4 border border-0 profil-menu' style={{backgroundColor: style3}}>
                    <div className="row align-items-center justify-content-center">
                        <div className='col-lg-1 w-auto m-auto'><FaUserMd className='profil-icon' size={'100%'}/></div>
                        <div className='col loh'><span className='profil-menu-title'>Dokter Favorit</span></div>
                    </div>
                </div>
                <div className='my-4 profil-rule'>
                    <div>
                        <div className='bg-black bg-opacity-10 horizontal-rule'></div>
                    </div>
                </div>
                <div className='my-4 border border-0 profil-menu'>
                    <div className="row align-items-center justify-content-center">
                        <div className='col-lg-1 w-auto'><IoLogOut className='profil-icon' size={'100%'}/></div>
                        <div className='col loh'><span className='profil-menu-title'>Keluar</span></div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilMenu