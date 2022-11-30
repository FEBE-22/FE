import TeleDocLogo from '../assets/TeleDoc-logo.svg'

function Nav() {
  return (
    <>
        <nav>
            <div className="nav-content left">
                <label><img src={TeleDocLogo} alt="teledoc" /></label>
                <h3><span name="tele">Tele</span><span name="doc">Doc</span></h3>
            </div>
            <div className="nav-content right">
                <ul>
                    <li className="me-5"><a href="index.html">Beranda</a></li>
                    <li className="me-5"><a href="#about-us">Tentang Kami</a></li>
                    <li><a href="login.html">Login</a></li>
                </ul>
                <label htmlFor="check-1">
                    <div>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </label>
            </div>
        </nav>
        <div className="container">
            <div className="row my-3">
                <div className="col col-10 mx-auto border-bottom py-1">
                    <a className="text-decoration-none text-body" href="index.html">Beranda</a>
                </div>
            </div>
            <div className="row my-3">
                <div className="col col-10 mx-auto border-bottom py-1">
                    <a className="text-decoration-none text-body" href="#about-us">Tentang Kami</a>
                </div>
            </div>
            <div className="row text-center my-5">
                <div className="col col-10 mx-auto" name="Login">
                    <a className="text-decoration-none text-white" href="login.html">Login</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav