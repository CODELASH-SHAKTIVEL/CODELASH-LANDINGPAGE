import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  return (
      <nav>
        <h1>CODELASH-SHAKTIVEL</h1>
       <main>
            <HashLink to={'/#home'}>HOME</HashLink>
            <Link to={'/Contact'}>CONTACT</Link>
            <HashLink to={'/#about'}>ABOUT</HashLink>
            <HashLink to={'/#brands'}>BRANDS</HashLink>
            <Link to={'/Services'}>SERVICES</Link>
       </main>
      </nav>
  )
}

export default Header
