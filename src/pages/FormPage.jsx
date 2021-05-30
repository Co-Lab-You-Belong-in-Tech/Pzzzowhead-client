import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { newUser } from '../utils/newUser';


function useInput(initialValue){
   const [value,setValue] = useState(initialValue);

    function handleChange(e){
        setValue(e.target.value);
    }

   return [value,handleChange];
}

const FormPage = () => {

    const [submissionStyle, setSubmissionStyle] = useState('none');

    const [userName, setUserName] = useInput('');
    const [phoneNumber, setPhoneNumber] = useInput('');
    const [wakeUpTime, setWakeUpTime] = useInput('');
    const [sleepLength, setSleepLength] = useInput(8);
    const [windDownTime, setWindDownTime] = useInput('');
    const [personality, setPersonality] = useInput('sassy');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStyle('block');
  }
  const sendSubmission = () => {
    console.log('clicked!');
    newUser({userName, phoneNumber, wakeUpTime, sleepLength, windDownTime, personality});
 
  }

  
  return (
      <div className="form-page" onSubmit={handleSubmit}>
        <form>
          <label>
            Name:
              <input  type="text" name="" value={userName} onChange={setUserName} placeholder="Your Name"/>
          </label>
          <label>
            Phone Number:
            <input  type="text" name="" value={phoneNumber} onChange={setPhoneNumber} placeholder="1503123456789"/>
          </label>
          <label>
            Wake Up Time:
            <input  type="text" name="" value={wakeUpTime} onChange={setWakeUpTime} placeholder="8:30AM"/>
          </label>
          <label>
            Hours of Sleep:
            <select value={sleepLength} onChange={setSleepLength}>
              <option value="6">6 hours</option>
              <option value="7">7 hours</option>
              <option default value="8">8 hours</option>
              <option value="9">9 hours</option>
              <option value="10">10 hours</option>
            </select>
          </label>
          <label>
            Wind Down Time:
            <input  type="text" name="" value={windDownTime} onChange={setWindDownTime} placeholder="90"/>
          </label>
          <label>
            Pillow Personality:
            <select value={personality} onChange={setPersonality}>
              <option default value="sassy">Sassy</option>
              <option value="friendly">Friendly</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className="submission" style={{display: submissionStyle}}>
          <p> Your name is {userName}</p>
          <p> Your phone number is {phoneNumber}</p>
          <p> Your wake up time is {wakeUpTime}</p>
          <p> Your Preferred Sleep length is {sleepLength} hours</p>
          <p> Your Wind Down time is {windDownTime} minutes</p>
          <p> And your sleep bot personality is "{personality}" </p>
          <button onClick={sendSubmission}>Let's Do This!</button>
        </div>
      </div>
  )
}

export default FormPage
