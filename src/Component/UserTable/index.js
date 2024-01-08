import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Space, Table, Tag } from 'antd';
import { fetchUserList } from '../../store/modules/userStore';

export default function Count() {


    const dispatch=useDispatch();
    const {userList} = useSelector(state=>state.users)


    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a href="www.baidu.com">{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a href="www.baidu.com">Invite {record.name}</a>
              <a href="www.baidu.com">Delete</a>
            </Space>
          ),
        },
      ];

      
      // const data = [
      //   {
      //     key: '1',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York No. 1 Lake Park',
      //     tags: ['nice', 'developer'],
      //   },
      //   {
      //     key: '2',
      //     name: 'Jim Green',
      //     age: 42,
      //     address: 'London No. 1 Lake Park',
      //     tags: ['loser'],
      //   },
      //   {
      //     key: '3',
      //     name: 'Joe Black',
      //     age: 32,
      //     address: 'Sydney No. 1 Lake Park',
      //     tags: ['cool', 'teacher'],
      //   },
      // ];


      useEffect(()=>{
        dispatch(fetchUserList());

      },[dispatch])
  return (
    <div>
        {/* <div>{count}</div>
        <input type='int' onChange={(e)=>{
            setNumA(parseInt(e.target.value));
            // console.log(typeof(e.target.value));//string
        }}
        placeholder='1'
        ></input>
        <button onClick={()=>{
            dispatch(add(numA));
        }}>+</button>
        
        <button onClick={()=>{
            dispatch(sub(numA));
        }}>-</button> */}
        <Table columns={columns} dataSource={userList} />;

    </div>
   
  )
}
