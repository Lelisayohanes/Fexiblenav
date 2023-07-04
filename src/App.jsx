 import './App.css'
import Clients from './Components/Clients'
import Specilized from './Components/Specilized'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Services from './Components/Services'
import HowToStart from './Components/HowToStart'
import Expertice from './Components/Expertice'
import Technologies from './Components/Technologies'
import Contuct from './Components/Contuct'
import Footer from './Components/Footer';
function App() {

  return (
    <>
    <div className='main-container'>
        <Navbar/>
        <Home/>
        <Services/>
        <HowToStart/> 
        <Expertice/>
        <Specilized/>
        <Technologies/>
        <Clients/> 
        <Contuct/>
        <Footer/>
    </div>

    </>
  )
}

export default App
