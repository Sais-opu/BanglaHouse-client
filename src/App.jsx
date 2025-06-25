
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function App() {


  return (
    <>
      <div >

        <Navbar></Navbar>
        <div className='w-11/12 mx-auto'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
