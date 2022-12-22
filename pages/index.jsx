import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPosts } from '../store/Posts/postsAction'
import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [allPosts, setAllPosts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts())
  }, []);

  const AllPosts = useSelector((state) => state?.posts);
  
  useEffect(() => {
    AllPosts && setAllPosts(AllPosts)
  }, [AllPosts])
  
  console.log(allPosts)
  return (
    <>
      <Head>
        <title>Blog Post</title>
        <meta name="description" content="Blog Post app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
dfsdfds
      </main>
    </>
  )
}
