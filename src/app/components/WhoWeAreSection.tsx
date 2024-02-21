import Image from 'next/image'
import React from 'react'
import woman from '@/assets/images/unsplash_JaoVGh5aJ3E.png'
import rocket from '@/assets/images/Rocket.png'
import bulb from '@/assets/images/Bulb.png'

const WhoWeAreSection: React.FC = () => {
  return (
    <div className=' bg-gradient-to-r from-primary-200 to-primary-100 py-5 md:py-16 text-white px-6'>
      <h1 className='uppercase text-center mb-5 md:mb-16 md:text-left md:mx-32 font-bold text-xl md:text-2xl text-yellow-300'>Who we are</h1>
      <div className='flex flex-col-reverse md:flex-row md:px-32 items-center justify-center md:items-start gap-y-4 md:gap-x-6'>
        <div className='flex flex-col gap-y-4 md:gap-y-8'>
          <h2 className='text-center capitalize text-3xl md:text-left md:text-4xl font-bold' >We help students achieve their goals!</h2>
          <p className='text-center md:text-left md:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo incidunt non earum! Atque impedit quod perferendis voluptate minus, sint molestiae blanditiis obcaecati praesentium reprehenderit nemo ipsa placeat odit excepturi laborum.
          </p>

          <div className='flex flex-col justify-center items-center gap-y-4 md:flex-row  w-full'>
            <div className='flex justify-between items-center gap-x-4'>
              <Image
              src={rocket}
              alt="Rocket"
              className='h-20 w-auto'
              />
              <div className='flex flex-col gap-y-2'>
                <h2 className='font-bold'>Lorem ipsum dolor sit.</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, delectus.</p>
              </div>
            </div>
            <div className='flex justify-between items-center gap-x-4'>
              <Image
              src={bulb}
              alt="Bulb"
              className='h-20 w-auto'
              />
              <div className='flex flex-col gap-y-2'>
                <h2 className='font-bold'>Lorem ipsum dolor sit.</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, delectus.</p>
              </div>
            </div>
          </div>
          <button type="button" className="focus:outline-none text-primary-200 font-bold bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-lg text-sm py-2.5 md:text-xl px-5 md:py-4 me-2 mb-2 md:w-4/12 self-center">Contact Us</button>
        </div>
        <Image
          src={woman}
          alt="Woman"
          className='h-auto md:w-[500px]'
        />
      </div>
    </div>
  )
}

export default WhoWeAreSection