import { useState } from 'react'

import './App.css'
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
