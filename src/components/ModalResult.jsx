import React from 'react'

const ModalResult = () => {
  return (
    <div>
      <div className='fixed bg-black/60 w-full h-full flex justify-center items-center'>
        <div className='w-1/2 h-2/3 bg-blueku rounded-2xl flex justify-center flex-col items-center'>
          {/* Skor  */}
          <h1 className='text-[5rem] font-semibold text-white'>Your Score</h1>
          <h1 className='text-[15rem] font-bold text-yellowku'>100</h1>
          <div className='flex flex-row gap-10'> 
          <button className='bg-yellowku rounded-md p-3 text-white font-semibold'>Detail Here</button>
          <button className='bg-greyku rounded-md p-3 text-white font-semibold'>Back Here</button>
          </div>
          {/* Detail
          <div className='w-full h-2/3 bg-blueku rounded-2xl flex justify-between flex-col items-center'>
            <h1 className='text-[3rem] font-semibold text-white'>Detail Score</h1>
            <div className='flex flex-row justify-center items-center w-[50%]'>
              <div className='grid grid-cols-2 w-full h-full text-center gap-5'>
                <div className='w-full h-full justify-between text-[2rem] font-medium text-yellowku'>Jumlah Benar</div>
                <div className='w-full h-full justify-between text-[2rem] font-medium text-yellowku'>2 Soal</div>
                <div className='w-full h-full justify-between text-[2rem] font-medium text-yellowku'>Jumlah Salah</div>
                <div className='w-full h-full justify-between text-[2rem] font-medium text-yellowku'>2 Soal</div>
                <div className='w-full h-full justify-between text-[2rem] font-medium text-yellowku'>Jumlah jawab</div>
                <div className='w-full h-full justify-between text-[2rem] font-medium text-yellowku'>2 Soal</div>
              </div>
            </div>
              <button className='bg-yellowku rounded-md p-3 text-white font-semibold'>Back Here</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ModalResult
