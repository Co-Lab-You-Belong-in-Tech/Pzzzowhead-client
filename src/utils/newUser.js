const SERVER_URL = process.env.DEV_SERVER;
import weekdayDictionary from '../data/weekdayDictionary.json';

export const newUser = async({ 
  userName,
  phoneNumber,
  wakeUpTime,
  weekday,
  sleepLength,
  bedTimeAlarm,
  windDownLength,
  windDownAlarm,
  personality
 }) => {
    const payload = JSON.stringify({
    userName,
    phoneNumber,
    wakeUpTime, // wakeup time with timezone (-700)
    weekday: weekdayDictionary[weekday], // adding to Model ( in server)
    sleepLength, 
    bedTimeAlarm,
    windDownLength,
    windDownAlarm, // changing formatting ( to "1.5 hours" or "2 hours")
    personality
  });
  console.log(payload);
    const res = await fetch(`${SERVER_URL}/user/newUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: payload,
    });
    
    const user = await res.json();
    console.log(user);
    return user;
};