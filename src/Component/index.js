import React, { useState } from 'react'
import { legacy_createStore } from 'redux'
import './index.css'
import Cart from './Cart'
import Nav from './NavBar';
import Menu from './Menu';

export default function DempPage() {
    

  return (
    <div className='home'>
        <nav className='nav'> 
          <Nav></Nav>
        </nav>
        <div className='content-wrap'><Menu></Menu></div>
        <div className='cartContainer'>
          <Cart></Cart>
        </div>
       
    </div>
  )
}

