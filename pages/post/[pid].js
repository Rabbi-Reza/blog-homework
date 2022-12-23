import { Skeleton } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsById } from "../../store/Comments/commentsAction";
import { fetchPhotoById } from "../../store/Photos/photosAction";
import { fetchPostById } from "../../store/Posts/postsAction";
import { fetchUsersById } from "../../store/Users/usersAction";
import Head from "next/head";

const PostDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { pid } = router.query;

  const [postDetail, setPostDetail] = useState([]);

  useEffect(() => {
    pid && dispatch(fetchPostById(pid));
  }, [pid]);

  const { singlePost, loading } = useSelector((state) => state?.posts);
  const { commentsById } = useSelector((state) => state?.comments);
  const { userInfoByID } = useSelector((state) => state?.users);
  const { singlePhotoById } = useSelector((state) => state?.photos);

  useEffect(() => {
    singlePost && setPostDetail(singlePost);
  }, [singlePost]);

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
