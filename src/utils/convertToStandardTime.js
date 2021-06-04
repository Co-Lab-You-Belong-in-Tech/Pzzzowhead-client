import moment from 'moment';


export const convertToStandardTime = (timeString) => {
  const militaryTime = timeString.split("-")[0];
  return  moment(militaryTime, 'HH:mm').format('h:mm A');
};
