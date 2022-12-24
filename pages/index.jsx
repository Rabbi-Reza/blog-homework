import { UpCircleOutlined } from "@ant-design/icons";
import { notification, Skeleton } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeadDefault from "../components/head/Head";
import HomePage from "../components/HomePage";
import Layout from "../components/layouts/Layout";
import NoPost from "../components/NoPost";
import { fetchAllComments } from "../store/Comments/commentsAction";
import { fetchAllPhotos } from "../store/Photos/photosAction";
import { fetchAllPosts } from "../store/Posts/postsAction";
import { fetchAllUsers } from "../store/Users/usersAction";

export default function Home() {
  const [allPosts, setAllPosts] = useState([""]);

  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();

  // Calling API for Post, users, comments and photos
  useEffect(() => {
    dispatch(fetchAllPosts());
    dispatch(fetchAllUsers());
    dispatch(fetchAllComments());
    dispatch(fetchAllPhotos());
  }, [dispatch]);

  // Get Post Data state from Reducer
  const { postList, postLoading, postError } = useSelector(
    (state) => state?.posts
  );

  // Set Post Data to a state
  useEffect(() => {
    postList && setAllPosts(postList);
  }, [postList]);

  // Show toast if post list api get error
  useEffect(() => {
    postError &&
      api["error"]({
        message: (
          <strong style={{ color: "red" }}>{"Something went wrong !!"}</strong>
        ),
        description: (
          <p
            style={{ color: "blue", fontWeight: "600" }}
          >{`Error Occurred getting Post List.`}</p>
        ),
        duration: 3,
      });
  }, [postError]);

  // Function for Delete Post by Filtering id
  const deletePost = (id) => {
    setAllPosts(allPosts.filter((dt) => dt.id != id));
    api["success"]({
      message: <strong style={{ color: "blue" }}>{"Delete Success"}</strong>,
      description: (
        <p
          style={{ color: "red", fontWeight: "600" }}
        >{`${id} No Post is Deleted Successfully!!`}</p>
      ),
      duration: 2,
    });
  };

  return (
    <>
      <HeadDefault title="Blog Site" />
      <Layout>
        <main className="home_main_container">
          {contextHolder}
          {postLoading ? (
            <div style={{ marginLeft: "10vw", marginTop: "15vh" }}>
              <Skeleton />
            </div>
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
        <Link href="">
          <span className="top_arrow" title="Click to Go Top">
            <UpCircleOutlined />
          </span>
        </Link>
      </Layout>
    </>
  );
}
