/* eslint-disable @next/next/no-img-element */
import { DeleteOutlined } from "@ant-design/icons";
import { Card, Divider, notification, Typography } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SinglePostCard = ({ data, deletePost }) => {
  const [allCommentsList, setAllCommentsList] = useState([]);
  const [userData, setUserData] = useState([]);
  const [allPhotos, setAllPhotos] = useState([]);

  const [api, contextHolder] = notification.useNotification();

  // Get Author/User Data state from Reducer
  const { allUserData, userError } = useSelector((state) => state?.users);
  // Get Comments Data state from Reducer
  const { allComments, commentsError } = useSelector(
    (state) => state?.comments
  );
  // Get Photo Data state from Reducer
  const { allPhotosList, photosError } = useSelector((state) => state?.photos);

  // Filter Author/User from user id
  useEffect(() => {
    setUserData(allUserData.filter((dt) => dt?.id === data?.userId));
  }, [allUserData]);

  // Filter Comments from post id
  useEffect(() => {
    setAllCommentsList(allComments.filter((dt) => dt?.postId === data?.id));
  }, [allComments]);

  // Filter Photos
  useEffect(() => {
    setAllPhotos(allPhotosList.filter((dt) => dt?.id === userData[0]?.id));
  }, [allPhotosList]);

  // Show toast if Author/User list api get error
  useEffect(() => {
    userError &&
      api["error"]({
        message: (
          <strong style={{ color: "red" }}>{"Something went wrong !!"}</strong>
        ),
        description: (
          <p
            style={{ color: "blue", fontWeight: "600" }}
          >{`Error Occurred getting Author List.`}</p>
        ),
        duration: 2,
      });
  }, [userError]);

  // Show toast if Comments list api get error
  useEffect(() => {
    commentsError &&
      api["error"]({
        message: (
          <strong style={{ color: "red" }}>{"Something went wrong !!"}</strong>
        ),
        description: (
          <p
            style={{ color: "blue", fontWeight: "600" }}
          >{`Error Occurred getting Comments.`}</p>
        ),
        duration: 2,
      });
  }, [commentsError]);

  // Show toast if Photos list api get error
  useEffect(() => {
    photosError &&
      api["error"]({
        message: (
          <strong style={{ color: "red" }}>{"Something went wrong !!"}</strong>
        ),
        description: (
          <p
            style={{ color: "blue", fontWeight: "600" }}
          >{`Error Occurred getting Photos.`}</p>
        ),
        duration: 2,
      });
  }, [photosError]);

  return (
    <>
      {contextHolder}
      <Card className="single_card_container">
        <div className="single_card_info_delete_container">
          <div className="single_card_info">
            <Typography.Title level={4} className="post_title_container">
              <Link href="/post/[pid]" as={`/post/${data?.id}`}>
                <span className="post_title">{data?.title}</span>
              </Link>
            </Typography.Title>

            <Divider />
            <div className="author_container">
              <img
                className="author_image"
                height={50}
                alt="author_image"
                src={allPhotos[0]?.thumbnailUrl}
              />
              <Typography.Title className="author_name" level={5}>
                <Typography.Text style={{ margin: 0, color: "#8d3af2" }}>
                  Author:{" "}
                </Typography.Text>
                <Typography.Text
                  keyboard
                  style={{ margin: 0, color: "rgb(218 86 139)" }}
                >
                  {userData && userData[0]?.name}
                </Typography.Text>
              </Typography.Title>
            </div>

            <Divider />
            <Typography.Title
              italic
              level={5}
              style={{ margin: 0, color: "black" }}
            >
              {allCommentsList?.length} Comments Found
            </Typography.Title>
          </div>

          <div className="delete_button">
            <DeleteOutlined
              title={`Click to delete ${data?.id} no post.`}
              onClick={() => deletePost(data?.id)}
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default SinglePostCard;
