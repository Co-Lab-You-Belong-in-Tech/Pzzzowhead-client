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
    timeInput,
    wakeUpTime,
    weekday: weekdayDictionary[weekday],
    sleepLength,
    windDownLength,
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