import React, { useEffect, useState } from 'react'
import css from './Timer.module.css'

function Timer(props) {
  const [time, setTime] = useState(props.countDown);
  console.log(time, props.countDown);
  const min = Math.floor(time/60);
  const sec = time%60;

  useEffect(() => {
    const timerEvent = setInterval(() => {
      setTime(time-1);
      // console.log(time);
    }, 1000)
    if(time <= 0){
      props.setTimeover(true);
      clearInterval(timerEvent);
    }
    return () => {
      clearInterval(timerEvent);
    }
  }, [time])
  
  return (
    <div className={css.timerCtn}>
        {(min<=9)?"0":""}{min}:{(sec<=9)?"0":""}{sec}
    </div>
  )
}

export default Timer