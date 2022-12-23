import { Card, Divider, Skeleton, Typography } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsById } from "../../store/Comments/commentsAction";
import { fetchPhotoById } from "../../store/Photos/photosAction";
import { fetchPostById } from "../../store/Posts/postsAction";
import { fetchUsersById } from "../../store/Users/usersAction";

const PostDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // Get Post id from url query
  const { pid } = router.query;

  const [postDetail, setPostDetail] = useState([]);

  // Calling API for Specific Post by ID
  useEffect(() => {
    pid && dispatch(fetchPostById(pid));
  }, [pid]);

  // Get Specific Post Data by ID state from Reducer
  const { singlePost, loading } = useSelector((state) => state?.posts);
  // Get Specific Comments Data by ID state from Reducer
  const { commentsById } = useSelector((state) => state?.comments);
  // Get Specific Author/User Data by ID state from Reducer
  const { userInfoByID } = useSelector((state) => state?.users);
  // Get Specific Photo Data by ID state from Reducer
  const { singlePhotoById } = useSelector((state) => state?.photos);

  // Set Specific Post Data to a state
  useEffect(() => {
    singlePost && setPostDetail(singlePost);
  }, [singlePost]);

  // Set Specific Comments Data, Author/User Data and Photo Data to a state
  useEffect(() => {
    postDetail && dispatch(fetchCommentsById(postDetail?.id));
    postDetail && dispatch(fetchUsersById(postDetail?.userId));
    postDetail && dispatch(fetchPhotoById(userInfoByID[0]?.id));
  }, [postDetail]);

  return (
    <>
      <Head>
        <title>Blog Post</title>
        <meta name="description" content="Blog Post app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {postDetail?.length == 0 || loading ? (
        <Skeleton />
      ) : (
        <>
          <header className="blog_header">
            <Link href="/">
              <span>Blog Site</span>
            </Link>
          </header>

          <div className="detail_post_container">
            <Card className="detail_post_card">
              <Typography.Title className="detail_post_author_name" level={2}>
                <span>{postDetail.title}</span>
              </Typography.Title>
              <Divider />
              <div className="detail_post_author_container">
                <Typography.Title className="author_name" level={5}>
                  Author:{" "}
                  <span style={{ color: "rgb(218 86 139)" }}>
                    {userInfoByID[0]?.name}
                  </span>
                </Typography.Title>
                <img
                  className="author_image"
                  height={50}
                  alt="author_image"
                  src={singlePhotoById[0]?.thumbnailUrl}
                />
              </div>
              <Typography.Text style={{ fontSize: "1.3rem" }}>
                <span>{postDetail.body}</span>
              </Typography.Text>
              <Divider style={{ height: "2px", background: "#8500ff" }} />
              <Typography.Title level={5} strong code>
                <span> All {commentsById?.length} Comments are Below</span>
              </Typography.Title>
              {commentsById &&
                commentsById.map((comment, id) => (
                  <>
                    <Typography.Title level={5}>
                      ({id+1}) <span>{comment?.name}:</span> <span style={{color:'#3003fc'}}>(Email: {comment?.email})</span>
                    </Typography.Title>
                    <Typography.Paragraph italic>
                      <span>{comment?.body}</span>
                    </Typography.Paragraph>
                  </>
                ))}
            </Card>
          </div>
          <footer className="blog_footer"></footer>
        </>
      )}
    </>
  );
};

export default PostDetail;
