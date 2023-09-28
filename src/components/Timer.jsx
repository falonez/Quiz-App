import React, { useState, useEffect } from 'react';

function Timer({ initialTime, onTimeout ,updateTime}) {
  const [timeInSeconds, setTimeInSeconds] = useState(initialTime);

  useEffect(() => {
    let timerInterval;

    if (timeInSeconds > 0) {
      localStorage.setItem('time', timeInSeconds)
      timerInterval = setInterval(() => {
        setTimeInSeconds((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timerInterval);
            // Panggil fungsi onTimeout saat waktu habis
            onTimeout();
            return 0;
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
      updateTime(timeInSeconds)
    } else {
      // Panggil fungsi onTimeout jika waktu habis saat komponen dimuat
      onTimeout();
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timeInSeconds, onTimeout]);

  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  return (
    <>
      <h2 className="text-white text-xl">Time : {minutes}:{seconds < 10 ? '0' : ''}{seconds}</h2>
    </>
  );
}

export default Timer;
