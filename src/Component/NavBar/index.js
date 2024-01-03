import React from 'react'
import './index.css'
import { Input } from 'antd';
import {SearchOutlined} from '@ant-design/icons'

export default function Nav () {
  return (
    <>
        <div className='menu'>
            <div className='menu-item active'> 点菜 </div>
            <div className='menu-item'> 评价<span className='menu-item-comment'>1789</span> </div>
            <div className='menu-item'> 商家 </div>
        </div>
        <div className='menu-search' ><Input  className='menu-search-text' placeholder='请输入菜品名称' prefix={<SearchOutlined />}  /></div>
    </>
  )
}
