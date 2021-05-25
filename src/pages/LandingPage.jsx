import React from 'react';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();

  const navigateToForm = () => {
    history.push('/form')
  };

  return (
    <div>
      <h1>Welcome to the SleepyHead App</h1>
      <p> Enter and begin your journey to a better night's sleep </p>
      <button onClick={() => navigateToForm()}>Try me!</button>
    </div>
    
  )
}

export default LandingPage
