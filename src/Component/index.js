import React, { useState } from 'react'
import { legacy_createStore } from 'redux'
import './index.css'
import Cart from './Cart'
import Nav from './NavBar';
import Menu from './Menu';
import Comment from './Comment';
import { Outlet } from 'react-router-dom';

export default function DempPage() {
    

  return (
    <div className='home'>
        <nav className='nav'> 
          <Nav></Nav>
        </nav>
        {/* 点菜、评价 */}
        <div className='content-wrap'>
          {/* <Outlet /> */}
          {/* An <Outlet> should be used in parent route elements to render their child route elements. */}
          {/* <Menu></Menu> */}
          <Outlet></Outlet>
          </div>
        
        
       
    </div>
  )
}

