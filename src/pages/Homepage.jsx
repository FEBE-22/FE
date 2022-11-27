import Header from '../components/Header'
import Nav from '../components/Nav'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import '../pages/Homepage.css'
import Copyright from '../components/Copyright'
import { useSelector } from 'react-redux'
import React from 'react'

function Homepage() {
  const isLogin = useSelector(state => state.login_key)
  const login = isLogin.isLogin

  return (
    <>
        <Nav/>
        {
          login == false ?  <Header link={"/login"} /> :  <Header link={"/listdokter"} />
        }
        <AboutUs/>
        <Footer/>
        <Copyright/>
    </>
  )
}

export default Homepage