import { UpCircleOutlined } from "@ant-design/icons";
import { notification, Skeleton } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../components/HomePage";
import NoPost from "../components/NoPost"
import { fetchAllComments } from "../store/Comments/commentsAction";
import { fetchAllPhotos } from "../store/Photos/photosAction";
import { fetchAllPosts } from "../store/Posts/postsAction";
import { fetchAllUsers } from "../store/Users/usersAction";

export default function Home() {
  const [allPosts, setAllPosts] = useState([]);

  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();

  // Calling API for Post, users, comments and photos
  useEffect(() => {
    dispatch(fetchAllPosts());
    dispatch(fetchAllUsers());
    dispatch(fetchAllComments());
    dispatch(fetchAllPhotos());
  }, []);

  // Get Post Data state from Reducer
  const { postList, loading } = useSelector((state) => state?.posts);

  // Set Post Data to a state
  useEffect(() => {
    postList && setAllPosts(postList);
  }, [postList]);

  // Function for Delete Post by Filtering id
  const deletePost = (id) => {
    setAllPosts(allPosts.filter((dt) => dt.id != id));
    api["success"]({
      message: <strong style={{ color: "blue" }}>{"Delete Success"}</strong>,
      description: (
        <p
          style={{ color: "red", fontWeight: "600" }}
        >{`${id} No Post is Deleted Successfully from List!!`}</p>
      ),
      duration: 2
    });
  };

  return (
    <>
      <Head>
        <title>Blog Post</title>
        <meta name="description" content="Blog Post app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="blog_header">
        <Link href="/">
          <span>Blog Site</span>
        </Link>
      </header>
      <main className="home_main_container">
        {contextHolder}
        {loading ? (
          <Skeleton />
        ) : (
          <>
            {allPosts?.length === 0 ? (
              <NoPost />
            ) : (
              <HomePage allPosts={allPosts} deletePost={deletePost} />
            )}
          </>
        )}
      </main>
      <Link href="#">
        <span className="top_arrow">
          <UpCircleOutlined />
        </span>
      </Link>
      <footer className="blog_footer"></footer>
    </>
  );
}
