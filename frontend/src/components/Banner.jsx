import React, { useEffect, useState } from 'react'
import css from './Banner.module.css'
import rajPhoto from '../asserts/raj_photo.png'
import Timer from './Timer'

function Banner() {
  const [data, setData] = useState({
    id: 1,
    state: true,
    timer: -1,
    description: "hello world",
    link: "https://abc.com"
  });
  const [timeover, setTimeover] = useState(false)
  const fetchData = async () => {
    try{
      const response = await fetch('https://tuf-vignesh.vercel.app/banner');
      const bannerData = await response.json();
      setData(bannerData);
      console.log(bannerData);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div className={css.bannerCtn} style={{visibility: (data.state && !timeover)?"visible":"hidden"}}>
        <div className={css.bannerImgPart}>
            <img src={rajPhoto} alt='Striver' />
        </div>
        <div className={css.bannerInfoPart} >
            {data.timer>-1 && <Timer countDown={data.timer} setTimeover={setTimeover}/>}
            {data.description}
            <a className={css.bannerLink} href={data.link}>◄ Visit TUF+</a>
        </div>
    </div>
  )
}

export default Banner