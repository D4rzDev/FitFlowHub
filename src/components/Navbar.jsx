import { useState } from 'react'
import React from 'react'
import { IoMdMenu, IoIosClose} from 'react-icons/io'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const toggleNav = () =>{
        setNav(!nav);
    }
  return (
    <nav className=' sticky top-0 z-50 bg-white lg:px-20'>
        <div className=' flex flex-row items-center gap-4 p-4 md:justify-between '>
            <div className=' md:hidden'  onClick={toggleNav}>
                { !nav ? <IoIosClose size={25}/> : <IoMdMenu size={25}/>}
            </div>
            <h1 className="text-lg font-bold">FitFlow.<strong className=' text-red-700'>hub</strong></h1>

            <div className=' hidden md:flex'>
                <div className=' flex flex-row justify-center items-center text-sm gap-2'>
                    <a className=' px-2' href="">Discover</a>
                    <a className=' px-2' href="">Workouts</a>
                    <a className=' px-2' href="">Nutrition</a>
                    <a className=' px-2' href="">Wellness</a>
                </div>
            </div>
        </div>
        
        <div className=' absolute'>
            <div className={!nav ? ' flex flex-col text-center bg-white w-screen h-fit py-10 text-sm font-semibold gap-4' : 'hidden'}>
                <a href="">Discover</a>
                <a href="">Nutrition</a>
                <a href="">Workouts</a>
                <a href="">Wellness</a>
               
            </div> 
        </div>
       
    </nav>
  )
}

export default Navbar