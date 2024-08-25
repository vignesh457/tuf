import React, { useEffect, useState } from 'react'
import css from './Dashboard.module.css'

function Dashboard() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const fetchFormData = async () => {
    try{
      const response = await fetch('https://tuf-vignesh.vercel.app/banner');
      const bannerData = await response.json();
      setFormData(bannerData);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    fetchFormData()
  },[])

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  }
  const handleClick = async (e) => {
    e.preventDefault();
    if(formData.description.trim() === '') {
      setError("Missing description!");
      return;
    }
    else if(formData.timer === '' || parseInt(formData.timer) < 0 || parseInt(formData.timer) > 3600) {
      setError("Timer 0 to 3600 only");
      return;
    }
    else if(formData.link.trim() === '' || (!formData.link.startsWith('http://') && !formData.link.startsWith('https://'))) {
      setError("Problem with Link!");
      return;
    }
    try{
      const response = await fetch('https://tuf-vignesh.vercel.app/banner', {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          ...formData,
          state: formData.state==='on',
          timer: parseInt(formData.timer)
        }), 
      });
      const data = await response.json();
      setError(null);
      window.location.reload();
      console.log(data);
    }
    catch(e) {
      setError("Server Problem!");
    }
  }
  return (
    <div className={css.dashboardCtn}>
        <form className={css.formCtn}>
          {error && <p className={css.error}>{error}</p>}
          <h1>Dashboard</h1>
          <label className={css.stateCtn}>
            <span>Visiblity</span> 
            <label>
              <input className={css.state} onChange={handleChange} defaultChecked={formData.state} type="radio" name="state" value="on" required/>
              ON
            </label>
            <label>
              <input className={css.state} onChange={handleChange} defaultChecked={!formData.state} type="radio" name="state" value="off" required/>
              OFF
            </label>
          </label>
          <label className={css.descriptionCtn}>
            <span>Description</span>
            <textarea className={css.description} value={formData.description} name="description" onChange={handleChange} placeholder="Enter the description" required="true"/>
          </label>
          <label className={css.timerCtn}>
            <span>Countdown</span>
            <input type="number" max="3600" value={formData.timer} onChange={handleChange} name="timer" placeholder='in seconds' className={css.timer} required/>
          </label>
          <label className={css.linkCtn}>
            <span>Link</span>
            <input type="url" onChange={handleChange} value={formData.link} name="link" placeholder='https://takeuforward.org/plus' className={css.link} required/>
          </label>
          <button type='submit' onClick={handleClick} className={css.submit}>Update</button>
        </form>
    </div>
  )
}

export default Dashboard