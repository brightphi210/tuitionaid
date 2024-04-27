
'use client'
import Image from 'next/image'
import React from 'react'
import imageThree from './Images/image3.png'

const Navbar = () => {
  return (
    <div className='flex justify-center py-10'>
        <div className='flex p-3 px-8 bg-white lg:rounded-full rounded-lg fixed w-11/12 m-auto justify-center  items-center shadow-md z-40'>
            <h2 className='lg:text-xl text-xs font-bold'>Tution Aid</h2>
            <button className='ml-auto bg-blue-800 text-white p-2 px-5 lg:rounded-full rounded-md lg:text-lg text-xs' onClick={()=>document.getElementById('my_modal_3').showModal()}>Join the waitlist</button>
        </div>


        <dialog id="my_modal_3" className="modal">
            <div className="modal-box p-10 pt-5 rounded-lg bg-white lg:max-w-[35rem]">
                <form method="dialog">
                    
                    <div className='flex items-center mb-5'>
                        <Image src={imageThree} alt='' width={80}/>
                        <button className="btn btn-sm btn-circle btn-ghost right-2 top-2 ml-auto text-lg">✕</button>
                    </div>


                    <div>
                        <h2 className='lg:text-3xl text-xl'>Use <span className='text-blue-600'>TuitionAid</span> before others.</h2>
                        <p className='lg:text-sm text-xs pt-2'>
                            Be the first to experience the future of education financing. 
                            <br className='lg:block hidden'/> Sign up for our waitlist and get exclusive access when we launch.
                        </p>
                    </div>


                    <div className='pt-10'>
                        <p className='lg:text-sm text-xs pb-1'>Full Name: </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text" className="grow"  placeholder="Username" />
                        </label>
                    </div>

                    <div className='pt-5'>
                        <p className='lg:text-sm text-xs pb-1'>Email: </p>
                        <label className="input input-bordered flex items-center gap-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>

                    <button className='bg-blue-700 text-white mt-5 lg:p-3 lg:px-10 lg:w-full w-full lg:text-lg p-3 px-16 text-sm rounded-full'>Join the waitlist</button>
                    

                    <div>
                        <p className='text-center text-xs pt-5'>
                            We will never share or sell your emails with anyone. <br className='lg:block hidden'/>
                            We’ll only send you product updates that you can unsubscribe from anytime.
                        </p>
                    </div>
                </form>
            </div>
        </dialog>
    </div>

    
  )
}

export default Navbar