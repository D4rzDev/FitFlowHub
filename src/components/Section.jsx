import React from 'react'
import { FaCube } from "react-icons/fa6";
import Image from 'next/image';

const Section = () => {
  return (
    <div className=' flex flex-col px-6 py-20 gap-6 md:flex-row lg:px-20'>
        <div className=' flex flex-col gap-10'>
            <div className=' flex flex-col gap-2'>
                <FaCube size={30}/>
                <h2 className=' text-4xl font-extrabold w-[70%]'>Achieve Your Fitness Goals with <strong className=' text-red-700'>FitFlowHub</strong></h2>
                <p className=' text-xs w-[70%]'>Get personalized workout plans, nutrition guidance, and mental well-being resources to help you reach your fitness goals.</p>
            </div>
            <div className=' flex flex-row text-xs'>
                <a className=' border-2 border-black rounded-full px-4 py-2 text-black' href="">Learn More</a>
                <a className=' rounded-full px-6 py-2' href="">Sign Up</a>
            </div>
        </div>

        <div className=' flex flex-col md:w-[70%]'>
          <Image src="/img/section.jpg" alt="" width={500} height={500} />
        </div>
    </div>
  )
}

export default Section