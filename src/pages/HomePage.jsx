import React from 'react'
import OneThird from '../components/homepage/OneThird'

const HomePage = () => {
  return (
    <div className='text-gray-700'>
      <div className='h-96 flex flex-col justify-center items-center space-y-4'>

          <div className='text-2xl'>We Are</div>
          <div className='text-6xl'>Watchers</div>
          <div className='text-3xl pt-2'>Be 100% Safe</div>
      </div>

      <div className='flex'>
       <OneThird text="HOME" description="Are you safe at your Home?" tailwindTitleBg="bg-red-200" tailwindDescBg="bg-blue-50"/>
       <OneThird text="OFFICE" description="Are you safe at your Office?" tailwindTitleBg="bg-yellow-100" tailwindDescBg="bg-indigo-50"/>
       <OneThird text="TRIP" description="Are you safe on your every Trip?" tailwindTitleBg="bg-green-200" tailwindDescBg="bg-blue-50"/>
          
      </div>

    </div>
  )
}

export default HomePage