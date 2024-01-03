import React from 'react'
import './index.css'
import {PlusCircleOutlined} from '@ant-design/icons'
import { useDispatch,useSelector } from 'react-redux'
import { addCart } from '../../store/modules/takeaway';
export default function FoodItem({
  id,
  picture,
  name,
  unit,
  description,
  food_tag,
  month_saled,
  like_ratio_desc,
  price,
  tag,
  count
}) {
    const dispatch = useDispatch();
    // const {cartList} = useSelector(state=>state.foods)

  return (
    <div className='cate-goods'>
        <div className='goods-img'>
            <img src={picture}></img>
        </div>
        <div className='goods-info'>
            <div className='goods-title'>{name}</div>
            <div className='goods-detail'><span className='unit'>{unit}</span></div>
            <div className='goods-tag'><span>{food_tag}</span></div>
            <div className='goods-sales-volume'><span>月售{month_saled}</span>&nbsp;&nbsp;<span>{like_ratio_desc}</span>  </div>
            <div className='goods-price-count'>
                <div className='goods-price'>￥{price}</div>
                <div className='goods-count' onClick={()=>{
                   dispatch(addCart({"id":id,"name":name,"price":price,"picture":picture,"count":1}))
                }}><PlusCircleOutlined style={{fontSize:"18px",color:"#ffcc33"}} /></div>
            </div>
        </div>
    </div>
  )
}
