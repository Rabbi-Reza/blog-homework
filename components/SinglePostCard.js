import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Card } from 'antd';
import { Typography } from 'antd';
const { Meta } = Card;
import { fetchCommentsById } from '../store/Comments/commentsAction'
import { fetchUsersById } from '../store/Users/usersAction'
import { useDispatch, useSelector } from 'react-redux';

const SinglePostCard = ({data}) => {
  console.log(data)
  const [commentNumber, setCommentNumber] = useState([]);
  const [userData, setUserData] = useState([]);

  const dispatch = useDispatch();

useEffect(() => {
  data && dispatch(fetchCommentsById(data?.id))
}, [data])

useEffect(() => {
  data && dispatch(fetchUsersById(data?.userId))
}, [data])



const {allComments} = useSelector((state) => state?.comments);
const {userInfo} = useSelector((state) => state?.users);

useEffect(() => {
  console.log(allComments?.length)
  allComments && setCommentNumber(allComments?.length)
}, [allComments])

useEffect(() => {
  console.log('userData',userData)
  userInfo && setUserData(userInfo[0])
}, [userInfo])


  return (
    <Card
    // hoverable
    style={{
      width: '50vw',
    }}
    // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
      <Link
        href={`/post/${data?.id}`}
      >
        <Meta title={data?.title} />
      </Link>
      <Typography.Title level={4} style={{ margin: 0, color: 'gray' }}>
        Author: {userInfo[0]?.name}
      </Typography.Title>
      <Typography.Title level={5} style={{ margin: 0, color: 'gray' }}>
        {commentNumber} Comments Found
      </Typography.Title>
    
  </Card>

  )
}

export default SinglePostCard