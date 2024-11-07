import React from 'react'
import UserProfile from './UserProfile'
import UserJobRecommendation from './UserJobRecommendation'
import SkillRating from './SkillRating'

function Dashboard() {
  return (
    <div className='py-40 px-20'>
        {/* <UserProfile/>
        <UserJobRecommendation/> */}
        <SkillRating/>
    </div>
  )
}

export default Dashboard