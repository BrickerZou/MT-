import React from 'react'
import './index.css'
export default function Cart() {
  return (
    <div className='cart'>
        <div className='icon'>
            <div className='cartCornerMark'>0</div>
        </div>
        <div className='main'>
            <div className='cur_price'>￥<span>0</span></div>
            <div className='delivery_fee'>预估配送费￥5</div>
        </div>
        <div className='minFree'>￥20起送</div>
    </div>
  )
}
