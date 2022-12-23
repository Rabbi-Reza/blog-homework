import { Card, Typography } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
const { Meta } = Card;
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";

const SinglePostCard = ({ data,deletePost }) => {
  const [allCommentsList, setAllCommentsList] = useState([]);
  const [userData, setUserData] = useState([]);
  const [allPhotos, setAllPhotos] = useState([]);

  const { allUserData } = useSelector((state) => state?.users);
  const { allComments } = useSelector((state) => state?.comments);
  const { allPhotosList } = useSelector((state) => state?.photos);

  useEffect(() => {
    setUserData(allUserData.filter((dt) => dt?.id == data?.userId));
  }, [allUserData]);

  useEffect(() => {
    setAllCommentsList(allComments.filter((dt) => dt?.postId == data?.id));
  }, [allComments]);


  useEffect(() => {
    // console.log('photo',allPhotosList)
    setAllPhotos(allPhotosList.filter((dt) => dt?.id == data?.id));
  }, [allPhotosList]);

  return (
    <Card
      // hoverable
      style={{
        width: "50vw",
      }}
      cover={<img alt="example" height={150} src={allPhotos[0]?.thumbnailUrl} />}
    >
      <Link href="/post/[pid]" as={`/post/${data?.id}`}>
        <Meta title={data?.title} />
      </Link>
      <Typography.Title level={4} style={{ margin: 0, color: "gray" }}>
        Author: {userData && userData[0]?.name}
      </Typography.Title>
      <Typography.Title level={5} style={{ margin: 0, color: "gray" }}>
        {allCommentsList?.length} Comments Found
      </Typography.Title>
      <DeleteOutlined onClick={() => deletePost(data?.id)}/>
    </Card>
  );
};

export default SinglePostCard;
