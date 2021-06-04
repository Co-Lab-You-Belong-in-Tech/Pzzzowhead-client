import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from '../../pages/LandingPage';
import FormPage from '../../pages/FormPage';
import Navigation from '../Navigation';

import Ready from '../../form/Ready';
import NameNumber from '../../form/NameNumber';
import SleepSetup from '../../form/SleepSetup';
import WindDown from '../../form/WindDown';
import Pzzzownality from '../../form/Pzzzownality';
import Confirmation from '../../form/Confirmation';
import Celebrate from '../../form/Celebrate';
import { newUser } from '../../utils/newUser';

import useInput from '../../hooks/useInput'

export default function App() {

// State for the forms
  const [submissionStyle, setSubmissionStyle] = useState('none');

  const [userName, setUserName] = useInput('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [timeInput, setTimeInput] = useInput('');
  const [wakeUpTime, setWakeUpTime] = useState('');
  const [sleepLength, setSleepLength] = useInput('8');
  const [windDownLength, setWindDownLength] = useInput('1.5 hours');
  const [windDownAlarm, setWindDownAlarm] = useState('');
  const [personality, setPersonality] = useInput('sassy');
  const [weekday, setWeekday] = useInput('weekdays only');
  const [bedTimeAlarm, setBedTimeAlarm] = useState('');

  // click handlers --- possibly unneded
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmissionStyle('block');
  }
  const sendSubmission = () => {
    console.log('clicked!');
    newUser({userName, phoneNumber, timeInput, wakeUpTime, weekday, sleepLength, windDownLength, personality});
 
  }

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/form" component={FormPage} />

        {/* Form cards */}
        <Route exact path="/form/ready" 
          render={(routerProps) => <Ready {...routerProps} /> } 
        />
        <Route path="/form/nameandnumber" 
          render={(routerProps) => <NameNumber {...routerProps}
          userName={userName}
          setUserName={setUserName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber} /> } 
        />
        <Route path="/form/sleepsetup" 
          render={(routerProps) => <SleepSetup {...routerProps}
          sleepLength={sleepLength}
          setSleepLength={setSleepLength}
          timeInput={timeInput}
          setTimeInput={setTimeInput}
          setWeekday={setWeekday}
          setWakeUpTime={setWakeUpTime}
          setBedTimeAlarm={setBedTimeAlarm} /> } 
        />
        <Route path="/form/winddown" 
          render={(routerProps) => <WindDown {...routerProps}
          windDownLength={windDownLength}
          setWindDownLength={setWindDownLength}
          bedTimeAlarm={bedTimeAlarm}
          setWindDownAlarm={setWindDownAlarm} /> } 
        />
        <Route path="/form/pzzzownality" 
          render={(routerProps) => <Pzzzownality {...routerProps}
          personality={personality}
          setPersonality={setPersonality}
           /> } 
        />
        <Route path="/form/confirmation" 
          render={(routerProps) => <Confirmation {...routerProps}
          userName={userName}
          phoneNumber={phoneNumber}
          timeInput={timeInput}
          windDownLength={windDownLength}
          windDownAlarm={windDownAlarm}
          sleepLength={sleepLength}
          personality={personality}
          sendSubmission={sendSubmission}
          weekday={weekday}
          bedTimeAlarm={bedTimeAlarm}
           /> } 
        />
        <Route path="/form/celebrate" 
          render={(routerProps) => <Celebrate {...routerProps} /> } 
        />
      </Switch>
    </Router>
  );
}
