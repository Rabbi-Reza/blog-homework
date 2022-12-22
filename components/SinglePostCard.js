import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Card } from 'antd';
import { Typography } from 'antd';
const { Meta } = Card;
import { fetchCommentsById } from '../store/comments/commentsAction'
import { useDispatch, useSelector } from 'react-redux';

const SinglePostCard = ({data}) => {
  const [allComments, setAllComments] = useState([]);

  const dispatch = useDispatch();

useEffect(() => {
  data && dispatch(fetchCommentsById(data.id))
}, [data])


const {postList} = useSelector((state) => state?.posts);

  return (
    <Card
    // hoverable
    style={{
      width: '50vw',
    }}
    // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
      <Link
        href="/post/[pid]"
        as={`/product/${data?.id}`}
      >
        <Meta title={data?.title} />
      </Link>
      <Typography.Title level={5} style={{ margin: 0 }}>
        {data.author}
      </Typography.Title>
    
  </Card>

  )
}

export default SinglePostCard