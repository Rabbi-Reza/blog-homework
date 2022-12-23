import { Skeleton } from "antd";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../components/HomePage";
import { fetchAllComments } from "../store/Comments/commentsAction";
import { fetchAllPosts } from "../store/Posts/postsAction";
import { fetchAllUsers } from "../store/Users/usersAction";
import {fetchAllPhotos} from "../store/Photos/photosAction";

export default function Home() {
  const [allPosts, setAllPosts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
    dispatch(fetchAllUsers());
    dispatch(fetchAllComments());
    dispatch(fetchAllPhotos())
  }, []);

  const { postList, loading } = useSelector((state) => state?.posts);

  useEffect(() => {
    postList && setAllPosts(postList);
  }, [postList]);

  const deletePost = (id) => {
    setAllPosts(allPosts.filter((dt) => dt.id != id));
  };

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
          <HomePage allPosts={allPosts} deletePost={deletePost} />
        )}
      </main>
    </>
  );
}
