import { Table } from 'antd'
import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import TherapistsGrid from './components/TherapistsGrid/TherapistsGrid'
function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <TherapistsGrid />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
