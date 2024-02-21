import React from 'react'
import Image from 'next/image'
import student from '@/assets/images/Landing Girl.png'

const HomeSection: React.FC = () => {
  return (
    <>
      <div className='bg-primary-200 w-full text-white py-1 md:py-3 font-bold -mt-8 px-4 md:px-32'>
        Join us and become an expert! Register now by clicking the button below.
      </div>
      <div className='flex flex-col-reverse items-start justify-center md:flex-row md:justify-between px-4 md:py-20 md:px-32 md:items-center pt-3'>
        <div className='flex flex-col gap-y-2 md:gap-y-6 md:w-6/12'>
          <h1 className='font-bold text-4xl md:text-5xl text-center md:text-start text-primary-100'>
            Knowledge for <br />everyone, everywhere.
          </h1>
          <p className='text-primary-100 text-2xl md:text-3xl font-medium text-center md:text-start'>
            Accessible education for all.
          </p>
          <div className='flex justify-around items-center w-72 self-center md:self-start'>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-xl text-sm px-8 py-2.5 text-center me-2 mb-2 shadow"
            >
              Register
            </button>
            <button className="relative inline-flex items-center justify-center p-0.5 font-medium mb-2 me-2 overflow-hidden text-sm text-primary-100 rounded-xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 shadow">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Learn More
              </span>
            </button>
          </div>
          <div className='flex md:justify-start justify-center mb-4 md:mb-0 items-center gap-x-4 md:gap-x-10'>
            <div>
              <p className='text-3xl md:text-5xl font-semibold text-primary-100'>100k+</p>
              <p className='text-primary-100 font-medium text-lg md:text-2xl'>Students</p>
            </div>
            <div>
              <p className='text-3xl md:text-5xl font-semibold text-primary-100'>100k+</p>
              <p className='text-primary-100 font-medium text-lg md:text-2xl'>Students</p>
            </div>
            <div>
              <p className='text-3xl md:text-5xl font-semibold text-primary-100'>100k+</p>
              <p className='text-primary-100 font-medium text-lg md:text-2xl'>Students</p>
            </div>
          </div>
        </div>
        <Image
          src={student}
          className=' self-center md:-mb-20' alt={'Student'} />
      </div>
    </>
  )
}

export default HomeSection