import React from 'react'
import './index.css'
import { Link,NavLink, useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import {SearchOutlined} from '@ant-design/icons'

export default function Nav () {
  const navigate=useNavigate();
  return (
    <>
        <div className='menu'>
            <div onClick={()=>{navigate("/menu")}} className='menu-item'> 点菜 </div>
            <div onClick={()=>{navigate("/comment")}} className='menu-item'> 评价<span className='menu-item-comment'>1789</span> </div>
            <div onClick={()=>{navigate("/menu")}} className='menu-item'> 商家 </div>
        </div>
        <div className='menu-search' ><Input  className='menu-search-text' placeholder='请输入菜品名称' prefix={<SearchOutlined />}  /></div>
    </>
  )
}
