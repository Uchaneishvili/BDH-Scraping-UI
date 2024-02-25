import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TherapistsGrid from './components/TherapistsGrid/TherapistsGrid'
function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <TherapistsGrid />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
