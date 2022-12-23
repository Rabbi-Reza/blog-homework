import React from 'react'
import SinglePostCard from './SinglePostCard'

const HomePage = ({ allPosts}) => {
  return (
        <>
        { allPosts && allPosts?.map(data => <SinglePostCard key={data.id} data={data}/>)}        
        </>
  )
}

export default HomePage