import logo from './logo.svg';
import './App.css';
import { createContext, useContext, useEffect, useState } from 'react';
import _ from 'lodash';
import Index from './Component'

const heimaApi="http://geek.itheima.net/v1_0/channels"
const MsgContext=createContext();//跨层传递数据

function A(){
  const msg=useContext(MsgContext)
  return <p>this is A {msg}</p>
}

function App() {
  const [List,setList]=useState([])
  const [userList,setUserList]=useState([{id:1,name:"zzz"},{id:2,name:"zzzz"}])
  const [value,setValue]=useState('默认1')

// 副作用函数执行有三种情况，无参数，空数组，特定参数
  useEffect(()=>{
    async function getList(){
      const res = await fetch(heimaApi);
      const jsonRes = await res.json()
      setList(jsonRes.data.channels)
    }
    getList()
  },[])
  

const handleAdd=()=>{

}
const handleDel=(id)=>{
  setUserList(userList.filter((item)=>{return item.id!==id}))
}
const handleSort=()=>{
  setUserList(_.orderBy(userList,"id","desc"))////按字段排序，不改变原数组
}


  return (
    // <MsgContext.Provider value={value}>
    // <div className="App">
    //   <ul>
    //   { userList.map((item)=>{return <li key={item.id}>{item.name}<button onClick={()=>{handleDel(item.id)}}>Click删除</button></li> })}  
    //   </ul>
    //   <ul>
    //   {/* { List.map((item)=>{return <li key={item.id}>{item.name}</li> })}   */}
    //   </ul>
     
    //   <button onClick={handleAdd}>Click增加</button>
    //   <button onClick={handleSort}>排序</button>

    //   <input 
    //   value={value} 
    //   onChange={(e)=>{
    //     setValue(e.target.value);
    //   }}
    //   type='text'
    //   />

     

    // </div>
    // <A></A>
    
    <Index></Index>
    // </MsgContext.Provider>
  );
}

export default App;
