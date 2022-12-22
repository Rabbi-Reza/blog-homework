import React from 'react'
import SinglePostCard from './SinglePostCard'

const HomePage = ({ allPosts}) => {
  return (
        <>
        { allPosts && allPosts?.slice(0, 20).map(data => <SinglePostCard key={data.id} data={data}/>)}        
        </>
  )
}

export default HomePage