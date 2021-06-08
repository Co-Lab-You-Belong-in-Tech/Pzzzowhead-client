import React from 'react'
import { useHistory } from 'react-router-dom'

const Celebrate = () => {

  const history = useHistory();

  const navigateHome = () => {
    history.push('/')
  };

  
  return (
    <>
      <div className="celebrate-card form">
        <h2>Woohoo!</h2>
        <p>You're all set up and I just sent you a text</p>
        <img src="https://www.placekitten.com/310/200" alt="celebrate-pic" />
        <p>I'm SO excited you're joining  me on this 3 week journey to sleep on time and wake up with energy!</p>
        <button onClick={navigateHome}>Great!</button>
      </div>
    </>
  )
}

export default Celebrate
