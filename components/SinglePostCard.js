import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Card } from 'antd';
import { Typography } from 'antd';
const { Meta } = Card;
import { fetchCommentsById } from '../store/Comments/commentsAction'
import { useDispatch, useSelector } from 'react-redux';

const SinglePostCard = ({data}) => {
  const [commentNumber, setCommentNumber] = useState([]);

  const dispatch = useDispatch();

useEffect(() => {
  data && dispatch(fetchCommentsById(data.id))
}, [data])


const {allComments} = useSelector((state) => state?.comments);

useEffect(() => {
  console.log(allComments?.length)
  allComments && setCommentNumber(allComments?.length)
}, [allComments])


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
      <Typography.Title level={5} style={{ margin: 0, color: 'gray' }}>
        {commentNumber} Comments Found
      </Typography.Title>
    
  </Card>

  )
}

export default SinglePostCard