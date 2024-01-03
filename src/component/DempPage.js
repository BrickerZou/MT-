import React, { useState } from 'react'
import { legacy_createStore } from 'redux'

export default function DempPage() {
    const [count,setCount]=useState(0);
    const reducer=(state={count:count},type)=>{
        // 返回新的state
        if(type==="INC"){
            return {count:++state.count}

        }
        else if(type==="DEC"){
            return {count:--state.count}

        }
        return {count:state.count}

    }
    const store=legacy_createStore(reducer)
    // 值变化
    store.subscribe(()=>{
        let newCount=store.getState().count;
        console.log("count值变化为"+newCount);
        setCount(newCount)
    })

  return (
   
    <div>
         <button 
         onClick={()=>{
            store.dispatch({
                type:"INC"
            })
            
        
            }}>
                {count}
        </button>
    </div>
  )
}

