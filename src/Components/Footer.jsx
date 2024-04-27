import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white py-10 lg:px-20 px-5'>
        <div>
            <h2 className='lg:text-lg pb-5 text-lg'>Tuition Aid</h2>
            <div className='lg:flex lg:items-center '>
                <ul className='lg:flex gap-5 lg:items-center flex flex-col '>
                    <li className='lg:text-sm text-xs'>Terms</li>
                    <li className='lg:text-sm text-xs'>Privacy</li>
                </ul>

                <p className='lg:ml-auto lg:text-sm text-xs lg:p-0 pt-5'>2024 TutionAid. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer