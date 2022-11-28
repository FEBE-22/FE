import TeleDocLogo from '../assets/TeleDoc-logo.svg'
import FotoProfil from '../assets/man 2.svg'
import {bars} from 'react-icons-kit/fa/bars'
import Icon from 'react-icons-kit'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import React from 'react'

function Nav() {
  const dataLogin = useSelector(state => state.login)
  const isLogin = useSelector(state => state.login_key)
  const login = isLogin.isLogin

  return (
    <>
        {
            login == false ? (
            <>
            <input id="check-1" type="checkbox"></input>
            <nav>
                <div className="nav-content left">
                    <label><img src={TeleDocLogo} alt="teledoc" /></label>
                    <h3><span name="tele">Tele</span><span name="doc">Doc</span></h3>
                </div>
                <div className="nav-content right">
                    <ul>
                        <li className="me-5"><Link to={'/'}>Beranda</Link></li>
                        <li className="me-5"><a href="#about-us">Tentang Kami</a></li>
                        <li><Link to={'/login'}>Login</Link></li>
                    </ul>
                    <label htmlFor="check-1">
                        <div>
                            <Icon icon={bars} size={'100%'} className='nav-icon'/>
                        </div>
                    </label>
                </div>
            </nav>
            <div className="container">
                <div className="row my-3">
                    <div className="col col-10 mx-auto border-bottom py-1">
                        <Link to={'/'}>Beranda</Link>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col col-10 mx-auto border-bottom py-1">
                        <a className="text-decoration-none text-body" href="#about-us">Tentang Kami</a>
                    </div>
                </div>
                <div className="row text-center my-5">
                    <div className="col col-10 mx-auto" name="Login">
                        <Link to={'/login'}>Login</Link>
                    </div>
                </div>
            </div>
            </>
            ): 
            dataLogin.map((item) => {
                return (
                    <div key={item.email}>
                        <input id="check-1" type="checkbox"></input>
                        <nav>
                            <div className="nav-content left">
                                <label><img src={TeleDocLogo} alt="teledoc" /></label>
                                <h3><span name="tele">Tele</span><span name="doc">Doc</span></h3>
                            </div>
                            <div className="nav-content right">
                                <ul>
                                    <li className="me-5"><Link to={'/'}>Beranda</Link></li>
                                    <li className="me-5"><a href="#about-us">Tentang Kami</a></li>
                                    <Link to={'/profil'}>
                                        <li>
                                            <img src={FotoProfil}/>
                                            <span id="nama-depan">{item.namaDepan}</span>
                                        </li>
                                    </Link>
                                </ul>
                                <label htmlFor="check-1">
                                    <div>
                                        <Icon icon={bars} size={'100%'} className='nav-icon'/>
                                    </div>
                                </label>
                            </div>
                        </nav>
                        <div className="container">
                            <div className="row my-3">
                                <div className="col col-10 mx-auto border-bottom py-1">
                                    <Link to={'/'}>Beranda</Link>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col col-10 mx-auto border-bottom py-1">
                                    <a className="text-decoration-none text-body" href="#about-us">Tentang Kami</a>
                                </div>
                            </div>
                            <div className="row text-center my-5">
                                <Link to={'/profil'}>
                                    <div className="col col-10 mx-auto" name="Login">
                                        <img src={FotoProfil}/>
                                        <span id="fullname">{item.namaDepan + " " + item.namaBelakang}</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </>
  )
}

export default Nav