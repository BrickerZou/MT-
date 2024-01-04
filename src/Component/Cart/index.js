import React, { useState } from 'react'
import './index.css'
import * as _ from 'lodash'
import { Collapse, Divider,Button, Modal } from 'antd';
import {DeleteOutlined,PlusCircleOutlined,MinusCircleOutlined} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {increCount,decreCount, clearCart} from '../../store/modules/takeaway'
import useSelection from 'antd/es/table/hooks/useSelection';
export default function Cart() {
    const dispatch = useDispatch();
    const {cartList} = useSelector(state=>state.foods)
    const totalPrice= cartList.reduce((a, c) => a + c.price * c.count, 0)
    const clearExtra=()=>{
        return <span className='clear' onClick={()=>{dispatch(clearCart())}}><DeleteOutlined />清空</span>
    }
// modal
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('请支付');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('支付成功！');
    setConfirmLoading(true);
    dispatch(clearCart());
    // 支付成功
    setTimeout(() => {
      // 这些应该放store支付成功回调函数里
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };


    const goToPreview=()=>{
      // 结算付款
      showModal();
      
      
    }
    
  return (
    <div className='cart'>
        <div className={`icon ${cartList.length>0 && 'fill'}`}>
           {cartList.length>0 && <div className='cartCornerMark'>{cartList.length}</div>} 
        </div>
        <div className='main'>
            <div className='cur_price'>￥<span>{totalPrice}</span></div>
            <div className='delivery_fee'>预估配送费￥5</div>
        </div>
        {totalPrice>20.00?<div className='goToPreview' onClick={goToPreview}>结算</div>:<div className='minFree'>￥20起送</div>}
        <Modal
        title="订单结算"
        open={open}
        onOk={handleOk}
        okText="确认支付"
        confirmLoading={confirmLoading}
        cancelText="取消"
        onCancel={handleCancel}
        
        >
          <p>{modalText}</p>
        </Modal>
       <div className='cart-list' style={{}} >
       {/* <Divider orientation="left">Default Size</Divider> */}
    <Collapse
        bordered={false}
        items={[{ key: '1', 
        label: '购物车', 
        children: <div className="scrollArea">
        {cartList.map(item => {
          return (
            <div className="cartItem" key={item.id}>
              <img className="shopPic" src={item.picture} alt="" />
              <div className="main">
                <div className="skuInfo">
                  <div className="name">{item.name}</div>
                </div>
                <div className="payableAmount">
                  <span className="yuan">¥</span>
                  <span className="price">{item.price}</span>
                </div>
              </div>
              <div className="skuBtnWrapper btnGroup">
                {/* 数量组件 */}
                {/* <Count
                  count={item.count}
                  onPlus={() => dispatch(increCount({ id: item.id }))}
                  onMinus={() => dispatch(decreCount({ id: item.id }))}
                /> */}
                <span className="minus" onClick={()=>{dispatch(decreCount({ id: item.id }))}}><MinusCircleOutlined style={{fontSize:"18px",color:"#ffcc33"}} /></span>
                &nbsp;
                <span className="count">{item.count}</span>
                &nbsp;
                <span className="plus"onClick={()=>{dispatch(increCount({ id: item.id }))}}><PlusCircleOutlined style={{fontSize:"18px",color:"#ffcc33"}} /></span>
              </div>
            </div>
          )
        })}
        </div>,
         extra:clearExtra() }]}
    />
    {/* <Divider orientation="left">Small Size</Divider> */}
       </div>
       
       
       
       
        
    </div>
  )
}
