import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsById } from "../../store/Comments/commentsAction";
import { fetchPostById } from "../../store/Posts/postsAction";
import { fetchUsersById } from "../../store/Users/usersAction";
import { fetchPhotoById } from "../../store/Photos/photosAction"
import { Skeleton } from "antd";

const PostDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { pid } = router.query;

  const [postDetail, setPostDetail] = useState([]);

  useEffect(() => {
    pid && dispatch(fetchPostById(pid));
  }, [pid]);

  const { singlePost, loading } = useSelector((state) => state?.posts);
  const { allComments } = useSelector((state) => state?.comments);
  const { userInfo } = useSelector((state) => state?.users);
  const { singlePhotoById } = useSelector((state) => state?.photos);
  
  useEffect(() => {
    singlePost && setPostDetail(singlePost);
  }, [singlePost]);

  useEffect(() => {
    postDetail && dispatch(fetchCommentsById(postDetail?.id));
  }, [postDetail]);

  useEffect(() => {
    postDetail && dispatch(fetchUsersById(postDetail?.userId));
  }, [postDetail]);

  useEffect(() => {
    postDetail && dispatch(fetchPhotoById(postDetail?.id))
  }, [postDetail])
  
  // console.log(postDetail);
  // console.log(singlePhotoById);

  return (
    
    <>
    {postDetail?.length == 0 || loading ? (
      <Skeleton />
    ) : (
      <>
    <div>
      <img src={singlePhotoById[0]?.url} alt=''/>
    </div>
      <div>
        {pid} {postDetail.title}
      </div>
      <div>{postDetail.body}</div>
      <p>Author: {userInfo[0]?.name}</p>
      {allComments &&
        allComments.map((comment) => (
          <>
            <h4>{comment?.name}</h4>
            <p>{comment?.body}</p>
          </>
        ))}
    </>
  )}
  </>
  )
};

export default PostDetail;
