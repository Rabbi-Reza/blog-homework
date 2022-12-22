import React from 'react'
import Link from 'next/link';
import { Card } from 'antd';
import { Typography } from 'antd';
const { Meta } = Card;

const SinglePostCard = ({data}) => {

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