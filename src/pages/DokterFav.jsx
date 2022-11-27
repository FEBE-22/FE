import Nav from "../components/Nav"
import ProfilMenu from "../components/ProfilMenu"
import DokterSaya from "../components/DokterSaya"
import './Profilpage.css'

function DokterFav() {
  return (
    <>
      <Nav/>
      <section className='profil'>
        <div className="row w-auto">
            <ProfilMenu style3={'#e0e3e7'} />
            <DokterSaya/>
        </div>
      </section>
    </>
  )
}

export default DokterFav