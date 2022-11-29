import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Homepage from './pages/Homepage'
import {Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Profilpage from './pages/Profilpage'
import Riwayat from './pages/Riwayat'
import React from 'react'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profil' element={<Profilpage/>}/>
        <Route path='/riwayat' element={<Riwayat/>}/>
      </Routes>
    </div>
  )
}

export default App