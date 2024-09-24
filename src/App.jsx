import './App.css'

// import Navbar from './Components/NavBar/Navbar'
import Home from './pages/Home/Home'
import Accessories from './pages/Accessories/Accessories'
import Apparel from './pages/Apparel/Apparel'
import Collections from './pages/Collections/Collections'
import Kimonos from './pages/Kimonos/Kimonos'
import NewArrivals from './pages/NewArrivals/NewArrivals'
import NoGi from './pages/NoGi/NoGi'
import Login from './pages/Login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Product from './pages/Product/Product'

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/NewArrivals' element={<NewArrivals />}></Route>
            <Route path='/Kimonos' element={<Kimonos />}></Route>
            <Route path='/NoGi' element={<NoGi />}></Route>
            <Route path='/Apparel' element={<Apparel />}></Route>
            <Route path='/Accessories' element={<Accessories />}></Route>
            <Route path='/Collections' element={<Collections />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Product' element={<Product />}></Route>
          </Routes> 
        </div>
      </Router>
    </>
  )
}

export default App
