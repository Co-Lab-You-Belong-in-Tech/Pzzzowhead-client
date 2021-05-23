import React from 'react'

const LandingPage = () => {

  const clickHandler = () => {
    // redirect to the next page
  }

  return (
    <div>
      <h1>Welcome to the SleepyHead App</h1>
      <p> Enter and begin your journey to a better night's sleep </p>
      <button onClick={clickHandler()}>Try me!</button>
    </div>
    
  )
}

export default LandingPage
