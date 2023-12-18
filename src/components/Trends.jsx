import React from 'react'
import Image from 'next/image'

const Trends = () => {
  return (
    <div className=' flex flex-col gap-6 px-6 py-20 lg:px-20'>
        <div className=' flex flex-col items-center justify-center'>
            <h2 className=' text-xl text-center font-extrabold px-10 w-[70%]'>Discover the Latest <strong className=' text-red-700'>Fitness Trends</strong></h2>
            <p className=' text-xs text-center px-10'>Stay updated with our informative blog articles.</p>
        </div>
        
        <div className=' flex flex-col justify-center items-center gap-10 md:flex-row'>
            <div className=' flex flex-col justify-center items-center gap-4'>
                <Image src="/img/trend1.jpg" alt="" width={500} height={500} />
                <div className=' flex flex-col justify-center items-center'>
                    <h2 className=' text-sm font-bold w-[70%] text-center'>10 Tips for a Healthy Lifestyle</h2>
                    <p className=' text-xs text-center '>Learn how to maintain a healthy lifestyle with these simple tips.</p>
                </div>
            </div>

            <div className=' flex flex-col justify-center items-center gap-4'>
                <Image src="/img/plan3.jpg" alt=""  width={500} height={500}/>
                <div className=' flex flex-col justify-center items-center'>
                    <h2 className=' text-sm font-bold w-[70%] text-center'>The Benefits of Yoga for Mental Health</h2>
                    <p className=' text-xs text-center'>Discover how practicing yoga can improve your mental well-being.</p>
                </div>
            </div>

            <div className=' flex flex-col justify-center items-center gap-4'>
                <Image src="/img/plan1.jpg" alt=""  width={500} height={500}/>
                <div className=' flex flex-col justify-center items-center'>
                    <h2 className=' text-sm font-bold w-[70%] text-center'>The Importance of Strength Training</h2>
                    <p className=' text-xs text-center'>Learn why strength training is essential for overall fitness.</p>
                </div>
            </div>
        </div>
        <a className=' text-xs text-end' href="">View All</a>
    </div>
  )
}

export default Trends