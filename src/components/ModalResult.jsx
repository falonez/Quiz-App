import React, { useState } from 'react'

const ModalResult = ({correctAnswer, wrongAnswer, totalAnswer}) => {
    const [detail, setDetail] = useState(false)
    // menghitung Hasil score 
    const countScore = () => {
        const score = (correctAnswer / totalAnswer) * 100
        return Math.floor(score)
    }
    
    const handleBack = () => {
        // Menghapus data di localstorage
        localStorage.removeItem('isLogin')
        localStorage.removeItem('question')
        localStorage.removeItem('time')
        localStorage.removeItem('currentQuestion')
        localStorage.removeItem('correctAnswer')
        localStorage.removeItem('wrongAnswer')
        localStorage.removeItem('totalAnswer')
        window.location.reload()
    }

    const handleDetail = () => {
        // Detail Score
        setDetail(true)
    }
  return (
    <div>
      <div className='fixed bg-black/60 w-full h-full flex justify-center items-center z-20'>
        <div className='w-1/2 h-2/3 bg-blueku rounded-2xl flex justify-center flex-col items-center'>
          {/* Skor  */}
          {!detail && 
          <>
            <h1 className='text-[5rem] font-semibold text-white'>Your Score</h1>
            <h1 className='text-[15rem] font-bold text-yellowku'>{countScore() || 0}</h1>
            <div className='flex flex-row gap-10'> 
            <button className='bg-yellowku rounded-md p-3 text-white font-semibold' onClick={handleDetail}>Detail Here</button>
            <button className='bg-greyku rounded-md p-3 text-white font-semibold' onClick={handleBack}>Back Here</button>
            </div>
          </>
            }
          {/* Detail */}
          {detail && <div className='w-full h-2/3 bg-blueku rounded-2xl flex justify-between flex-col items-center'>
            <h1 className='text-[3rem] font-semibold text-white'>Detail Score</h1>
            <div className='flex flex-row justify-center items-center w-[50%]'>
              <div className='grid grid-cols-2 w-full h-full text-center gap-5'>
                <div className='w-full h-full justify-between text-[2rem] font-medium text-yellowku'>Jumlah Benar</div>
                <div className='w-full h-full justify-between text-[2rem] font-medium text-yellowku'>{correctAnswer} Soal</div>
                <div className='w-full h-full justify-between text-[2rem] font-medium text-yellowku'>Jumlah Salah</div>
                <div className='w-full h-full justify-between text-[2rem] font-medium text-yellowku'>{wrongAnswer} Soal</div>
                <div className='w-full h-full justify-between text-[2rem] font-medium text-yellowku'>Jumlah jawab</div>
                <div className='w-full h-full justify-between text-[2rem] font-medium text-yellowku'>{totalAnswer} Soal</div>
              </div>
            </div>
              <button className='bg-yellowku rounded-md p-3 text-white font-semibold' onClick={handleBack}>Back Here</button>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default ModalResult
