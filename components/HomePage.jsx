import SinglePostCard from "./SinglePostCard";

const HomePage = ({ allPosts, deletePost }) => {
  return (
    <>
      {allPosts &&
        allPosts?.map((data) => (
          <SinglePostCard key={data?.id} data={data} deletePost={deletePost} />
        ))}
    </>
  );
};

export default HomePage;
