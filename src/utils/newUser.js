const SERVER_URL = process.env.DEV_SERVER;
import weekdayDictionary from '../data/weekdayDictionary.json';

export const newUser = async({ 
  userName,
  phoneNumber,
  timeInput,
  wakeUpTime,
  weekday,
  sleepLength,
  windDownLength,
  personality
 }) => {
    const payload = JSON.stringify({
    userName,
    phoneNumber,
    timeInput, // adding to Model ( in server)
    wakeUpTime, // wakeup time with timezone (-700)
    weekday: weekdayDictionary[weekday], // adding to Model ( in server)
    sleepLength, 
    windDownLength, // changing formatting ( to "1.5 hours" or "2 hours")
    personality
  });

    const res = await fetch(`${SERVER_URL}/user/newUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: payload,
    });
    
    const user = await res.json();
    console.log(user);
    return user;
};