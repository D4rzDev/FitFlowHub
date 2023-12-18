import React from 'react'
import Image from 'next/image'

const Healthplans = () => {
  return (
    <div className=' flex flex-col justify-center items-center gap-10 bg-white px-6 pt-10 lg:px-20'>
        <div className=' flex flex-col justify-center items-center gap-4 text-center'>
            <h2 className=' text-xl text-center font-extrabold w-[50%]'>Achieve Your Fitness Goals with <strong className=' text-red-700'>FitFlowHub</strong></h2>
            <p className=' text-xs px-10'>FitFlowHub is a comprehensive fitness and wellness app that provides personalized workout plans, nutrition guidance, and mental well-being resources. Whether you're a beginner or an experienced fitness enthusiast, our app is designed to help you reach your goals and live a healthier, happier life.</p>
        </div>
        <div className=' flex flex-col justify-center items-center gap-10 md:flex-row'>
            <div className=' flex flex-col justify-center items-center gap-4'>
                <Image src="/img/plan1.jpg" alt="" width={500} height={500} />
                <div className=' flex flex-col justify-center items-center gap-2'>
                    <h2 className=' text-sm font-bold w-[70%] text-center'>Personalized Workout Plans Just for You</h2>
                    <p className=' text-xs text-center'>Our app creates customized workout plans based on your fitness level, goals, and preferences. Say goodbye to generic routines and hello to effective and enjoyable workouts.</p>
                </div>
            </div>

            <div className=' flex flex-col justify-center items-center gap-4'>
                <Image src="/img/plan2.jpg" alt="" width={500} height={500} />
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className=' text-sm font-bold w-[70%] text-center'>Nutrition Guidance for a Balanced Diet</h2>
                    <p className=' text-xs text-center'>Eating right is essential for a healthy lifestyle. FitFlowHub provides expert nutrition guidance to help you make informed choices and maintain a balanced diet.</p>
                </div>
            </div>

            <div className=' flex flex-col justify-center items-center gap-4'>
                <Image src="/img/plan3.jpg" alt="" width={500} height={500} />
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className=' text-sm font-bold w-[70%] text-center'>Take Care of Your Mental Well-Being</h2>
                    <p className=' text-xs text-center'>We believe that mental well-being is just as important as physical fitness. FitFlowHub offers resources and practices to support your mental health journey.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Healthplans