import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Avatar, List, Space } from 'antd';
import './index.css'
export default function Comment() {
    const [commentList,setCommentList]=useState([])
    useEffect(()=>{
        async function getCommentList(){
            // await等待
            const res=await fetch('/comment').then(res=>res.json().then(data=>{console.log(data);return data}))   
            setCommentList(res);
        }
        getCommentList()
        
    },[])
    // const data = Array.from({
    //     length: 23,
    //   }).map((_, i) => ({
    //     // href: 'https://ant.design',
    //     title: `MT用户${i}`,
    //     avatar: `https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp509817737.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1706928125&t=cb0a8ec8bce3866146742762d9881963`,
    //     description:
    //       '我要特别赞扬这家店。他们的菜品味道非常棒，每一道菜都很入味，而且食材新鲜。特别是他们的招牌菜，口感细腻，味道独特，让我回味无穷。',
    //     // content:
    //     //   'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    //   }));
      const IconText = ({ icon, text }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
      );
      const demo=()=>{

      }
  return (
    <div className='comment-list'>
    <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={commentList}
    
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={160}
            height={160}
            alt="logo"
            src={item.picture}
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
    />
    </div>
  );
  
}
