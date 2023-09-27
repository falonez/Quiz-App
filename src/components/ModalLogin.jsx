import React from 'react'

const ModalLogin = () => {
  return (
    <>
       <div className='fixed z-10 bg-[#2F2F2F] w-full h-full flex items-center justify-center hidden'>
        <form action="" className=' bg-blueku p-10 rounded-xl flex justify-between flex-col gap-5'>
          <h1 className='text-white font-semibold'>Hello Welcome to Quizku</h1>
          <div className='flex flex-col gap-5'>
          <input type="text" className='rounded-md p-2 pl-4 outline-none' placeholder='Username' />
          <input type="text" className='rounded-md p-2 pl-4' placeholder='Password' />
          <button className='bg-yellowku rounded-md p-3 text-white font-semibold'>Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ModalLogin
