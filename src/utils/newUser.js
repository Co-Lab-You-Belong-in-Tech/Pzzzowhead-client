const SERVER_URL = process.env.DEV_SERVER;

export const newUser = async({ 
  userName,
  phoneNumber,
  wakeUpTime,
  sleepLength,
  windDownTime,
  personality
 }) => {
    const payload = JSON.stringify({
    userName,
    phoneNumber,
    wakeUpTime,
    sleepLength,
    windDownTime: parseFloat(windDownTime),
    personality,
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