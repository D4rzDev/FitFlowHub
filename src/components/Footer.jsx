import React from 'react'

const Footer = () => {
  return (
    <div className=' flex flex-col  mt-10 px-6 lg:px-20 '>
        <div className=' flex flex-col gap-10 md:flex-row md:justify-between'>
            <h1 className="text-xl font-bold">FitFlow.<strong className=' text-red-700'>hub</strong></h1>
            <div className=' flex flex-col gap-10 md:flex-row'>
                <div className=' flex flex-col gap-1'>
                    <h2 className=' text-sm font-bold'>About Us</h2>
                    <div className=' flex flex-col gap-1 text-xs'>
                        <a href="">Home</a>
                        <a href="">Contact Us</a>
                        <a href="">FAQ</a>
                        <a href="">Support</a>
                        <a href="">Blog</a>
                    </div>
                </div>

                <div className=' flex flex-col gap-1'>
                    <h2 className=' text-sm font-bold'>Terms</h2>
                    <div className=' flex flex-col text-xs gap-1'>
                        <a href="">Privacy</a>
                        <a href="">Careers</a>
                        <a href="">Partners</a>
                        <a href="">Press</a>
                        <a href="">Events</a>
                    </div>
                </div>

                <div className=' flex flex-col gap-1'>
                    <h2 className=' text-sm font-bold'>Contact Us</h2>
                    <div className=' flex flex-col text-xs gap-1'>
                        <a href="">Home</a>
                        <a href="">Contact Us</a>
                        <a href="">FAQ</a>
                        <a href="">Support</a>
                        <a href="">Blog</a>
                    </div>
                </div>
                
            </div>

            <div className=' flex flex-col gap-1 w-[300px]'>
                    <h2 className=' text-sm font-bold'>Subscribe</h2>
                    <div className=' flex flex-col text-xs gap-2'>
                        <p className=' text-xs '>Join our mailing list for the latest updates and promotions.</p>
                        <div className=' flex flex-row'>
                            <input className=' border-[1px] border-gray-500 p-1' type="text" placeholder='Email' />
                            <button className=' text-white px-3 bg-red-700 ' type="submit">Submit</button>
                        </div>
                        <p className=' text-xs'>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
                    </div>
                </div>
        </div>
        

        <div className=' flex flex-col py-4 gap-8 border-t-[1px] border-black mt-10 md:flex-row-reverse md:justify-between '>
            <div className=' flex flex-col text-xs gap-1 md:flex-row '>
                <a href="">Privacy Policy</a>
                <a href="">Terms Of Service</a>
                <a href="">Cookie Settings</a>
            </div>
            <p className=' text-xs'>© 2023 FitFlowHub. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer