import './App.css'
import Listdokter from './pages/Listdokter'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
  <div className="App">
    <Routes>
      <Route path='/listdokter' element={<Listdokter/>}/>
    </Routes>
  </div>
  
  )
}

export default App