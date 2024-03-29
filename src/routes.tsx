import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Headboards } from './pages/headboards'
import { Contact } from './pages/contact'
import { ArmChairs } from './pages/armchairs'
import { Admin } from './pages/admin'

export default function MainRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cabeceiras' element={<Headboards />} />
      <Route path='/poltronas' element={<ArmChairs />} />
      <Route path='/contato' element={<Contact />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  )
}