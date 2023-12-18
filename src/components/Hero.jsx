import React from 'react'

const Hero = () => {
  return (
    <div className=' flex flex-col items-center justify-center '>
        <div className=' absolute text-white px-4 py-[20%] lg:px-20 '>
            <h1 className=' text-4xl font-extrabold w-[60%] md:text-6xl lg:text-7xl'>Achieve Your Fitness Goals with <strong className=' text-red-700'>FitFlowHub</strong></h1>
            <p className=' text-xs mt-2 w-[60%] md:text-sm'>Get personalized workout plans, nutrition guidance, and mental well-being resources all in one app.</p>
            <div className=' flex flex-row items-center text-xs mt-8 gap-4 md:text-sm'>
                <a className=' bg-red-700 rounded-full px-4 py-2 text-white' href="">Learn More</a>
                <a className=' border-2 border-white rounded-full px-6 py-2' href="">Sign Up</a>
            </div>
        </div>
        <img className=' object-cover w-full h-screen z-[-10]' src="/img/hero1.jpg" alt="" srcSet="" width={700} height={500} />
    </div>
  )
}

export default Hero