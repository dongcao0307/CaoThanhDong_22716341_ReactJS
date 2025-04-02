import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
function App() {
  return (
    <div>
      <div class="container">
        <div class="header"><Header/></div>
        <div class="menu">
            <Navbar/>
        </div>
        <div class="content">
          <MainContent/>
      </div>
      <div class="footer"> <Footer/>
      </div>
      </div>
    </div>
  )
}

export default App;
