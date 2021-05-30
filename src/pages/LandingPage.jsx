import React from 'react';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();

  const navigateToForm = () => {
    history.push('/form/ready')
  };

  return (
    <>
      <section className="intro-container">
        <h1>Make going to sleep fun!</h1>
        <h3> Get personalized text, reminders and schedule how your prefer with help form pzzzowhead</h3>
      </section>
      <section className="card-container">
        <div className="info-card">
          <img src="https://www.placecage.com/c/300/195" alt=" " className="card-image" />
          <h2>Pzzzowhead</h2>
          <p>Pickt he typw of pzzzowhead personality you'd like to receiv texts from</p>
        </div>
        <div className="info-card">
          <img src="https://www.placecage.com/c/305/200" alt=" " className="card-image" />
            <h2>Help from a friend</h2>
            <p>Pzzzowhead will healp you create a personalized sleep schedule and send you daily reminders</p>
        </div>
        <div className="info-card">
          <img src="https://www.placecage.com/c/302/200" alt=" " className="card-image" />
            <h2>Sleep Easy</h2>
            <p>With the help of pzzzowhead you will know what time you need to wind down, go to bed and the amount of sleep hours you will get each night.</p>
        </div>
      </section>
      <section className="explain-container">
        <div className="explain-content">
          <h1>What sets pzzzow apart...</h1>
          <p>May people delay sleep because they didn't get enough down time during the day - a phenomenon called "revenge bedtime procrastination". Pzzzow will help you defeat this by reminding you when to wind down and sleep Also you will have some fun along the way!</p>
          <img src="https://www.placecage.com/c/310/450" alt="pzzzow-screenshot" className="pzzzow-screenshot" />
        </div>
      </section>
      <section className="footer">
        <footer>This is the footer for Pzzzowhead</footer>
      </section>



      <p> Enter and begin your journey to a better night's sleep </p>
      <button onClick={() => navigateToForm()}>Try me!</button>
    </>
    
  )
}

export default LandingPage
