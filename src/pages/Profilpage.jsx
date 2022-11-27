import Nav from '../components/Nav'
import ProfilMenu from '../components/ProfilMenu'
import ProfilSaya from '../components/ProfilSaya'
import './Profilpage.css'

function Profilpage() {
  return (
    <>
      <Nav/>
      <section className='profil'>
        <div className="row w-auto">
            <ProfilMenu style1={'#e0e3e7'} />
            <ProfilSaya/>
        </div>
      </section>
    </>
  )
}

export default Profilpage