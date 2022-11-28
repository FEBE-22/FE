import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLogged } from '../redux/action/loginAction'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { loggeduser } from '../redux/action/loginmasukAction'

function LoginForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerAcc = useSelector(state => state.register)
    const key_log = useSelector(state => state.login_key)
    const acc = useSelector(state => state.login)

    
 
    function handleLogin(e) {
        for (let i = 0; i <= registerAcc.length - 1; i++){
            
            if(email == registerAcc[i].email && password == registerAcc[i].password) {
                
                
                if (true){
                    alert('Login Berhasil')
                    dispatch(userLogged(registerAcc[i]))
                    dispatch(loggeduser(true))
                    console.log("Login berhasil") 
                    navigate('/')
                    break

                }else{
                    console.log("Login berhasil")
                    alert('Login Berhasil')
    
                }
                
            }if(i == registerAcc.length - 1){
                alert("Incorrect email or password.")
                
    
    
            }else{
    
            }
        }
    }


    return (
        <section>
        
        <div id="login-wrap">
            <div id="login-box">
                <form id="btn" onSubmit={handleLogin}>
                    <h5>Sudah Mempunyai Akun?</h5>
                    <h5>Silahkan Login</h5>
                    <div className="form-box">
                        <p>Email<span> *</span></p>
                        <div className="input-wrapper" name="for-nama-belakang">
                            <input type="email" id="email" className="form-input" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        
                    </div>
                    <div className="form-box">
                        <p>Password<span> *</span></p>
                        <div className="input-wrapper" name="for-nama-belakang">
                            <input type="password" id="password" className="form-input" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        
                    </div>
                    
                    <div className="one-line">
                        <div id="wrap-ingat">
                            <input type="checkbox" id="ingat" className="wr" name="ingat"/>
                            <p>Ingat Saya</p>
                        </div>
                        
                        <p><a href="" className="press">Lupa Password?</a></p>
                    </div>
                    <div className="log">
                        <button type="submit" className="log-button">Login</button>
                    </div>
                    <h6>Belum Mempunyai Akun? <span><Link to='/register' className="press">Register Disini</Link></span></h6>
                </form>
                
            </div>
        </div>
    </section>
    )
}

export default LoginForm