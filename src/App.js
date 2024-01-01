import React from 'react'
import Home from './component/Home'
import Contact from './component/Contact'
import Services from './component/Services'
import Header from './component/Header'
import Footer from './component/Footer'
import {BrowserRouter as Router , Route, Routes ,  } from 'react-router-dom'


import './style/Header.scss'
import './style/App.scss'
import './style/Home.scss'
import './style/Footer.scss'
import './style/Contact.scss'

const App = () => {
  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Services" element={<Services/>}/>
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App
