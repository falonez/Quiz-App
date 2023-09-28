import { useEffect, useState } from 'react'
import './App.css'
import ModalLogin from './components/ModalLogin'
import ModalResult from './components/ModalResult'
import Timer from './components/Timer'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [question, setQuestion] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [wrongAnswer, setWrongAnswer] = useState(0)
  const [totalAnswer, setTotalAnswer] = useState(0)
  const [finish, setFinish] = useState(false)
  const [time, setTime] = useState(parseInt(localStorage.getItem('time')) || 300)

  useEffect(() => {
    // Mengecek apakah sudah login atau belum
    const isLoginStorage = localStorage.getItem('isLogin')
    if(isLoginStorage){
      setIsLogin(true)
      setQuestion(JSON.parse(localStorage.getItem('question')))
      setCurrentQuestion(parseInt(localStorage.getItem('currentQuestion')))
    }
  }, [])

  const handleLogin = (isLogin) => {
    if(isLogin){
      // Mengubah state isLogin menjadi true
      setIsLogin(true)
      localStorage.setItem('isLogin', true)
      getQuestion()
    }
  }
  
  const getQuestion = async () => {
    // Mengambil data pertanyaan dari API 
    const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    const data = await response.json()
    setQuestion(shuffleQuestionList(data.results))
    localStorage.setItem('question', JSON.stringify(shuffleQuestionList(data.results)))
  }

  const shuffleQuestionList = (questions) => {
    // Mengacak pertanyaan dan jawaban
    const shuffledQuestions = questions.map((question) => {
      const shuffledQuestion = JSON.parse(JSON.stringify(question));
      shuffledQuestion.incorrect_answers.push(shuffledQuestion.correct_answer);
      // Acak urutan jawaban dalam array
      shuffledQuestion.incorrect_answers.sort(() => Math.random() - 0.5);
  
      return shuffledQuestion;
    });
  
    return shuffledQuestions;
  };

  const handleNextQuestion = (e) => {
    // Mengecek jawaban yang dipilih 
    const answer = e.target.outerText
    const correct_answer = question[currentQuestion].correct_answer

    if(answer == correct_answer){
      console.log("masuk")
      setCorrectAnswer(correctAnswer + 1)
    }else{
      setWrongAnswer(wrongAnswer + 1)
    }
    setTotalAnswer(totalAnswer + 1)

    // Mengecek apakah sudah mencapai soal terakhir
    if(currentQuestion === question.length - 1){
      // Menampilkan modal hasil
      setFinish(true)
    }else{
      // Melanjutkan ke soal berikutnya
      setCurrentQuestion(currentQuestion + 1)
      localStorage.setItem('currentQuestion', currentQuestion + 1)
    }
  }
  return (
    <>
      {!isLogin && <ModalLogin handleLogin={handleLogin} />}
      {finish && <ModalResult correctAnswer={correctAnswer} wrongAnswer={wrongAnswer} totalAnswer={totalAnswer} />}
      <div className="w-full h-full bg-[#2F2F2F] fixed flex flex-col justify-between items-center py-10">
        <div className="p-6 mx-10 bg-blueku rounded-xl flex justify-center self-start">
          {/* <h2 className="text-white text-xl">Time : 09.50</h2> */}
          <Timer initialTime={time} onTimeout={() => setFinish(true)}  updateTime={setTime} />
        </div>
        {question.length > 0 && (
          <>
            <div className="bg-blueku h-[40vh] w-full flex justify-center items-center text-[3rem] p-20 text-white">
              <h2>{question[currentQuestion].question}</h2>
            </div>
            <div className="flex w-full justify-around">
              {question[currentQuestion].incorrect_answers.map((answer, index) => (
                <div key={index} onClick={handleNextQuestion} className="bg-greyku w-1/4 mx-4 text-center text-[2rem] h-[20vh] font-semibold shadow-md flex justify-center items-center hover:bg-yellowku hover:text-white cursor-pointer">{answer}</div>
              ))}
            </div>
            <div className="text-2xl text-white flex flex-row gap-2">Question<p>{currentQuestion+1}</p>From<p>{question.length}</p></div>
          </>
        )}
      </div>
     
      
    </>
  )
}

export default App
