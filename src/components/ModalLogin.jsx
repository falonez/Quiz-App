import React, { useState } from 'react'
import DataAccount from '../../public/data.json'

const ModalLogin = ({handleLogin}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    console.log(DataAccount)
    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Mencari data akun dari data.json
        const findAccount = DataAccount.find((account) => account.username === formData.username && account.password === formData.password)
        console.log(findAccount)

        // Check apakah akun terdata di data.json 
        if(findAccount){
            handleLogin(true)
        }else{
            alert('Username atau Password Salah')
        }
    }

  return (
    <>
       <div className='fixed z-10 bg-[#2F2F2F] w-full h-full flex items-center justify-center'>
        <form onSubmit={handleSubmit} className=' bg-blueku p-10 rounded-xl flex justify-between flex-col gap-5'>
          <h1 className='text-white font-semibold'>Hello Welcome to Quizku</h1>
          <div className='flex flex-col gap-5'>
          <input type="text" onChange={(e)=>setFormData({...formData, username : e.target.value})} className='rounded-md p-2 pl-4 outline-yellowku outline-6 outline-offset-2 border-none' placeholder='Username' />
          <input type="password" onChange={(e)=>setFormData({...formData, password : e.target.value})} className='rounded-md p-2 pl-4 outline-yellowku outline-6 outline-offset-2 border-none' placeholder='Password' />
          <button type="submit" className='bg-yellowku rounded-md p-3 text-white font-semibold hover:bg-yellowku/80'>Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ModalLogin
