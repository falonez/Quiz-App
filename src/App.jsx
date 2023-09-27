import { useEffect, useState } from 'react'
import './App.css'
import ModalLogin from './components/ModalLogin'

function App() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    // Mengecek apakah sudah login atau belum
    const isLoginStorage = localStorage.getItem('isLogin')
    if(isLoginStorage){
      setIsLogin(true)
    }
  }, [])

  const handleLogin = (isLogin) => {
    console.log(isLogin)
    if(isLogin){
      setIsLogin(true)
      localStorage.setItem('isLogin', true)
    }
  }
  return (
    <>
      {!isLogin && <ModalLogin handleLogin={handleLogin} />}
      <div className="w-full h-full bg-[#2F2F2F] fixed flex flex-col justify-between items-center py-10">
        <div className="p-6 mx-10 bg-blueku rounded-xl flex justify-center self-start">
          <h2 className="text-white text-xl">Time : 09.50</h2>
        </div>
        <div className="bg-blueku h-[40vh] w-full flex justify-center items-center text-[3rem] p-20 text-white">
          <h2>An interface design application that runs in the browser with team-based collaborative design projects</h2>
        </div>
        <div className="flex w-full justify-around">
          <div className="bg-yellowku text-white w-1/4 mx-4 text-center text-[2rem] h-[20vh] font-semibold shadow-md flex justify-center items-center"><h1>FIGMA</h1></div>
          <div className="bg-greyku w-1/4 mx-4 text-center text-[2rem] h-[20vh] font-semibold shadow-md flex justify-center items-center">ADOBE XD</div>
          <div className="bg-greyku w-1/4 mx-4 text-center text-[2rem] h-[20vh] font-semibold shadow-md flex justify-center items-center">INVISION</div>
          <div className="bg-greyku w-1/4 mx-4 text-center text-[2rem] h-[20vh] font-semibold shadow-md flex justify-center items-center">SKETCH</div>
        </div>
        <div className="text-2xl text-white">10 dari 23</div>
      </div>
     
      
    </>
  )
}

export default App
