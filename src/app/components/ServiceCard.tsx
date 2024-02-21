import React from 'react'
import thumbsUp from '@/assets/images/thumbs up.png'
import Image from 'next/image'

const ServiceCard: React.FC = () => {
  return (
    <div className='w-80 hover:shadow-xl shadow cursor-pointer bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 rounded-2xl  transition-all ease-in duration-75'>
      <div className='flex pl-6 flex-col gap-y-4 rounded-2xl bg-white pt-10 pb-6'>
        <Image
          src={thumbsUp}
          alt='Thumbs Up'
          className=''
        />

        <h2 className='font-semibold text-xl text-primary-100'>Title</h2>
        <p className='font-normal text-lg text-primary-100'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore iusto deserunt ratione dolor quisquam doloremque, veniam tempora deleniti. Reprehenderit, neque?
        </p>
        <div>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-2xl group bg-gradient-to-br from-cyan-500 to-primary-200 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-2xl text-primary-100 hover:text-white group-hover:bg-opacity-0">
              Read more
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard