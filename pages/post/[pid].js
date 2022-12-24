/* eslint-disable @next/next/no-img-element */
import { Card, Divider, Skeleton, Typography } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeadDefault from "../../components/head/Head";
import Layout from "../../components/layouts/Layout";
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
  }, [dispatch, pid]);

  // Get Specific Post Data by ID state from Reducer
  const { singlePost, loading } = useSelector((state) => state?.posts);
  // Get Specific Comments Data by ID state from Reducer
  const { commentsById, commentsLoading } = useSelector(
    (state) => state?.comments
  );
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
  }, [dispatch, postDetail]);

  useEffect(() => {
    userInfoByID && dispatch(fetchPhotoById(userInfoByID[0]?.id));
  }, [dispatch, userInfoByID]);

  return (
    <>
      <HeadDefault title={`Post ${pid} Detail`} />

      <Layout>
        {postDetail?.length == 0 || loading ? (
          <div style={{ marginLeft: "10vw", marginTop: "15vh" }}>
            <Skeleton />
          </div>
        ) : (
          <>
            <div className="detail_post_container">
              <Card className="detail_post_card">
                <Typography.Title className="detail_post_author_name" level={2}>
                  <span>{postDetail.title}</span>
                </Typography.Title>
                <Divider />
                <div className="detail_post_author_container">
                  <Typography.Title className="author_name" level={5}>
                    <Typography.Text
                      italic
                      style={{ margin: 0, color: "#8d3af2" }}
                    >
                      Author:{" "}
                    </Typography.Text>
                    <Typography.Text
                      keyboard
                      style={{ margin: 0, color: "rgb(218 86 139)" }}
                    >
                      {userInfoByID[0]?.name}
                    </Typography.Text>
                  </Typography.Title>

                  <img
                    className="author_image"
                    width={50}
                    height={50}
                    src={singlePhotoById[0]?.thumbnailUrl}
                    alt="author_image"
                  />
                </div>
                <Typography.Text style={{ fontSize: "1.3rem" }}>
                  <span>{postDetail.body}</span>
                </Typography.Text>
                <Divider style={{ height: "2px", background: "#8500ff" }} />

                {commentsLoading ? (
                  <Skeleton />
                ) : (
                  <>
                    <Typography.Title level={5} strong code>
                      <span>
                        {" "}
                        All {commentsById?.length} Comments are Below
                      </span>
                    </Typography.Title>
                    {commentsById &&
                      commentsById.map((comment, id) => (
                        <>
                          <Typography.Title level={5}>
                            <span style={{ color: "#1F5DA0" }}>({id + 1})&nbsp;</span>
                            <span>{comment?.name}:</span>{" "}
                            <span style={{ color: "#3003fc" }}>
                              (Email: {comment?.email})
                            </span>
                          </Typography.Title>
                          <Typography.Paragraph italic>
                            <span>{comment?.body}</span>
                          </Typography.Paragraph>
                        </>
                      ))}
                  </>
                )}
              </Card>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default PostDetail;
