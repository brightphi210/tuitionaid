import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center py-10 '>
        <div className='flex p-3 px-8 bg-white lg:rounded-full rounded-lg fixed w-11/12 m-auto justify-center  items-center shadow-md'>
            <h2 className='lg:text-xl text-xs font-bold'>Tution Aid</h2>
            <button className='ml-auto bg-blue-800 text-white p-2 px-5 lg:rounded-full rounded-md lg:text-lg text-xs'>Join the waitlist</button>
        </div>
    </div>

    
  )
}

export default Navbar