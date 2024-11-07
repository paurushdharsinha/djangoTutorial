import React from 'react'
import { Award, BadgeCheckIcon, Briefcase, BriefcaseBusinessIcon, Mail } from "lucide-react";
import "./profile.css";

function UserJobRecommendation({job1, job2, job3}) {
  return (
    <div className="w-full px-7 py-5 max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className=''>
        <div>
          <h1 className='text-[#1F2833] mb-2 text-start text-xl font-bold profile-text'>Recommended Job Roles</h1>
          <div className='h-[2px] bg-black w-full rounded'></div>
        </div>
        <div className="mt-4 space-y-2">
            <div className="flex items-center text-gray-600">
              <BriefcaseBusinessIcon className="w-4 h-4 mr-2 text-[#18BED4]" />
              <span>{job1}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <BriefcaseBusinessIcon className="w-4 h-4 mr-2 text-[#18BED4]"/>
              <span>{job2}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <BriefcaseBusinessIcon className="w-4 h-4 mr-2 text-[#18BED4]"/>
              <span>{job3}</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default UserJobRecommendation