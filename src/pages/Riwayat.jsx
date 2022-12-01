import Nav from "../components/Nav"
import ProfilMenu from "../components/ProfilMenu"
import RiwayatSaya from "../components/RiwayatSaya"
import './Profilpage.css'

function Riwayat() {
  return (
    <>
      <Nav/>
      <section className='profil'>
        <div className="row w-auto">
            <ProfilMenu style2={'#e0e3e7'} />
            <RiwayatSaya/>
        </div>
      </section>
    </>
  )
}

export default Riwayat