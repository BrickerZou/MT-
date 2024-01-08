import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { request } from "../../utils";

const store=createSlice({
    name:"users",
    initialState:{
        userList:[]
    },
    reducers:{
        // add(state,action){
        //     state.count+=action.payload;
        //     console.log(state.count);
        // },
        // sub(state,action){
        //     state.count-=action.payload;
        // }
        setUserList(state,action){
            state.userList=action.payload;
        }

    }
})


const {setUserList}=store.actions;

const fetchUserList=()=>{
    return async (dispatch)=>{
        // 编写异步逻辑
        const res= await request('get','/meituan/menu').then(data => {
            // 处理返回的数据
            console.log('Response data:', data);
            return data;
        })
        .catch(error => {
        // 处理请求错误
            console.error('Error:', error);
        });
        console.log(res);
  
        dispatch(setUserList(res));

    }
}
export{fetchUserList};

const reducer=store.reducer;
export default  reducer;