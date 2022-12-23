import { Skeleton } from "antd";
import Head from "next/head";
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
    postDetail && dispatch(fetchPhotoById(postDetail?.id));
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
          <div>
            <img src={singlePhotoById[0]?.url} alt="" />
          </div>
          <div>
            {pid} {postDetail.title}
          </div>
          <div>{postDetail.body}</div>
          <p>Author: {userInfoByID[0]?.name}</p>
          {commentsById &&
            commentsById.map((comment) => (
              <>
                <h4>{comment?.name}</h4>
                <p>{comment?.body}</p>
              </>
            ))}
        </>
      )}
    </>
  );
};

export default PostDetail;
