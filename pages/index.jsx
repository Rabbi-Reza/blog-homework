import { Skeleton } from "antd";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../components/HomePage";
import { fetchAllPosts } from "../store/Posts/postsAction";

export default function Home() {
  const [allPosts, setAllPosts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  const { postList, loading } = useSelector((state) => state?.posts);
  // console.log(loading);
  useEffect(() => {
    postList && setAllPosts(postList);
  }, [postList]);

  // console.log(allPosts);
  return (
    <>
      <Head>
        <title>Blog Post</title>
        <meta name="description" content="Blog Post app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {allPosts.length == 0 || loading ? (
          <Skeleton />
        ) : (
          <HomePage allPosts={allPosts} />
        )}
      </main>
    </>
  );
}
