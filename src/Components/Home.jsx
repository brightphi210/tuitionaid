
'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import imageOne from './Images/image1.png'
import imageTwo from './Images/image2.png'

const Home = () => {
    const [isActive1, setActivate1] = useState(true)
    const [isActive2, setActivate2] = useState(false)

    const handleActiveOne = () => {
        setActivate1(true)
        setActivate2(false)
    }

    const handleActiveTwo = () => {
        setActivate1(false)
        setActivate2(true)
    }
  return (
    <div>
        <div className='lg:p-32 py-16 px-5'>
            <div className='flex items-center lg:gap-5 gap-3 justify-center m-auto border border-blue-300 lg:w-fit p-3 px-6 rounded-full '>
                <button className='bg-blue-700 text-white rounded-full py-1 px-3 text-xs'>New</button>
                <p className='text-xs'>Join the waitlist to get notified when we launch.</p>
            </div>

            <div className='text-center'>
                <h2 className='lg:block hidden lg:text-5xl text-2xl text-center pt-16 leading-normal'>Simplified Education Financing <br /> for your 
                    <span className='italic text-blue-700 '>Child</span>
                </h2>

                <h2 className=' lg:hidden block  lg:text-5xl text-3xl text-center pt-16 leading-normal'>Simplified Education Financing  for your 
                    <span className='italic text-blue-700 '>Child</span>
                </h2>

                <p className='py-6 lg:text-md lg:text-sm text-xs'>Simplify educational financing and ensure a brighter tomorrow for your child.</p>
                <button className='bg-blue-700 text-white lg:p-3 lg:px-10 lg:w-fit w-full lg:text-lg p-3 px-16 text-sm rounded-full'>Join the waitlist</button>

            </div>

            <div className='m-auto flex justify-center mt-5 bg-white rounded-full w-fit items-center lg:p-3 lg:px-8 p-2 px-5 shadow-md gap-5'>
                <div className="avatar-group -space-x-4 rtl:space-x-reverse flex">
                    <div className="avatar rounded-full">
                        <div className="w-8">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg " className='rounded-full' />
                        </div>
                    </div>


                    <div className="avatar rounded-full">
                        <div className="w-8">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg " className='rounded-full' />
                        </div>
                    </div>

                    <div className="avatar rounded-full">
                        <div className="w-8 " >
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"  className='rounded-full'/>
                        </div>
                    </div>

                    <div className="avatar rounded-full">
                        <div className="w-8">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg " className='rounded-full' />
                        </div>
                    </div>
                </div>

                <p className='lg:text-md text-xs'>Join 237+ people currently on our waitlist.</p>

            </div>
        </div>


        <div className='bg-white lg:p-20 py-16 px-5'>
            <div className='bg-rose-50 w-fit flex  rounded-full justify-center m-auto items-center gap-5 py-3 px-7'>
                <button onClick={handleActiveOne} className={`${isActive1 ? 'bg-blue-800 text-white'  : 'bg-rose-50 text-black' } py-3 px-5 rounded-full `}>For Applicants</button>
                <button onClick={handleActiveTwo} className={`${isActive2 ? 'bg-blue-800 text-white'  : 'bg-rose-50 text-black' } py-3 px-5 rounded-full `}>For Institutions</button>
            </div>



            {isActive1 && (
                <>
                    <div>
                        <h2 className='lg:block hidden lg:text-4xl text-2xl text-center pt-16 leading-normal'>Paying your <span className='italic text-blue-700 '>school fees</span> doesn’t <br />have to be Hard. </h2>
                        <p className='py-6 lg:text-md lg:text-sm text-xs text-center'>With Tuition Aid, you can have your tuition paid for you, while you pay at your later.</p>
                    </div>

                    <div className='lg:flex lg:justify-center lg:flex-row flex-col-reverse m-auto items-center w-fit mt-10 gap-5'>
                        <div className='w-full flex flex-col gap-10'>
                            <div>
                                <h2 className='flex gap-3 items-center lg:text-xl'><p className='text-green-600'><IoCheckmarkDoneCircleSharp /></p>Simple Loan Application Process</h2>
                                <p className='py-2 px-10 pr-0'>Apply hassle-free, and secure your childs <br /> education with ease.</p>
                            </div>

                            <div>
                                <h2 className='flex gap-3 items-center lg:text-xl'><p className='text-green-600'><IoCheckmarkDoneCircleSharp /></p>Comparison of Loan Products</h2>
                                <p className='py-2 px-10 pr-0'>Easily compare interest rates, repayment plans. And select <br /> Plans that best aligns with your income.</p>
                            </div>

                            <div>
                                <h2 className='flex gap-3 items-center lg:text-xl'><p className='text-green-600'><IoCheckmarkDoneCircleSharp /></p>Direct Tuition Fee Payment</h2>
                                <p className='py-2 px-10 pr-0'>Tuition fees settled directly with institutions, ensuring seamless financial <br /> transactions so you don’t have to worry.</p>
                            </div>

                            <div>
                                <h2 className='flex gap-3 items-center lg:text-xl'><p className='text-green-600'><IoCheckmarkDoneCircleSharp /></p>Easy Tracking</h2>
                                <p className='py-2 px-10 pr-0'>Stay updated on your application status, with real time updates.</p>
                            </div>
                        </div>

                        <div className='w-full ml-auto h-[35rem] overflow-hidden rounded-3xl'>
                            <Image src={imageOne} alt='' className='w-full'/>
                        </div>
                    </div>
                </>
            )}

            {isActive2 && (

                <>
                    <div>
                        <h2 className='lg:block hidden lg:text-4xl text-2xl text-center pt-16 leading-normal'>Less out of school students. <br /> Less fee Defaulters</h2>
                        <p className='py-6 lg:text-md lg:text-sm text-xs text-center'>With Tuition Aid, you can have your tuition paid for you, while you pay at your later.</p>
                    </div>

                    <div className='flex justify-center m-auto items-center w-fit mt-10 gap-5'>
                    <div className='w-full flex flex-col gap-10'>
                        <div>
                            <h2 className='flex gap-3 items-center lg:text-xl'><p className='text-green-600'><IoCheckmarkDoneCircleSharp /></p>Streamlined Fee Collection</h2>
                            <p className='py-2 px-10 pr-0'>Receive payments promptly, minimizing delays and revenue loss, 
                                <br />allowing institutions to focus on providing quality education.
                            </p>
                        </div>

                        <div>
                            <h2 className='flex gap-3 items-center lg:text-xl'><p className='text-green-600'><IoCheckmarkDoneCircleSharp /></p>Enhanced Enrollment and Retention</h2>
                            <p className='py-2 px-10 pr-0'>Attract and retain students with accessible financing options, ensuring, <br />
                                stable enrollment and fostering a thriving educational community
                            </p>
                        </div>

                        <div>
                            <h2 className='flex gap-3 items-center lg:text-xl'><p className='text-green-600'><IoCheckmarkDoneCircleSharp /></p>Seamless Integration</h2>
                            <p className='py-2 px-10 pr-0'>Integrate course and fee details effortlessly, providing parents with easy 
                            <br /> access to information, enhancing communication, and fostering trust 
                            <br /> between institutions and families.</p>
                        </div>

                        <div>
                            <h2 className='flex gap-3 items-center lg:text-xl'><p className='text-green-600'><IoCheckmarkDoneCircleSharp /></p>Reporting and Analytics</h2>
                            <p className='py-2 px-10 pr-0'>Access valuable insights for improved financial management and decision-making, 
                            <br /> allowing institutions to optimize resources and support student 
                            <br /> success effectively.</p>
                        </div>
                    </div>

                    <div className='w-full ml-auto h-[35rem] overflow-hidden rounded-3xl'>
                        <Image src={imageTwo} alt='' className='w-full'/>
                    </div>
                    </div>
                </>
                
            )}
        </div>



    </div>
  )
}

export default Home